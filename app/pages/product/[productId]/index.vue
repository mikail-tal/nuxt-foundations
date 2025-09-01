<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    Page: product Page with ID: {{ route.params.productId }}
  </div>
</template>

<style scoped></style>