<script setup lang="ts">

import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title',
  },
  buttonText: {
    type: String,
    default: 'Learn More',
  },
  contentText: {
    type: String,
    default: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
  },
  bgColor: {
    type: String,
    default: "hsl(31, 77%, 52%)",
  },
});


const isHovered = ref(false);
const hoverClass = ref(props.bgColor);

watch(isHovered, (value) => {
  console.log("Hovered changed ", value);
  hoverClass.value = (value) ? 'white' : props.bgColor
});


</script >

<template>
  <div class="flex flex-col max-w-sm p-6 bg-gray-800 shadow gap-4 text-white" :style="{ backgroundColor: bgColor }">
    <slot></slot>
    <a href="#">
      <h2 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h2>
    </a>
    <p class="mb-3 font-normal content-text">{{ contentText }}</p>
    <div class="mt-14">
      <button
        class="color-button text-pink-500 bg-white border border-white hover:bg-transparent hover:text-red active:bg-pink-600 font-bold uppercase px-8 py-2 rounded-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        :style="{ '--btn-text-color': hoverClass }" @mouseover="isHovered = true" @mouseout="isHovered = false"
        type="button">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PreviewCard',
})
</script>

<style scoped>
.content-text {
  color: hsla(0, 0%, 100%, 0.75);
}

.color-button {
  color: var(--btn-text-color);
}
</style>