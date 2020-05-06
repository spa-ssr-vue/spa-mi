<template>
  <div>
    <site-header></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "./../../components/SiteHeader";
import SiteFooter from "./../../components/SiteFooter";
import { mapState } from "vuex";
import { storage } from "./../../utils";

export default {
  name: "Home",
  components: {
    SiteHeader,
    SiteFooter,
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    getInitData() {
      if (storage.getItem("auth", "token") && !this.user.username) {
        this.$store.dispatch("auth/getUser");
        this.$store.dispatch("cart/getCart");
      }
    },
  },
  created() {
    this.getInitData();
  },
};
</script>

<style lang="scss"></style>
