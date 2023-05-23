<template>
  <div class="max-w-md bg-white rounded-lg shadow p-8 mx-6 advice-card flex flex-col justify-center gap-8 relative pb-14">
    <h3 class="text-sm text-green-400 font-bold text-center tracking-widest">ADVICE #{{  id }}</h3>
    <div class="text-white text-2xl text-center">
      <p class="font-extrabold">{{  advice }}</p>
    </div>
    <img src="/assets/images/pattern-divider-desktop.svg" alt="divider">
    <div @click="fetchAdvice"
      class="w-14 h-14 shadow-2xl hover:shadow-red-500 ring-blue-500 ring-opacity-100 advice-card-dice rounded-full flex items-center justify-center bg-green-300 self-center absolute bottom-0 transform translate-y-1/2">
      <img src="/assets/images/icon-dice.svg" alt="dice" class="w-6 h-6">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchAdvice } from '../services/AdviceApi.service';


export default defineComponent({
  name: 'AdviceCard',
  methods: {
    fetchAdvice() {
      return fetchAdvice().then(
        (res) => {
          this.advice = res.slip.advice;
          this.id = res.slip.id;
        }).
        catch(err => {
          console.log("Error: ", err)
        })
    }
  },
  data() {
    return {
      advice: '',
      id: 0
    }

  },
  created() {
    this.fetchAdvice()
  }
})
</script>



<style scoped>
.advice-card {
  background-color: hsl(217, 19%, 24%);
}

.advice-card-dice:hover {
  box-shadow: 0px 0px 16px 1px hsl(150, 100%, 66%);
}
</style>