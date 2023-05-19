<script setup lang="ts"></script>


<template>
  <div
    class="expense-card-header max-w-2xl min-w-min bg-white rounded-lg shadow p-8 mx-6 soft-red">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-2 text-white">
        <h1 class="text-md">My Balance</h1>
        <span class="text-3xl font-extrabold">$921.48</span>
      </div>
      <div>
        <img src="/assets/images/logo.svg" alt="logo">
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: 'ExpensesCardHeader'
})
</script>

<style scoped>
.expense-card-header {
  background-color: hsl(10, 79%, 65%)
}
</style>
