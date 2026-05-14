<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

console.log(counterStore.count);

</script>

<template>

   <h1>My Counter</h1>

   <button @click="counterStore.count++">
      Increment
   </button>

   <span>
      {{ counterStore.count }}
   </span>

   <button @click="counterStore.count--">
      Decrement
   </button>

</template>