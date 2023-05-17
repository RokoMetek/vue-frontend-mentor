<script setup lang="ts">
const props = defineProps({
  userName: {
    type: String,
    default: 'Colton Smith'
  },
  verificationText: {
    type: String,
    default: 'Verified Buyer'
  },
  contentText: {
    type: String,
    default:
      '"We needed this same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
  }
})
</script>

<template>
  <div class="card-social card-top-border shadow rounded-md p-6">
    <div class="flex gap-8 mb-4">
      <slot></slot>
      <div class="text-white flex flex-col justify-center">
        <span class="font-extrabold">{{ userName }}</span>
        <span class="font-bold verification-color">{{ verificationText }}</span>
      </div>
    </div>
    <p class="text-white text-xl">{{ contentText }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SocialCard'
})
</script>

<style scoped>
.card-social {
  background-color: hsl(300, 43%, 22%);
}

.verification-color {
  color: hsl(333, 80%, 67%);
}
</style>
