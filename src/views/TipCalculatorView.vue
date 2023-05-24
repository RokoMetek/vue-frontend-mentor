<script setup lang="ts">
import TipCalculatorCard from '../components/TipCalculatorCard.vue';

</script>

<template>
    <main class="container-2xl calculator-container flex flex-col justify-center mx-auto h-screen bg-gray-200 text-black">
        <div class="flex justify-center">
            <div class="flex flex-col gap-4">
            <TipCalculatorCard></TipCalculatorCard>
            </div>
        </div>
    </main>
</template>


<style scoped>
.calculator-container {
    background-color: hsl(185, 41%, 84%);
}
</style>  