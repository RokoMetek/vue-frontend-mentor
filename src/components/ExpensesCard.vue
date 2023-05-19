<template>
  <div class="max-w-2xl min-w-min bg-white border border-gray-200 rounded-lg shadow p-8 mx-6">
    <h5 class="mb-8 text-3xl font-bold tracking-tight text-gray-900">Spending - last 7 Days</h5>
    <table class="table-fixed w-full chart-table" aria-describedby="chart-table">
      <tbody>
        <th></th>
        <tr>
          <td>
            <ExpensesCardBar :day="'mon'"></ExpensesCardBar>
          </td>
          <td class="">
            <ExpensesCardBar :day="'tue'" :bar-percentage="'20%'"></ExpensesCardBar>
          </td>
          <td>
            <ExpensesCardBar :day="'wed'" :bar-percentage="'75%'"></ExpensesCardBar>
          </td>
          <td>
            <ExpensesCardBar :day="'thu'" :bar-percentage="'100%'"></ExpensesCardBar>
          </td>
          <td>
            <ExpensesCardBar :day="'fri'" :bar-percentage="'90%'"></ExpensesCardBar>
          </td>
          <td>
            <ExpensesCardBar :day="'sat'"></ExpensesCardBar>
          </td>
          <td>
            <ExpensesCardBar :day="'sun'"></ExpensesCardBar>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="border-t border-gray-300 my-6"></div>

    <div class="flex gap-4 justify-between">
      <div class="flex flex-col text-black gap-2">
        <p class="text-md text-info-label">Total this month</p>
        <p class="text-5xl font-extrabold">$478.33</p>
      </div>
      <div class="flex flex-col justify-end text-black gap-2">
        <p class="text-sm font-extrabold text-end">+2.4%</p>
        <p class="text-md text-info-label">from last month</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExpensesCardBar from './ExpensesCardBar.vue'

export default defineComponent({
  name: 'ExpensesCard',
  components: {
    ExpensesCardBar
  }
})
</script>

<style scoped>
.chart-table td {
  /* padding: 1rem; */
}

.text-info-label {
 color: #93867b; 
}

</style>
