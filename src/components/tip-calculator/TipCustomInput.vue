<template>
    <div class="tip-box-custom rounded-md font-bold">
        <input :type="type" v-model="tip" :id="id" :class="inputClasses" :placeholder="placeholder" :required="required" />
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
        type: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "Custom",
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            tip: 15
        }
    },
    watch: {
        tip(value: number) {
            if(value)  this.$emit('getPercentage', value);
        }
    },
    computed: {
        inputClasses() {
            // Compute the input classes based on your Tailwind CSS configuration
            // You can add any dynamic class based on your needs
            return `text-center bg-gray-50 text-tipBox rounded-md block w-full p-2.5 
                    focus:outline-none focus:border--500 focus:ring-tipBox focus:ring-2
                    focus:invalid:border-red-500 focus:invalid:ring-red-500 
                    focus:valid:border-strongCyan focus:valid:ring-strongCyan`;
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