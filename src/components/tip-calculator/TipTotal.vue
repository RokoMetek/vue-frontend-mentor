<template>
  <div class="flex justify-between">
    <div class="text-sm flex flex-col gap-1">
      <span class="text-white font-semibold">{{ label }}</span>
      <span class="font-bold text-xs text-label">{{ sublabel }}</span>
    </div>
    <p class="text-4xl font-extrabold total-amount flex items-center">
      <img :src="icon" alt="dollar" class="w-4 h-6.5 me-2">
      {{ value }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    sublabel: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>

.total-amount {
  color: hsl(172, 67%, 45%);
}

.text-label {
  color: hsl(184, 14%, 56%);
}
</style>