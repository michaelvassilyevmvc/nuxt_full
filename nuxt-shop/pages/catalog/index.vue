<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const input = ref('')

const {data, error, refresh} = await useAsyncData<GetCategoriesResponse>('categories', () => {
  return $fetch(API_URL+"/categories")
})
console.log('Data: ',data.value?.categories)
console.log(error.value)

async function sendData() {
  refresh()
}
//
// $fetch - не SSR friendly, используется внутри функции, не на верхнем уровне
// useFetch - используем только на верхнем, он SSR friendly
// useAsyncData - SSR friendly, нужен если сложный вариант получения данных


</script>
<template>
  <div>
    Catalog
    <SelectField :categoryList="data?.categories" />
<!--    <InputField variant="black" v-model="input"/>-->
<!--    <button @click="sendData">Отправить</button>-->
  </div>
</template>