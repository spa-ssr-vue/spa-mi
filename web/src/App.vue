<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { storage } from "./utils";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    getUserData() {
      if (storage.getItem("auth", "token") && !this.user.username) {
        this.$store.dispatch("auth/getUser");
        this.$store.dispatch("cart/getCart");
      }
    },
  },
  created() {
    this.getUserData();
  },
};
</script>
