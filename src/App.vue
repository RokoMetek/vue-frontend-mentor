<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <header class="sticky top-0">
    <AppNavbar />
  </header>
  <RouterView />
</template>

<style scoped>
/* Your component styles here */
</style>
