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
import { mapState } from "vuex";
import { storage } from "./../../utils";
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
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    async addCart() {
      await addCartItem({
        productId: this.id,
        product: this.product,
      });

      this.$store.dispatch("cart/getCart");
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
