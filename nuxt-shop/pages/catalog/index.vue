<script setup lang="ts">

import type {GetCategoriesResponse} from "~/interfaces/category.interface";
import type {GetProductsResponse} from "~/interfaces/product.interface";

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const select = ref('')

const {data} = await useFetch<GetCategoriesResponse>(API_URL + "/categories")
const {data: productsData} = await useFetch<GetProductsResponse>(API_URL + "/products", {
  query: {
    limit: 20,
    offset: 0,
  }
})

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
      <div class="catalog__grid">
        <CatalogCard v-for="product in productsData?.products " :key="product.id" v-bind="product"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
.catalog {
  display: flex;
  gap: 36px;

  &__filter {
    width: 260px;
  }
}

.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px 12px;
}

</style>