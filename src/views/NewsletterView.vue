<script lang="ts" setup>
import NewsletterConfirmation from '../components/newsletter/NewsletterConfirmation.vue';
import NewsletterCard from '../components/newsletter/NewsletterCard.vue';
import { ref } from 'vue';

const showConfirmation = ref(false);


const handleSubmit = () => {
    showConfirmation.value = true;
}

const dismisConfiramtion = () => {
    showConfirmation.value = false;
}

</script>

<template>
    <main class="container-2xl calculator-container flex flex-col justify-center mx-auto min-h-screen text-black bg-gray-800 p-8">
        <div class="flex flex-col justify-center gap-2">
            <NewsletterCard v-if="!showConfirmation" @form-submitted="handleSubmit"></NewsletterCard>
            <NewsletterConfirmation v-if="showConfirmation" @dismissed="dismisConfiramtion"></NewsletterConfirmation>
        </div>
    </main>
</template>


<style scoped>
.bg-dark-slate-grey {
    background-color: hsl(243, 29%, 20%);
}
</style>