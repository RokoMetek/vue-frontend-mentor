<template>
    <div class="container-sm bg-white mx-auto px-4 rounded-3xl p-2">
        <div class="flex flex-col items-center">
            <div class="flex flex-row w-full justify-center">
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

                    <form>
                        <label for="small-input" class="text-sm font-medium text-gray-900 mb-2 block">Email
                            address</label>
                        <input type="text" id="small-input"
                            placeholder="email@componay.com"
                            class="block w-full p-2 text-gray-900 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5 mb-4">
                        <button type="button"
                            class="block bg-slateGrey hover:bg-tomato text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">Subscribe
                            to monthly newsletter</button>
                    </form>
                </div>
                <img class="bg-auto" src="assets/images/newsletter-sign-up/illustration-sign-up-desktop.svg" alt="">
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-dark-slate-grey {
    background-color: hsl(243, 29%, 20%);
}
</style>