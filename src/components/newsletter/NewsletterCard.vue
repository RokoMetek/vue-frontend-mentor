
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(_, { emit }) {
        const email = ref('');
        const validateEmail = (email: string): boolean => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        const subscribe = () => {
            if (!validateEmail(email.value)) {
                return;
            }
            emit('form-submitted', email.value)
        };
        return {
            email,
            validateEmail,
            subscribe
        };
    }
})
</script>


<template>
    <div class="container-sm bg-white mx-auto px-4 rounded-3xl p-2">
        <div class="flex flex-col items-center">
            <div class="flex md:flex-row flex-col-reverse w-full justify-center">
                <div class="flex flex-col p-8 gap-4 text-black text-base justify-center">
                    <h1 class="text-5xl font-extrabold">Stay Updated</h1>
                    <p>Joint 60,000+ product mangers receiving monthly updates on:</p>
                    <div class="mb-10">
                        <ul class="max-w-md space-y-3 list-inside">
                            <li class="flex items-center">
                                <svg class="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                    viewBox="0 0 21 21">
                                    <g fill="none">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                        <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
                                    </g>
                                </svg>
                                Product discovery and building what matters
                            </li>
                            <li class="flex items-center">
                                <svg class="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                    viewBox="0 0 21 21">
                                    <g fill="none">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                        <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
                                    </g>
                                </svg>
                                Measuring to ensure updates are a success
                            </li>
                            <li class="flex items-center">
                                <svg class="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                    viewBox="0 0 21 21">
                                    <g fill="none">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                        <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
                                    </g>
                                </svg>
                                And much more!
                            </li>
                        </ul>
                    </div>
                    <form @submit.prevent="subscribe">
                        <div class="flex justify-between mb-2">
                            <label for="small-input" class="text-sm font-medium text-gray-900 block">Email
                                address</label>
                            <p v-if="email && !validateEmail(email)" class="text-sm font-medium block text-red-400">Valid
                                email required</p>
                        </div>
                        <input type="email" id="small-input" v-model="email" placeholder="email@componay.com"
                            :class="{ 'bg-red-50 border-red-300 text-red-400': (email && !validateEmail(email)) }"
                            class="block w-full p-2 text-gray-900 border-2 border-gray-200 rounded-lg py-2.5 mb-4 focus-visible:outline-none">
                        <button type="submit" :disabled="!validateEmail(email)"
                            class=" disabled:bg-gray-400 block bg-slateGrey enabled:hover:shadow-xl enabled:hover:shadow-tomato enabled:hover:bg-gradient-to-r from-rose-600 to-tomato  text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">Subscribe
                            to monthly newsletter</button>
                    </form>
                </div>
                    <picture>
                        <!-- <source media="(max-width: 767px)"
                        class="w-full"
                            srcset="assets/images/newsletter-sign-up/illustration-sign-up-mobile.svg"> -->
                        <img src="assets/images/newsletter-sign-up/illustration-sign-up-desktop.svg" class="bg-auto w-full"
                            alt="IfItDoesntMatchAnyMedia">
                    </picture>
            </div>
        </div>
    </div>
</template>