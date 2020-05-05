<template>
  <div>
    <router-view></router-view>
    <auth-footer
      :type="$route.path === '/auth/register' ? 'register' : 'login'"
    ></auth-footer>
  </div>
</template>

<script>
import AuthFooter from "./../../components/AuthFooter";

export default {
  name: "Auth",
  components: {
    AuthFooter,
  },
};
</script>

<style></style>
