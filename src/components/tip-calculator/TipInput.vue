<template>
    <div class="mb-6">
        <label :for="id" class="block mb-2 text-md font-bold text-label">{{ label }}</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img :src="icon" alt="icon">
            </div>
            <input v-model="data" :type="type" :id="id" :class="inputClasses" :placeholder="placeholder"
                :required="required">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return { data: 0 }
    },
    watch: {
        data(value: number) {
            this.$emit('getValue', value);
        }
    },
    computed: {
        inputClasses() {
            // Compute the input classes based on your Tailwind CSS configuration
            // You can add any dynamic class based on your needs
            return "bg-gray-100 text-tipBox rounded-md focus:outline-none focus:border--500 focus:ring-tipBox focus:ring-2 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:valid:border-strongCyan focus:valid:ring-strongCyan block w-full p-2.5 text-xl font-bold text-end";
        },
    },
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>