<template>
  <input
      :id="field.id"
      :value="props.modelValue"
      @input="emit( 'update:modelValue', $event.target.value)"
      :required="field.required"
      :class="[invalid ? 'ring-red-500' : 'ring-gray-300 dark:ring-zinc-700', 'block w-full rounded-md dark:bg-zinc-800 border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-500 sm:leading-6 sm:text-sm']"
      v-bind="$attrs"
  >
</template>

<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps({
  invalid: Boolean,
  modelValue: [String, Number]
})

const field = inject("field", props)

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>