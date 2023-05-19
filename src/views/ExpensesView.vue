<script setup lang="ts">
import ExpensesCard from '../components/ExpensesCard.vue'
</script>

<template>
  <main class="container flex flex-col justify-center mx-auto h-screen bg-gray-200 text-black">
    <div class="expenses flex justify-center">
      <ExpensesCard class="expenses-card soft-red"></ExpensesCard>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: hsl(27, 66%, 92%);
}

/* .soft-red {
  background-color: hsl(10, 79%, 65%);
} */

.expenses-card {
  background-color: hsl(33, 100%, 98%);
  /* background-color: hsl(186, 34%, 60%); */
}

.dark-brown {
  background-color: hsl(25, 47%, 15%);
}

.medium-brown {
  background-color: hsl(28, 10%, 53%);
}
</style>
