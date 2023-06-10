<!-- <script setup lang="ts">
import BlogrLandingPage from '../components/blogr-page/BlogrLandingPage.vue'
</script> -->

<template>
    <main class="flex flex-col justify-center mx-auto bg-gray-200 text-black">
        <div class="expenses flex justify-center">
            <div class="flex flex-col gap-4 w-full">
                <BlogrHeaderPage></BlogrHeaderPage>
                <BlogrLandingPage></BlogrLandingPage>
                <BlogrMobilePage></BlogrMobilePage>
                <BlogrLaptopPage></BlogrLaptopPage>
                <BlogrFooterPage></BlogrFooterPage>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import BlogrLandingPage from '../components/blogr-page/BlogrLandingPage.vue'

import BlogrLaptopPage from "../components/blogr-page/BlogrLaptopPage.vue";
import BlogrMobilePage from "../components/blogr-page/BlogrMobilePage.vue";
import BlogrHeaderPage from "../components/blogr-page/BlogrHeaderPage.vue";
import BlogrFooterPage from "../components/blogr-page/BlogrFooterPage.vue";

defineComponent({
    name: 'BlogrLandingView',
    components: {
        // BlogrLandingPage,
        // BlogrLaptopPageVue,
        // BlogrMobilePageVue
    }
});


// export default defineComponent({
//     name: 'BlogrLandingView',
// });

</script>
