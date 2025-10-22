<template>
  <button class="button" :class="color">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const {color = 'primary'} = defineProps<{
  color?: 'primary' | 'ghost'
}>()
</script>

<style scoped>
.button {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  padding: 16px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.primary {
  background: var(--color-black);
  color: var(--color-white-light);
}

.primary:hover {
  background: var(--color-black-hover);
}

.ghost {
  color: var(--color-black);
  background: var(--color-white-light);
}

.ghost:hover {
  background: var(--color-black-hover);
  color: var(--color-white-light);
}
</style>