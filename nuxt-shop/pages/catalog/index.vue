<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const input = ref('')
const select = ref('')

await useAsyncData<GetCategoriesResponse>(
    'categories',
    () => {
      return $fetch(API_URL + "/categories")
    },
    {
      watch: [input]
    }
)

//
// $fetch - не SSR friendly, используется внутри функции, не на верхнем уровне
// useFetch - используем только на верхнем, он SSR friendly
// useAsyncData - SSR friendly, нужен если сложный вариант получения данных

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
<!--    <SelectField-->
<!--        v-model="select"-->
<!--        :options="[-->
<!--            {-->
<!--              value:'',label:'Категории'-->
<!--            },-->
<!--            {-->
<!--              value:'1',label: 'Первый'-->
<!--            },-->
<!--            {-->
<!--              value: '2', label:'Второй'-->
<!--            }-->
<!--          ]"/>-->
    <ProductCard />
  </div>
</template>