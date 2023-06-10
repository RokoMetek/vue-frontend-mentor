<template>
    <div class="flex flex-col section-1 w-full py-24">
        <div class="flex justify-center bg-very-dark-blue rounded-tr-[8rem] rounded-bl-[8rem] ">
            <div class="w-full flex justify-end p-16 pt-36 pb-28 div-image bg-no-repeat">
                <div class="w-1/2 flex justify-end items-center relative">
                    <div class="absolute z-10">
                        <img src="/assets/images/blogr/illustration-phones.svg" alt="image" class="">
                    </div>
                </div>
                <div class="w-1/2 flex flex-col justify-center gap-6 items-start relative text-white">
                    <div class="">
                        <h1 class="text-4xl font-extrabold mb-4">State of the Art Infrastructure</h1>
                        <p class="text-lg text-start text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae. Imperdiet proin fermentum leo vel orci porta. Magna ac
                            placerat
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-very-dark-blue {
    background-color: hsl(237, 17%, 21%);

    /* background-color: hsl(237, 23%, 32%); */
    
}

.div-image {
    background-image: url("/assets/images/blogr/bg-pattern-circles.svg");
    /* background-color: hsl(237, 17%, 21%); */
    background-position: 0% 75%;
    /* background-color: hsl(237, 23%, 32%); */
}
</style>