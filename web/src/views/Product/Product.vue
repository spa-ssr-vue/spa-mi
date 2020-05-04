<template>
  <div>
    <site-header></site-header>
    <product-infor-header></product-infor-header>
    <h2>product</h2>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "./../../components/SiteHeader";
import ProductInforHeader from "./../../components/ProductInforHeader";
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Product",
  components: {
    SiteHeader,
    ProductInforHeader,
    SiteFooter,
  },
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style></style>
