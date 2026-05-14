import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {

   const _count = ref(0);

   const count = computed(() => _count.value);

   const increment = () => {
      _count.value++;
   }

   const decrement = () => {
      _count.value--;
   }
   
   return {
      count,
      increment,
      decrement
   }

});