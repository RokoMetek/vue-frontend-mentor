
<script setup lang="ts">
import PreviewCard from '../components/PreviewCard.vue';

</script>

<template>
  <main class="container mx-auto">
    <div class="main flex flex-row flex-wrap justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <PreviewCard :title="'SEDANS'" :bg-color="'hsl(31, 77%, 52%)'" class="">
          <img src="/assets/images/icon-sedans.svg" class="h-8 w-12" alt="luxury">
        </PreviewCard>
        <PreviewCard :title="'SUVS'" :bg-color="'hsl(184, 100%, 22%)'" class="">
          <img src="/assets/images/icon-suvs.svg" class="h-8 w-12" alt="luxury">
        </PreviewCard>
        <PreviewCard :title="'LUXURY'" :bg-color="'hsl(179, 100%, 13%)'" class="">
          <img src="/assets/images/icon-luxury.svg" class="h-8 w-12" alt="luxury">
        </PreviewCard>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  width: 300px;
  /* Set the desired width */
  height: 100%;
  /* Set the desired height */
}
</style>