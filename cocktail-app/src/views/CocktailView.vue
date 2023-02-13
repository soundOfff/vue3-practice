<template>
  <div class="about">
    <h1>This should be an cocktail page</h1>
    <h2>{{ counter.count }}</h2>
    <button @click="counter.increment()" :disabled="!counter.remaining">
      +
    </button>
    <h2>{{ counter.remaining }}</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { useCounterStore } from "@/stores/counterStore.js";
let counter = useCounterStore();
</script>
