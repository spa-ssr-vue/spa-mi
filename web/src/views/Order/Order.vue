<template>
  <div>
    <site-mini-header></site-mini-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteMiniHeader from "./../../components/SiteMiniHeader";
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Order",
  components: {
    SiteMiniHeader,
    SiteFooter,
  },
};
</script>

<style></style>
