<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const showMenu = ref(false)

const toggleNavbar = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#pablo"
        >
          zinc Color
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <RouterLink
              to="/"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Card Preview</span
              >
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/four-card-feature"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span class="ml-2">Card Feature</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/social-proof"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span class="ml-2">Social Proof</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/expenses"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span class="ml-2">Expenses</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavbar'
}
</script>
