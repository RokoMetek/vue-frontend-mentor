

<script setup lang="ts">

import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Team Builder',
  },
  contentText: {
    type: String,
    default: "Scans our talent network to create the optimal team for you project",
  },
  borderColor: {
    type: String,
    default: "red"
  }
});








</script >

<template>
    <div class="card-top-border flex flex-col max-w-sm p-6 border-t-8 border-amber-500 bg-white shadow gap-4 text-gray-500 rounded-xl overflow-hidden shadow-card"
        :style="{'--card-top-border': borderColor }"
    >
        <h2 class="mb-2 text-3xl font-bold tracking-tight text-black">{{  title }}</h2>
        <p class="mb-6 font-normal content-text">{{ contentText }}</p>
        <div class="flex justify-end">
            <slot></slot>
            <!-- <img src="/assets/images/icon-team-builder.svg" class="h-16 w-16"> -->
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FeatureCard',
})
</script>

<style scoped>
.shadow-card {
    box-shadow: hsl(234, 12%, 34%) 0px 20px 25px -5px, hsl(229, 6%, 66%) 0px 10px 10px -5px;
}

.card-top-border {
    border-top: 0.4rem solid var(--card-top-border);
}

</style>