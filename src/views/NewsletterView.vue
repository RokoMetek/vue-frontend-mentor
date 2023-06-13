<script lang="ts" setup>
import NewsletterConfirmation from '../components/newsletter/NewsletterConfirmation.vue';
import NewsletterCard from '../components/newsletter/NewsletterCard.vue';

</script>


<template>
    <main class="container-2xl calculator-container flex flex-col justify-center mx-auto text-black bg-gray-800 p-8">
        <div class="flex flex-col justify-center gap-2">
            <NewsletterCard></NewsletterCard>
            <NewsletterConfirmation></NewsletterConfirmation>
        </div>
    </main>
</template>


<style scoped>
.bg-dark-slate-grey {
    background-color: hsl(243, 29%, 20%);
}
</style>