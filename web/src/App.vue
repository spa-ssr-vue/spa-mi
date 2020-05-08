<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { storage } from "./utils";

export default {
  name: "App",
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    getUser() {
      if (storage.getItem("auth", "token") && !this.user.username) {
        this.$store.dispatch("auth/getUser");
      }
    },
  },
  created() {
    this.getUser();
  },
};
</script>
