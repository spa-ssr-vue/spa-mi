<template>
  <div class="text-center">
    <div>
      query key word:
      <h2>{{ kw }}</h2>
    </div>
    <div>根据此关键字发送请求查询所需信息,然后循环列出</div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      kw: this.$route.query.kw,
    };
  },
};
</script>

<style></style>
