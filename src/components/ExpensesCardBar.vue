<script setup lang="ts">


const props = defineProps({
  day: {
    type: String,
    default: 'mon'
  },
  barPercentage: {
    type: String,
    default: '50%'
  },
  barColor: {
    type: String,
    default: 'hsl(10, 79%, 65%)'
  },
  price: {
    type: String,
    default: '$52.36'
  }
})

const showPrice = ref(false);

</script>

<template>
  <div class="flex flex-col items-center justify-end h-48 relative">
    <div class="bg-green-500 md:w-1/2 w-1/3 rounded-md relative chart-bar bg-opacity-50" @mouseover="showPrice = true"
      @mouseleave="showPrice = false" :data-content="price"
      :style="{ height: barPercentage, '--bar-chart-color': barColor, '--price-content': price, '--bar-chart-color-hover': barChartColorWithOpacity }">
      <div class="price-label text-white flex justify-center absolute px-2 py-1 text-md " v-show="showPrice">{{ price }}
      </div>
    </div>
  </div>
  <div class="text-center">{{ day }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExpensesCardBar',
  computed: {
    barChartColorWithOpacity() {
      const opacity = 0.5; // Set the desired opacity value here
      const match = this.barColor.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
      if (!match) return this.barColor; // Return the original color if it doesn't match the HSL format
      const [, hue, saturation, lightness] = match;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    }
  }
})
</script>

<style scoped>
/* .chart-info>div:first-child p {
  background-color: hsl(25, 47%, 15%);
} */

/* .chart-info>div:first-of-type {
  background-color: var(--bar-chart-color);
} */

.chart-bar {
  position: relative;
  background-color: var(--bar-chart-color);
}

.chart-bar:hover {
  position: relative;
  background-color: var(--bar-chart-color-hover);
}

.price-label {
  /* position: absolute; */
  top: -35px;
  transform: translate(-50%);
  left: 50%;
  background-color: hsl(25, 47%, 15%);
  border-radius: 0.35rem;
}
</style>
