<template>
    <button role="button" type="button" :class="buttonClasses" @click="getPercentage">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const props = {
    label: {
        type: String,
        required: true,
    },
    buttonClasses: {
        type: String,
        default: "rounded-md font-bold p-2.5 bg-tipBox",
    },
}

export default defineComponent({
    name: 'TipIconButton',
    props: props,
    methods: {
        getPercentage() {
            //From props label extract value as percentage label is string of type 20% get only number
            if(this.$props.label) {
                const numbersOnly = this.$props.label.match(/\d+/);
                const percentage = (numbersOnly) ? numbersOnly[0] : 0;
                console.log("🚀 ~ file: TipIconButton.vue:28 ~ getPercentage ~ percentage:", percentage)
                this.$emit('getPercentage', percentage);
            }
        }
    }
})

</script>