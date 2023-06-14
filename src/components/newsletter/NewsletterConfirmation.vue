<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    setup(_, { emit }) {
        const dismissMessage = () => {
            emit('dismissed', 'dismiss')
        }
        return {
            dismissMessage
        }
    },
})
</script>


<template>
    <div class="bg-white mx-auto rounded-3xl p-2 px-4 max-w-[375px]">
        <div class="flex flex-col items-center">
            <div class="flex flex-row w-full justify-center">
                <div class="flex flex-col p-8 gap-4 text-black text-base justify-center">
                    <div>
                        <img class="bg-auto h-10" src="/assets/images/newsletter-sign-up/icon-success.svg" alt="">
                    </div>
                    <h1 class="text-5xl font-extrabold">Thanks for subscribing!</h1>
                    <p class="mb-4">
                        A confirmation emails has been sent to
                        <span class=" font-extrabold">user@lorecompany.com</span>.
                        Please open it and click the button inside to confirm your subscription
                    </p>
                    <button type="button"
                        @click="dismissMessage"
                        class="block bg-slateGrey hover:bg-tomato hover:shadow-md hover:shadow-tomato enabled:hover:bg-gradient-to-r from-rose-600 to-tomato text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">
                        Dismiss message
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>