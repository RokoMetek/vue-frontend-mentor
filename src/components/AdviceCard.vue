<template>
    <div class="max-w-md bg-white rounded-lg shadow p-8 mx-6 advice-card flex flex-col justify-center gap-8 relative pb-14">
        <h3 class="text-sm text-green-400 font-bold text-center tracking-widest">ADVICE #117</h3>
        <div class="text-white text-2xl text-center">
            <p class="font-extrabold">"It is easy to sit up and take notice, what's difficult is getting up and taking
                action."</p>
        </div>
        <img src="/assets/images/pattern-divider-desktop.svg" alt="divider">
        <!-- <div class="shadow-lg ring-blue-500 ring-opacity-100">
            sadsadsadsa
        </div> -->

        <div
            class="w-14 h-14 shadow-2xl hover:shadow-red-500 ring-blue-500 ring-opacity-100 advice-card-dice rounded-full flex items-center justify-center bg-green-300 self-center absolute bottom-0 transform translate-y-1/2">
            <img src="/assets/images/icon-dice.svg" alt="dice" class="w-6 h-6">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'AdviceCard'
})
</script>



<style scoped>
.advice-card {
    /* background-color: hsl(217, 19%, 38%); */

    /* background-color: hsl(193, 38%, 86%); */
    /* background-color: hsl(150, 100%, 66%); */
    /* background-color: hsl(217, 19%, 38%); */
    background-color: hsl(217, 19%, 24%);
    /* background-color: hsl(218, 23%, 16%); */
}

.advice-card-dice:hover {
    box-shadow: 0px 0px 16px 1px hsl(150, 100%, 66%);
    /* -webkit-box-shadow: -4px 4px 48px 10px hsl(150, 100%, 66%);
    -moz-box-shadow: -4px 4px 48px 10px hsl(150, 100%, 66%); */
}
</style>