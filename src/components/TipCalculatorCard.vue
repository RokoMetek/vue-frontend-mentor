<script setup lang="ts">

const bill = ref(0.00);
const tipCustom = ref(5);
const tip = ref(5);
const people = ref(1);

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


</script>

<template>
  <div class="max-w-3xl bg-white rounded-2xl shadow p-6 flex flex-col justify-center gap-8 relative font-SpaceMono mx-4">
    <form ref="formRef">
      <div class="flex flex-col md:flex-row gap-8 justify-between p-4">
        <div class="card-left md:w-1/2">
          <div class="mb-6">
            <label for="bill" class="block mb-2 text-md font-bold text-label">Bill</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/assets/images/icon-dollar.svg" alt="person">
              </div>
              <input v-model="bill" type="number" step=".01" id="bill" class="bg-gray-100 text-tipBox rounded-md 
                      focus:outline-none focus:border--500 focus:ring-tipBox focus:ring-2
                      focus:invalid:border-red-500 focus:invalid:ring-red-500 
                      focus:valid:border-strongCyan focus:valid:ring-strongCyan 
                      block w-full p-2.5 text-xl font-bold text-end" placeholder="0" required>
            </div>
          </div>
          <div class="mb-6">
            <label for="" class="block mb-2 text-md font-bold text-label">Select Tip %</label>
            <div class="grid grid-cols-3 gap-2 text-center text-white text-xl">
              <button role="button" type="button" class="rounded-md font-bold p-2.5 bg-tipBox"
                @click="tipCustom = 5">5%</button>
              <button role="button" type="button" class="rounded-md font-bold p-2.5 bg-tipBox"
                @click="tipCustom = 10">10%</button>
              <button role="button" type="button" class="rounded-md font-bold p-2.5 bg-tipBox"
                @click="tipCustom = 15">15%</button>
              <button role="button" type="button" class="rounded-md font-bold p-2.5 bg-tipBox"
                @click="tipCustom = 20">20%</button>
              <button role="button" type="button" class="rounded-md font-bold p-2.5 bg-tipBox"
                @click="tipCustom = 25">25%</button>
              <div class="tip-box-custom rounded-md font-bold">
                <input v-model="tipCustom" type="number" id="custom-tip" name="tipCustom" class="text-center bg-gray-50 text-tipBox rounded-md block w-full p-2.5 
                    focus:outline-none focus:border--500 focus:ring-tipBox focus:ring-2
                      focus:invalid:border-red-500 focus:invalid:ring-red-500 
                      focus:valid:border-strongCyan focus:valid:ring-strongCyan 
                    " placeholder="Custom" required>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label for="people" class="block mb-2 text-md font-bold text-label">Number of People</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/assets/images/icon-person.svg" alt="person">
              </div>
              <input v-model="people" type="number" id="people" class="bg-gray-100 text-tipBox rounded-md 
                      focus:outline-none focus:border--500 focus:ring-tipBox focus:ring-2
                      focus:invalid:border-red-500 focus:invalid:ring-red-500 
                      focus:valid:border-strongCyan focus:valid:ring-strongCyan 
                    block w-full p-2.5 text-xl font-bold text-end" placeholder="0" min="1" required>
            </div>
          </div>
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
  name: 'TipCalculatorCard'
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