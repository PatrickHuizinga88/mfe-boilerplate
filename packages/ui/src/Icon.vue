<template>
  <component :is="solid ? solidIcons[props.name + 'Icon'] : outlineIcons[props.name + 'Icon']"/>
</template>

<script setup lang="ts">
import * as solidIcons from '@heroicons/vue/24/solid'
import * as outlineIcons from '@heroicons/vue/24/outline'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  solid: {
    type: Boolean,
    default: false
  }
})
</script>