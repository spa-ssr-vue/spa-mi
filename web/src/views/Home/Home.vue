<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./../../components/NavHeader";
import NavFooter from "./../../components/NavFooter";
import { storage } from "./../../utils";

export default {
  name: "Home",
  components: {
    NavHeader,
    NavFooter,
  },
  created() {
    const storageName = "data";
    storage.setStorage(storageName);
  },
};
</script>

<style lang="scss"></style>
