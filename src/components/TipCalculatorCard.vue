<template>
  <div class="max-w-3xl bg-white rounded-2xl shadow p-6 flex flex-col justify-center gap-8 relative">
    <form>
    <div class="flex flex-col md:flex-row gap-8 justify-between p-4">
      <div class="card-left w-1/2">
        <div class="mb-6">
          <label for="bill" class="block mb-2 text-md font-medium text-gray-900">Bill</label>
          <input type="text" id="bill"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-xl font-bold text-end"
            placeholder="0" required>
        </div>
        <div class="mb-6">
          <label for="tip" class="block mb-2 text-md font-medium text-gray-900">Select Tip %</label>
          <div class="grid grid-cols-3 gap-2 text-center text-white text-xl">
            <div class="tip-box rounded-md font-bold p-2.5">5%</div>
            <div class="tip-box rounded-md font-bold p-2.5">5%</div>
            <div class="tip-box rounded-md font-bold p-2.5">5%</div>
            <div class="tip-box rounded-md font-bold p-2.5">5%</div>
            <div class="tip-box rounded-md font-bold p-2.5">5%</div>

            <div class="tip-box-custom rounded-md font-bold">
              <input type="text" id="custom-tip"
                class="tip-box-custom text-center bg-gray-50 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Custom" required>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <label for="people" class="block mb-2 text-md font-medium text-gray-900">Number of People</label>
          <input type="text" id="people"
            class="text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-xl font-bold text-end bg-teal-50"
            placeholder="0" required>
        </div>
      </div>

      <div class="total-card flex flex-col rounded-2xl justify-between w-1/2 p-8">
        <div class="flex flex-col gap-12 py-4">
          <div class="flex justify-between">
            <div class="text-xs flex flex-col justify-end gap-1">
              <span class="text-white font-semibold">Tip Amount</span>
              <span>/ person</span>
            </div>
            <p class="text-4xl font-extrabold">$0.00</p>
          </div>
          <div class="flex justify-between">
            <div class="text-xs flex flex-col justify-end gap-1">
              <span class="text-white font-semibold">Total</span>
              <span>/ person</span>
            </div>
            <p class="text-4xl font-extrabold">$0.00</p>
          </div>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">RESET</button>
      </div>


    </div>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: 'TipCalculatorCard'
})

</script>

<style scoped>


.total-card {
  background-color: hsl(183, 100%, 15%);
}

.tip-box {
  background-color: hsl(183, 100%, 15%);
}

.tip-box-custom {
  /* background-color: hsl(189, 41%, 87%); */
  background-color: hsl(189, 41%, 97%);
  color: hsl(183, 100%, 15%);
}

.tip-box-custom input {

  color: hsl(183, 100%, 15%);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: hsl(183, 100%, 15%);
  opacity: 1;
  /* Firefox */
}
</style>