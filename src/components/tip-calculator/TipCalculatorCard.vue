<script setup lang="ts">

import TipIconButton from './TipIconButton.vue'
import TipCustomInput from './TipCustomInput.vue'
import TipInput from './TipInput.vue'
import TipFormSection from './TipFormSection.vue'

const bill = ref(0.00);
const tipCustom = ref(5);
const tip = ref(5);
const people = ref(0);

watch([bill, tipCustom, people], () => {
  tip.value = tipCustom.value; // Update the tip value if tipCustom changes
});

const tipValue = computed(() => {
  if (isFormInvalid.value) return 0.00;
  const res = (bill.value * (tip.value / 100)) / people.value;
  return res.toFixed(2);
});

const totalValue = computed(() => {
  if (isFormInvalid.value) return 0.00;
  const billWithTip = bill.value + (bill.value * (tip.value / 100))
  const res = billWithTip / people.value;
  return res.toFixed(2);
});

const isFormInvalid = computed(() => {
  return bill.value <= 0 || people.value <= 0;
});

const formRef = ref();

const onFormReset = () => {
  // formRef.value.reset();
  bill.value = 0.00;
  tipCustom.value = 0;
  people.value = 1;
}

const onGetPercentage = (percentage: number) => {
  tipCustom.value = percentage;
};

const onGetBill = (value: number) => {
  bill.value = value;
}

const onGetPeople = (value: number) => {
  people.value = value;
}


</script>

<template>
  <div class="max-w-3xl bg-white rounded-2xl shadow p-6 flex flex-col justify-center gap-8 relative font-SpaceMono mx-4">
    <form ref="formRef">
      <div class="flex flex-col md:flex-row gap-8 justify-between p-4">
        <div class="card-left md:w-1/2">
          <TipInput @getValue="onGetBill" id="bill" label="Bill" icon="/assets/images/icon-dollar.svg" type="number"
            placeholder="0" required />
          <div class="mb-6">
            <label for="" class="block mb-2 text-md font-bold text-label">Select Tip %</label>
            <div class="grid grid-cols-3 gap-2 text-center text-white text-xl">
              <TipIconButton :label="'5%'" @getPercentage="onGetPercentage"></TipIconButton>
              <TipIconButton :label="'10%'" @getPercentage="onGetPercentage"></TipIconButton>
              <TipIconButton :label="'15%'" @getPercentage="onGetPercentage"></TipIconButton>
              <TipIconButton :label="'20%'" @getPercentage="onGetPercentage"></TipIconButton>
              <TipIconButton :label="'25%'" @getPercentage="onGetPercentage"></TipIconButton>
              <TipCustomInput id="custom-tip" type="number" @getPercentage="onGetPercentage" />
            </div>
          </div>
          <TipInput @getValue="onGetPeople" id="people" label="Number of People" icon="/assets/images/icon-person.svg"
            type="number" placeholder="0" required />
        </div>

        <div class="total-card flex flex-col rounded-2xl justify-between md:w-1/2 p-8">
          <div class="flex flex-col gap-12 py-4">
            <div class="flex justify-between">
              <div class="text-sm flex flex-col gap-1">
                <span class="text-white font-semibold">Tip Amount</span>
                <span class="font-bold text-xs text-label">/ person</span>
              </div>
              <p class="text-4xl font-extrabold total-amount flex items-center">
                <img src="/assets/images/icon-dollar.svg" alt="dollar" class="w-4 h-6.5 me-2">
                {{ tipValue }}
              </p>
            </div>
            <div class="flex justify-between">
              <div class="text-sm flex flex-col gap-1">
                <span class="text-white font-semibold">Total</span>
                <span class="font-bold text-xs text-label">/ person</span>
              </div>
              <p class="text-4xl font-extrabold total-amount flex items-center">
                <img src="/assets/images/icon-dollar.svg" alt="dollar" class="w-4 h-6.5 me-2">
                {{ totalValue }}
              </p>
            </div>
          </div>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" @click="onFormReset" :disabled="isFormInvalid">RESET</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import { computed, watch } from "vue";
import { defineComponent, ref } from "vue";



export default defineComponent({
  name: 'TipCalculatorCard',
  // methods: {
  //   onGetPercentage,

  // }
})

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


.text-label {
  color: hsl(184, 14%, 56%);
}

.total-card {
  background-color: hsl(183, 100%, 15%);
}


.bg-tipBox:hover {
  background-color: hsl(172, 67%, 45%);

}

.tip-box-custom {
  background-color: hsl(189, 41%, 97%);
  color: hsl(189, 41%, 97%);
}


.total-amount {
  color: hsl(172, 67%, 45%);
}


.reset-button {
  background-color: hsl(172, 67%, 45%);
  color: hsl(183, 100%, 15%);
}
</style>