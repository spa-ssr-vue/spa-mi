<template>
  <div>
    <site-header></site-header>
    <h2>product</h2>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "./../../components/SiteHeader";
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Product",
  components: {
    SiteHeader,
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
