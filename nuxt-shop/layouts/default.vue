<template>
  <div>
    <div>Шапка</div>
    <slot/>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>