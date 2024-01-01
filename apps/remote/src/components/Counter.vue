<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>
  <button class="border-2 border-white rounded-md font-medium py-2 px-3 hover:border-primary-300 duration-200" @click="counterStore.increment">
    Remote counter: 
    <span class="inline-block w-6">{{ count }}</span>
  </button>
</template>