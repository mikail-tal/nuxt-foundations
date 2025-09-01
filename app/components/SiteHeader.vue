<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
  <div class="header">
    <div> <NuxtLink to="/">Home</NuxtLink> </div>
    <div> <NuxtLink to="/product/catalog">Catalog</NuxtLink> </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f5f5f5;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.header div {
  display: inline;
  margin-right: 16px;
}
a,
a:visited {
  color: #407db2;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #ae5454;
}

</style>
