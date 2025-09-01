<script setup lang="ts">
const products = await $fetch("/api/products"); // faire attention pour l'usage , appel deux fois (cote client & serveur), c'est bien de l'utiliser sur un event click (client side)
const { currency } = useCurrency("en-US", "USD");
</script>

<template>
  <NuxtLayout name="catalog">
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ currency(product.price) }}
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

li:hover {
  background-color: #f5f5f5;
}
</style>
