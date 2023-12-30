<template>
    <div>
        <h2>{{ props.title }}</h2>
        <p><slot /></p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>