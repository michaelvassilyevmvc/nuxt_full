<template>
  <div>
    <h1>{{ error.statusCode}} ошибка</h1>
    <p>{{ error.statusMessage}}</p>
    <ActionButton color="ghost">На главную</ActionButton>
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