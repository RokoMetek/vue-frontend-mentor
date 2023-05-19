<script setup lang="ts">
import SocialCard from '../components/SocialCard.vue'
import SocialRating from '../components/SocialRating.vue'
</script>

<template>
  <main class="container mx-auto h-screen">
    <img
      src="/assets/images/bg-pattern-top-desktop.svg"
      alt="bgPattern"
      class="fixed top-0 left-0 hidden md:block"
    />
    <img
      src="/assets/images/bg-pattern-bottom-desktop.svg"
      alt="bgPattern"
      class="fixed bottom-0 right-0 hidden md:block"
    />
    <img
      src="/assets/images/bg-pattern-top-mobile.svg"
      alt="bgPattern"
      class="fixed top-0 left-0 md:hidden"
    />
    <img
      src="/assets/images/bg-pattern-bottom-mobile.svg"
      alt="bgPattern"
      class="fixed bottom-0 right-0 md:hidden"
    />
    <div class="main md:flex md:flex-row grid grid-cols-1 gap-12 flex-wrap justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div class="text-black max-w-md md:justify-self-start justify-self-center">
          <h6 class="text-6xl font-black mb-8">10,000+ of our users love our products.</h6>
          <p class="text-md">
            We only provide great products combined with excellent customer service. See what our
            satisfied customer are saying about our services.
          </p>
        </div>
        <div
          class="flex flex-col gap-6 md:justify-self-end md:justify-end justify-center justify-self-center"
        >
          <SocialRating class="md:ms-8" :rating-text="'Rated 5 Stairs in Reviews'"></SocialRating>
          <SocialRating
            class="md:ms-16"
            :rating-text="'Rated 5 Stairs in Report Guru'"
          ></SocialRating>
          <SocialRating class="md:ms-24" :rating-text="'Rated 5 Stairs in BestTech'"></SocialRating>
        </div>
      </div>
      <div
        class="flex flex-col max-w-md md:max-w-full items-center gap-4 md:flex-row justify-self-center"
      >
        <SocialCard class="mx-2 md:mt-8" :user-name="'Colton Smith'">
          <img src="/assets/images/image-colton.jpg" alt="user" class="h-14 w-14 rounded-full" />
        </SocialCard>
        <SocialCard
          class="mx-2 md:mt-16"
          :user-name="'Irene Roberts'"
          :content-text="'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery'"
        >
          <img src="/assets/images/image-anne.jpg" alt="user" class="h-14 w-14 rounded-full" />
        </SocialCard>
        <SocialCard
          class="mx-2 md:mt-24"
          :user-name="'Anne Wallace'"
          :content-text="'Put and order with this company and can only praise them for the very high standard. Will definitely use them again and recommended them to everyone!'"
        >
          <img src="/assets/images/image-irene.jpg" alt="user" class="h-14 w-14 rounded-full" />
        </SocialCard>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
