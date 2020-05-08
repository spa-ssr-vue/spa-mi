<template>
  <div>product{{ id }}</div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: { type: String },
  },
};
</script>

<style></style>
