<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const input = ref('')

const {data, error, refresh} = await useFetch<GetCategoriesResponse>(API_URL + "/categories",
    {
      method: "POST",
      body: input,
      immediate: false,
      watch: false
    })
console.log(data.value)
console.log(error.value)

async function sendData() {
  refresh()
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