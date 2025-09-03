<script setup lang="ts">
const randomNumber = useState("randomNumber", () =>
  Math.floor(Math.random() * 100)
);
</script>

<template>
  <div>
    Welcome to the home page
    <div>Your random number is: {{ randomNumber }}</div>
  </div>
</template>

<style scoped></style>
