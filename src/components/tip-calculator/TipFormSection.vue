<template>
  <div class="flex flex-col md:flex-row gap-8 justify-between p-4 ">
    <div class="card-left w-1/2">
      <slot></slot>
    </div>
    <div class="total-card flex flex-col rounded-2xl justify-between w-1/2 p-8">
      <slot name="total-card"></slot>
    </div>
  </div>
</template>