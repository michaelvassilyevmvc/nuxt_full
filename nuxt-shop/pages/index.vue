<script setup lang="ts">
function openAbout() {
  navigateTo("/about.vue");
}
</script>
<template>
  <div>Index
    <button @click="openAbout">Перейти</button>
  </div>
</template>