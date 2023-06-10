<!-- <script setup lang="ts">
import BlogrLandingPage from '../components/blogr-page/BlogrLandingPage.vue'
</script> -->

<template>
    <main class="container flex flex-col justify-center mx-auto bg-gray-200 text-black">
        <div class="expenses flex justify-center">
            <div class="flex flex-col gap-4">
                <BlogrLandingPage></BlogrLandingPage>
                <BlogrMobilePageVue></BlogrMobilePageVue>
                <BlogrLaptopPageVue></BlogrLaptopPageVue>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import BlogrLandingPage from '../components/blogr-page/BlogrLandingPage.vue'

import BlogrLaptopPageVue from "../components/blogr-page/BlogrLaptopPage.vue";
import BlogrMobilePageVue from "../components/blogr-page/BlogrMobilePage.vue"

defineComponent({
    name: 'BlogrLandingView',
    components: {
        // BlogrLandingPage,
        // BlogrLaptopPageVue,
        BlogrMobilePageVue
    }
});


// export default defineComponent({
//     name: 'BlogrLandingView',
// });

</script>
