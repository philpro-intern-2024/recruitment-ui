<script setup lang="ts"></script>

<template>
  <div
    class="bg-[#FFFFFF] shadow-xl px-[5rem] flex items-center flex-row h-[6rem] w-full"
  >
    <div class="w-1/2 h-5/6 flex items-center px-[5rem]">
      <img src="../../assets/imgs/logo.png" class="mt-2 h-[8rem]" alt="" />
    </div>
    <div
      class="w-1/2 h-5/6 flex items-center justify-evenly text-xl font-Poppins-ExtraBold"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/about">Login</router-link>
    </div>
  </div>
</template>
