<script lang="ts" setup>
import NewsletterCard from '../components/newsletter/NewsletterCard.vue';

</script>


<template>
    <main class="container-2xl calculator-container flex flex-col justify-center mx-auto h-screen text-black bg-dark-slate-grey">
        <div class="flex justify-center">
            <NewsletterCard></NewsletterCard>
            <!-- <div class="flex flex-col gap-4">
                <div>Newsletter View</div>
            </div> -->
        </div>
    </main>
</template>


<style scoped>
.bg-dark-slate-grey {
    background-color: hsl(243, 29%, 20%);
}
</style>