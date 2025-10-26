<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const input = ref('')

async function sendData() {
  const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories",
      {
        method: "POST",
        body:input,
      })
  console.log(data)
}

// try {
//   const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories")
//   console.log(data)
// } catch (error) {
//   console.error('err',error)
// }

</script>
<template>
  <div>
    Catalog
    <InputField variant="black" v-model="input"/>
    <button @click="sendData">Отправить</button>
  </div>
</template>