<script lang="ts">
import { defineComponent } from 'vue'
// import CrowfundingCard from '../components/crowdfunding/CrowfundingCard.vue'
import CrowdfundingAbout from '../components/crowdfunding/CrowdfundingAbout.vue';
import CrowdfundingInfo from '../components/crowdfunding/CrowdfundingInfo.vue';
import CrowdfundingTitle from '../components/crowdfunding/CrowdfundingTitle.vue'

export default defineComponent({
    setup() {

    },
    components: {
        CrowdfundingTitle,
        CrowdfundingInfo,
        CrowdfundingAbout,
    }
})
</script>

<template>
    <div class="relative flex flex-col justify-center bg-gray-100">
        <div
            class="w-full h-96 bg-red-500 hero-bg bg-no-repeat bg-center bg-[url('assets/images/crowdfunding/image-hero-desktop.jpg')]">
        </div>
        <main
            class="justify-center mx-auto text-black -top-24 relative">
            <div class="flex flex-col justify-center gap-4">
                <CrowdfundingTitle></CrowdfundingTitle>
                <CrowdfundingInfo></CrowdfundingInfo>
                <CrowdfundingAbout></CrowdfundingAbout>
            </div>
        </main>
    </div>
</template>

<style scoped>
.hero-bg {
    /* background-image: url('assets/images/crowdfunding/image-hero-desktop.jpg'); */
    /* background-repeat: no-repeat; */
    background-size: 100% 100%;
}
</style>