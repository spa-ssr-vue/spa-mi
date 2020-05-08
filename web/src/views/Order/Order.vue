<template>
  <div>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Order",
  components: {
    SiteFooter,
  },
};
</script>

<style></style>
