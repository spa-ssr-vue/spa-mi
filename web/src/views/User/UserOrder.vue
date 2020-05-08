<template>
  <div>
    <h2>Order list</h2>
    <el-table :data="orders" border stripe>
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
          <el-button @click="remove(scope.row)" type="text" size="small"
            >删除订单</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getOrders } from "../../api/order";
import { deleteResource } from "../../api/crud";

export default {
  name: "UserOrder",
  data() {
    return {
      orders: [],
      fields: {
        _id: { name: "ID", width: "220px" },
        totalCount: { name: "总数", width: "60px" },
        totalPrice: { name: "总价(单位：元)", width: "120px" },
        "address.name": { name: "收件人", width: "80px" },
        "address.addr": { name: "地址", width: "150px" },
        createdAt: { name: "创建时间", width: "100px" },
        status: { name: "订单状态", width: "100px" },
      },
    };
  },
  methods: {
    async fetchOrders() {
      const res = await getOrders();
      this.orders = res.data;
    },
    async remove(row) {
      await deleteResource("orders", row._id);
      this.$message({
        type: "success",
        message: "删除成功",
      });
      this.fetchOrders();
    },
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<style></style>
