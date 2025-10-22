<template>
  <div>
    <h1>{{ error.statusCode}}</h1>
    <p>{{ error.statusMessage}}</p>
    <ActionButton>На главную</ActionButton>
  </div>
</template>

<script setup lang="ts">
import type {NuxtError} from "#app";

const {error} = defineProps<{
  error: NuxtError
}>();
</script>

<style scoped>

</style>