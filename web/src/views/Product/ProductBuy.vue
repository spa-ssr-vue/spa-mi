<template>
  <div>
    <div>{{ id }}</div>
    <h2>product buy</h2>
    <el-button
      class="btn btn-primay"
      type="primary"
      @click.native.prevent="addCart"
      >加入购物车</el-button
    >
  </div>
</template>

<script>
import { storage } from "./../../utils";
import { mapState } from "vuex";
import { addCartItem, getCartItem, putCartItem } from "./../../api/cart";
import { getProduct } from "./../../api/product";

export default {
  name: "ProductBuy",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    async addCart() {
      if (!storage.getItem("auth", "token") && this.auth.user.username === "") {
        this.$message({
          type: "warning",
          message: "请先登录",
        });
        this.$router.push("/auth/login");
      }

      await addCartItem({
        productId: this.id,
        product: this.product,
      });

      const res = await getCartItem();
      this.$store.commit("cart/setCart", res.data);
    },

    async getProductDetail() {
      const res = await getProduct(this.id);
      this.product = res.data;
    },
  },

  created() {
    this.getProductDetail();
  },
};
</script>

<style></style>
