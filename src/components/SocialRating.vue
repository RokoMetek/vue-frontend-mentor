
<script setup lang="ts">

const props = defineProps({
	ratingText: {
		type: String,
		default: "Rated 5 Stairs in Reviews"
	}
})
</script>


<template>
  <div
    class="card-top-border flex flex-row max-w-md p-4 bg-white shadow gap-4 text-gray-500 rounded-md w-[32rem] items-center rating-card">
    <div class="flex flex-row gap-2 mx-4">
      <img v-for="index in 5" :key="index" src="/assets/images/icon-star.svg" alt="user" class="h-4 w-4">
    </div>
    <span class="font-black rating-text">{{ ratingText }}</span>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SocialRating',
})
</script>


<style scoped>
.rating-card {
  /* background-color: hsl(303, 10%, 53%); */

  background-color: hsl(300, 24%, 96%);
}



.rating-text {
  /* color: hsl(303, 10%, 53%); */
  color: hsl(300, 43%, 22%);
}
</style>