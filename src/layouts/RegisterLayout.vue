<script setup lang="ts">
const props = defineProps(["title", "subText", "stepTitle"]);
</script>

<template>
  <div class="flex flex-row-reverse relative">
    <div class="relative w-4/12 h-screen">
      <div class="absolute inset-0 w-full h-full bg-[#131C39] opacity-75"></div>
      <img src="../assets/imgs/login.png" class="object-cover h-full" />
    </div>
    <div
      class="bg-white w-[70%] absolute left-0 rounded-r-[50px] h-screen"
      :class="
        props.stepTitle === 'Address'
          ? 'overflow-y-auto py-10'
          : 'flex items-center'
      "
    >
      <div class="flex flex-col justify-center items-center w-full">
        <img class="w-[200px]" src="../assets/imgs/logo.png" alt="" srcset="" />
        <h1 class="text-4xl font-bold mt-2">{{ props.title }}</h1>
        <p class="text-lg mt-1">{{ props.subText }}</p>
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
