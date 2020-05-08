<template>
  <div class="order-pay">
    <site-mini-header title="支付订单"></site-mini-header>
    <div class="container">
      <div>订单提交成功！去付款咯～</div>
      <div>
        <h3>订单详情</h3>
        <div>订单ID：{{ order._id }}</div>
        <div>订单数量：{{ order.totalCount }}</div>
        <div>订单金额：{{ order.totalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMiniHeader from "./../../components/SiteMiniHeader";
import { getOrder } from "./../../api/order";

export default {
  name: "OrderPay",
  props: {
    id: { type: String },
  },
  components: {
    SiteMiniHeader,
  },
  data() {
    return {
      order: {},
    };
  },
  methods: {
    async fetchOrder() {
      const res = await getOrder(this.id);
      this.order = res.data;
    },
  },
  created() {
    this.fetchOrder();
  },
};
</script>

<style></style>
