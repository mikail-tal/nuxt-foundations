<script setup lang="ts">
const { data: products } = await useFetch("/api/products");
const { currency } = useCurrency("en-US", "USD");
const randomNumber = useState("randomNumber");
</script>

<template>
  <NuxtLayout name="catalog">
    <div>
      <div>Your random number is: {{ randomNumber }}</div>
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
