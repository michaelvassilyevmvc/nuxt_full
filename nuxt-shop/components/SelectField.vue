<template>
  <div class="search__panel">
    <InputField placeholder="Поиск..." variant="gray" v-model="searchText"/>
    <select name="category" id="category" class="search__select">
      <option value="">Категории</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <div class="search__volume">
      <input type="range" id="volume" name="volume" min="0" max="200">
      <label for="volume">Цена: $40 - $180</label>
    </div>
    <div class="search__discount">
      <label>
        Со скидками
      </label>
      <input type="checkbox" v-model="descontSelected" />
    </div>
  </div>
</template>

<script setup lang="ts">

 defineProps({
  categoryList: {
    type: Array,
    required: true,
  }
})

// const filterCategoryList = computed(() => {
//   return props.categoryList.filter((x) => x?.name === searchText.value || searchText.value === '')
// })

const searchText = ref('')
const descontSelected = ref(false)
</script>

<style scoped>
.search__panel {
  display: flex;
  flex-direction: column;
  align-content: start;
  width: 300px;
  gap: 20px;
}

.search__select {
  padding: 15px 12px;
  border: 1px solid var(--color-gray);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  border-radius: 4px;
}

.search__volume {
  display: flex;
  flex-direction: column;
  gap: 8px;

  & label {
    color: var(--color-dark-gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
}

.search__discount {
  display: flex;
  justify-content: space-between;

  & label {
    color: var(--color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
  }

  & input {
    color: var(--color-dark-gray);
    width: 20px;
    height: 20px;
  }
}
</style>