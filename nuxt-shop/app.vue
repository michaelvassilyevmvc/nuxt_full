<template>
  <div>
    {{ hello }}
    <SharedTestComp />
<!--    <NuxtRouteAnnouncer />-->
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">

// const config = useAppConfig();
const runtime = useRuntimeConfig();
const hello = ref(runtime.public.apiurl);
</script>