<script setup lang="ts">

import AdviceCard from '../components/AdviceCard.vue'

</script>


<template>
    <main class="container advice-container flex flex-col justify-center mx-auto h-screen bg-gray-200 text-black">
        <div class="flex justify-center">
            <div class="flex flex-col gap-4">
               <AdviceCard></AdviceCard> 
            </div>
        </div>
    </main>
</template>


<style scoped>
.advice-container {
    /* background-color: hsl(193, 38%, 86%); */
    /* background-color: hsl(150, 100%, 66%); */
    /* background-color: hsl(217, 19%, 38%); */
    /* background-color: hsl(217, 19%, 24%); */
    background-color: hsl(218, 23%, 16%);

}
</style>