<template>
  <div>重置密码界面</div>
</template>

<script>
export default {
  name: "AuthReset",
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$message({
      type: "error",
      message: "暂不支持重置密码,3s后跳转到首页",
    });
    const context = this;
    setTimeout(function() {
      context.$router.push("/");
    }, 3000);
  },
};
</script>

<style></style>
