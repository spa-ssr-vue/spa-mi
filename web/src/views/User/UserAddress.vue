<template>
  <div class="address">
    <h2>Address list</h2>
    <el-table :data="addresses" border stripe>
      <el-table-column
        v-for="(des, field) in fields"
        :prop="field"
        :key="`${field}`"
        :label="des.name"
        :width="des.width"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="dialog" :class="{ show: isShowDialog }">
      <div class="mask"></div>
      <div class="content">
        <div class="title">修改收货人地址</div>
        <el-form
          :model="address"
          ref="form"
          label-width="120px"
          @submit.native.prevent="modifyAddress"
        >
          <el-form-item label="收货人姓名">
            <el-input v-model="address.name"></el-input>
          </el-form-item>
          <el-form-item label="收货人电话">
            <el-input v-model="address.phone"></el-input>
          </el-form-item>
          <el-form-item label="收货人地址">
            <el-input v-model="address.addr" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">修改</el-button>
            <el-button @click="isShowDialog = !isShowDialog" type="primary"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserAddress } from "../../api/address";
import { deleteResource, putResource } from "../../api/crud";

export default {
  name: "UserAddress",
  data() {
    return {
      isShowDialog: false,
      address: {},
      addresses: [],
      fields: {
        _id: { name: "ID", width: "220px" },
        name: { name: "收货人", width: "80px" },
        phone: { name: "收货人电话", width: "120px" },
        addr: { name: "收件人地址", width: "280px" },
        createdAt: { name: "创建时间", width: "100px" },
      },
    };
  },
  methods: {
    async fetchAddresses() {
      const res = await getUserAddress();
      this.addresses = res.data;
    },
    showDialog(row) {
      this.address = JSON.parse(JSON.stringify(row));
      this.isShowDialog = true;
    },
    async modifyAddress() {
      await putResource("addresses", this.address._id, this.address);
      this.isShowDialog = false;
      this.$message({
        type: "success",
        message: "修改成功",
      });
      this.fetchAddresses();
    },
    async remove(row) {
      await deleteResource("addresses", row._id);
      this.$message({
        type: "success",
        message: "删除成功",
      });
      this.fetchAddresses();
    },
  },
  created() {
    this.fetchAddresses();
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.address {
  .dialog {
    .title {
      padding: 10px 0 10px 20px;
      font-size: 16px;
    }
    .content {
      width: 600px;
      padding: 20px 20px 0 0;
      background-color: map-get($colors, white);
    }
  }
}
</style>
