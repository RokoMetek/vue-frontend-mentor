<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
</script>

<template>
  <main class="container mx-auto text-black">
    <div class="grid grid-cols-1 gap-6 justify-items-center">
      <div class="grid grid-cols-1 flex-row flex-wrap justify-center text-3xl text-center max-w-xl">
        <div class="mb-4">
          <p class="text-gray-500">Reliable, efficient delivery</p>
          <p class="font-extrabold">Powered by Technology</p>
        </div>
        <p class="text-base text-gray-400">
          Out Artificial Intelligence powered tools use millions of project data points to ensure
          that your project is successful
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex justify-center md:justify-content-end items-center">
          <FeatureCard :title="'Supervisor'" :border-color="'hsl(180, 62%, 55%)'">
            <img src="/assets/images/icon-supervisor.svg" alt="team-builder" class="h-16 w-16" />
          </FeatureCard>
        </div>
        <div class="flex flex-col gap-6 justify-center items-center col-span-1">
          <FeatureCard :border-color="'hsl(0, 78%, 62%)'">
            <img src="/assets/images/icon-team-builder.svg" alt="team-builder" class="h-16 w-16" />
          </FeatureCard>
          <FeatureCard :title="'Karma'" :border-color="'hsl(34, 97%, 64%)'">
            <img src="/assets/images/icon-karma.svg" alt="team-builder" class="h-16 w-16" />
          </FeatureCard>
        </div>
        <div class="flex justify-center md:justify-content-start items-center">
          <FeatureCard :title="'Calculator'" :border-color="'hsl(212, 86%, 64%)'">
            <img src="/assets/images/icon-calculator.svg" alt="team-builder" class="h-16 w-16" />
          </FeatureCard>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  background-color: hsl(0, 0%, 98%) !important;
}
</style>
