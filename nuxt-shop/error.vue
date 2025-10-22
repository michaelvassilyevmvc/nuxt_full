<template>
  <div class="container">
    <h1>{{ error.statusCode}} ошибка</h1>
<!--    <p>{{ error.statusMessage}}</p>-->
    <p class="error-text">
      Страница не найдена, попробуйте перейти на главную страницу
    </p>
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .error-text {
    color: var(--color-dark-gray);
    font-size: 20px;
    margin-bottom: 50px;
    width:400px;
    word-wrap: break-word;
    text-align: center;
  }
</style>