<template>
  <div class="text-center">
    <h2 class="my-10">reset password</h2>
    <p class="my-10">
      暂不支持重置密码,<span class="text-primary fs-24">{{ count }}s</span
      >后跳转到首页
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthReset",
  data() {
    return {
      count: 5,
    };
  },
  created() {
    setInterval(() => {
      if (this.count > 0) {
        this.count--;
      }
    }, 1000),
      setTimeout(() => {
        this.$router.push("/");
      }, 5000);
  },
};
</script>

<style></style>
