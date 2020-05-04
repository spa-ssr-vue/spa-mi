<template>
  <div>
    <site-mini-header></site-mini-header>
    <div>cart list</div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteMiniHeader from "./../../components/SiteMiniHeader";
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Cart",
  components: {
    SiteMiniHeader,
    SiteFooter,
  },
};
</script>

<style></style>
