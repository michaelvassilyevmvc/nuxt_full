<template>
  <input  :class="[$style[variant], $style.input]" v-model="data"/>
</template>

<script setup lang="ts">
const data = defineModel<string>();
const {variant} = defineProps<{
  variant: "gray" | "black"
}>();
</script>

<style module>
.input {
  padding: 12px;
  background: none;
  border: none;
  color: var(--color-black);
}

.input::placeholder {
  color: var(--color-dark-gray);
}

.gray {
  border-bottom: 1px solid var(--color-gray);
}

.black {
  border-bottom: 1px solid var(--color-black);
}
</style>