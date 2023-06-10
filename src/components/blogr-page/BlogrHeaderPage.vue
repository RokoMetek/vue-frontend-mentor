<template>
    <div class="flex flex-col intro-desktrop-image w-full bg-red-400 rounded-b-[8rem]">
        <nav class="border-gray-200">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="flex gap-12">
                    <a href="#" class="flex items-center">
                        <img src="/assets/images/blogr/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul
                            class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-slate-200"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-200 md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-200 md:p-0">Pricing</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-200 md:p-0 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex gap-2 my-4 justify-center">
                    <div>
                        <button class="text-white font-bold py-2 px-4 hover:bg-white hover:text-red-400 border rounded-2xl">
                            Login
                        </button>
                    </div>
                    <div>
                        <button class="bg-white text-red-400 font-bold py-2 px-4 rounded-2xl hover:bg-slate-100">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="flex flex-col justify-center gap-2 py-24">
            <div class="w-full flex">
                <div class="text-center text-white w-full flex flex-col gap-2">
                    <h1 class="text-4xl text-center">A modern publishing platform</h1>
                    <h1 class="text-md text-center">Grow your audience and build your online brand</h1>
                    <div class="flex gap-2 my-4 justify-center">
                        <div>
                            <button class="bg-white hover:bg-slate-100 text-red-400 font-bold py-2 px-4 rounded-2xl">
                                Start for Free
                            </button>
                        </div>
                        <div>
                            <button class="text-white font-bold py-2 px-4 border rounded-2xl hover:bg-white hover:text-red-400">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.intro-desktrop-image {
    background-image: url("/assets/images/blogr/bg-pattern-intro-desktop.svg");
    /* background-repeat: no-repeat; */
    /* background-position: center center; */
    background-position: 25%;
    /* background-size: cover; */
}
</style>