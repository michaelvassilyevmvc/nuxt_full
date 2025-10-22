<template>
  <button :class="color">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const {color = 'primary'} = defineProps<{
  color?: 'primary' | 'ghost'
}>()
</script>

<style scoped>
.primary {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  cursor: pointer;
  background: var(--color-black);
  color: var(--color-white-light);
  padding: 16px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
}

.primary:hover {
  background: var(--color-black-hover);
}

.ghost {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  cursor: pointer;
  padding: 16px;
  color: var(--color-black);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
}

.ghost:hover {
  background: var(--color-black-hover);
  color: var(--color-white-light);
}
</style>