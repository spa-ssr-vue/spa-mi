<template>
  <div v-if="option.column">
    <h3 style="margin-bottom: 20px;text-align: center">{{ option.title }}</h3>
    <avue-crud
      v-model="formData"
      :data="tableData"
      :option="option"
      :page="page"
      :before-open="openDialog"
      @on-load="load"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
    >
      <template slot="contentForm">
        <vue-editor v-model="formData.content"></vue-editor>
      </template>
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop() resource!: string;

  name = "ResourceList";
  formData = {};
  tableData = [];
  page = {
    total: 0,
    currentPage: 1,
    pageSize: 10,
  };
  query = {
    page: 1,
    limit: 10,
    operator: {},
  };
  option = {};

  openDialog(done, type) {
    this.resource === "channels" && (this.formData = { parentChannel: null });
    this.resource === "replies" && (this.formData = { toUser: null });
    done();
  }

  async load(page) {
    this.query.page = page.currentPage;
    this.query.limit = page.pageSize;
    await this.fetch();
  }

  async create(row, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    for (const key in data) {
      if (/^\$./i.test(key) || data[key] === "") {
        delete data[key];
      }
    }
    await this.$http.post(`/${this.resource}`, data);
    this.fetch();
    this.$message.success("创建成功");
    done();
  }

  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    for (const key in data) {
      if (/^\$./i.test(key)) {
        delete data[key];
      }
    }
    await this.$http.put(`/${this.resource}/${row._id}`, data);
    this.fetch();
    this.$message.success("更新成功");
    done();
  }

  async remove(row, index) {
    await this.$http.delete(`/${this.resource}/${row._id}`);
    this.fetch();
    this.$message.success("删除成功");
  }

  async fetch() {
    await this.fetchOption();
    const res = await this.$http.get(`/${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.tableData = res.data.data;
  }

  async fetchOption() {
    const res = await this.$http.get(`options/${this.resource}`);
    this.option = res.data.option;
  }

  created() {
    this.fetchOption();
  }
}
</script>

<style></style>
