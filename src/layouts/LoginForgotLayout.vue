<script setup lang="ts">
const props = defineProps(["title", "subText"]);
</script>

<template>
  <div class="flex relative">
    <div class="relative w-4/12 h-screen">
      <div class="absolute inset-0 w-full h-full bg-[#131C39] opacity-75"></div>
      <img src="../assets/imgs/login.png" class="object-cover h-full" />
    </div>
    <div
      class="bg-white flex justfiy-center w-[70%] h-screen absolute right-0 rounded-l-[50px]"
    >
      <div class="flex flex-col justify-center items-center w-full">
        <img class="w-[300px]" src="../assets/imgs/logo.png" alt="" srcset="" />
        <h1 class="text-5xl font-bold mt-5">{{ props.title }}</h1>
        <p class="text-xl mt-1">{{ props.subText }}</p>
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
