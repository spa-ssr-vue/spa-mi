<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import { storage } from "@/utils";

export default {
  name: "App",
  created() {
    if (storage.getItem("auth", "token")) {
      this.$store.dispatch("auth/getUser");
    }
  },
};
</script>
