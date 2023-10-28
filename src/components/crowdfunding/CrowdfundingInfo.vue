<template>
    <div class="container rounded-md bg-white mx-auto px-4 p-2">
        <div class="p-4 rounded-lg md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="sm:grid max-w-screen-xl grid-cols-3 gap-8 p-4 mx-auto text-black sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                <div class="flex flex-col items-center justify-center sm:border-r-2">
                    <dt class="mb-2 text-3xl font-extrabold">$89,914</dt>
                    <dd class="text-gray-400 ">of $100,000 backed</dd>
                </div>
                <div class="flex flex-col items-center justify-center sm:border-r-2">
                    <dt class="mb-2 text-3xl font-extrabold">5,007</dt>
                    <dd class="text-gray-400">total backers</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">56</dt>
                    <dd class="text-gray-400">days left</dd>
                </div>
            </dl>
            <div class="w-full bg-gray-100 rounded-full h-2.5">
                <div class="bg-teal-600 h-2.5 rounded-full" style="width: 45%"></div>
            </div>
        </div>
    </div>
</template>