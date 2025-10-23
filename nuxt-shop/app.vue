<template>
  <div>
    <NuxtLayout :name="name">
      Привет!
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import "~/assets/styles/main.css"
import type {LayoutKey} from "#build/types/layouts";

const name = ref<LayoutKey>('auth')
</script>
<style>
</style>
