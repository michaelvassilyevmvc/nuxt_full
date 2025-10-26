<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const select = ref('')

const {data} = await useFetch<GetCategoriesResponse>(API_URL + "/categories")

const selectDefault = {
  value: '',
  label: 'Категории'
}
const categoriesSelect = computed(() => {
  return data.value ? data.value.categories.map(category => ({
    value: category.id.toString(),
    label: category.name
  })).concat(selectDefault) : [selectDefault];
})


</script>
<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField
            v-model="select"
            :options="categoriesSelect"/>

      </div>
      <div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.catalog {
  display: flex;

  &__filter {
    width: 260px;
    gap: 36px;
  }
}

</style>