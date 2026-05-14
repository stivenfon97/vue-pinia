<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

console.log(counterStore.count);

</script>

<template>

   <h1>My Counter</h1>

   <button @click="counterStore.increment()">
      Increment
   </button>

   <span>
      {{ counterStore.count }}
   </span>

   <button @click="counterStore.decrement()">
      Decrement
   </button>

</template>