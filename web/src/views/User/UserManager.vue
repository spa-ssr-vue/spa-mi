<template>
  <div>
    <h2>User manager</h2>
    <div>{{ user }}</div>
  </div>
</template>

<script>
import { getUserInfo } from "./../../api/auth";

export default {
  name: "UserManager",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUser() {
      const res = await getUserInfo();
      this.user = res.data;
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style></style>
