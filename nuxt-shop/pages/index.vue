<script setup lang="ts">
import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
try {
  const API_URL = config.public.apiurl
  const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories")
  console.log(data)
} catch (error) {
  console.error('err',error)
}
</script>
<template>
  <div>Index
    <!--    <Icon name="icons:li"/>-->
    <!--    <NuxtLink to="/about">About</NuxtLink>-->
    <!--    <InputField variant="black" placeholder="Введите ваш email для подписки"/>-->
  </div>
</template>