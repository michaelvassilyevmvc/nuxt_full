<script setup lang="ts">
function openAbout() {
  // navigateTo("/about.vue");
  setPageLayout("auth")
}
</script>
<template>
  <div>Index
    <IconTwitter />
    <NuxtLink to="/about">About</NuxtLink>
    <button @click="openAbout">Перейти</button>
    <InputField variant="black" placeholder="Введите ваш email для подписки" />
  </div>
</template>