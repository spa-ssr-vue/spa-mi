<template>
  <div>
    <site-header></site-header>
    <router-view :key="$route.path"></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "./../../components/SiteHeader";
import SiteFooter from "./../../components/SiteFooter";

export default {
  name: "Home",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style lang="scss"></style>
