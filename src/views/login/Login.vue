
<script>


</script>

<template>
  <div class="flex sm:py-[4rem] sm:justify-center h-screen lg:justify-end lg:py-0 bg-[url('./imgs/loginpage.png')]">
    <!-- oppacity -->
    <div class="fixed inset-0 bg-[#131C39] opacity-70 z-20"></div>
    <!-- contents -->
    
    <div
      class="bg-white sm:rounded-none sm:w-[100%] lg:h-full lg:w-[65%] z-40 lg:rounded-l-[20px] flex flex-col justify-center items-center"
    >
      <div class="w-[80%] flex flex-col justify-center items-center">
        <img src="../../assets/imgs/logo.png" class="w-[200px]" alt="" />
        <div class="flex flex-col justify-center items-center mb-[50px]">
          <h1 class="sm:text-[30px] lg:text-[52px]">Welcome Back</h1>
          <div class="border w-[80px] border-b-[10px] border-[#FFBC3A]"></div>
        </div>
        <!-- INPUTS -->
        <div class="w-[70%] flex flex-col gap-5">
          <!-- USERNAME -->
          <div class="flex flex-col">
            <label class="lg:text-[18px] font-medium text-gray-500" for="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              class="py-3 px-4 block w-full border border-gray-400 text-black rounded-md text-sm focus:border-green-500 focus:ring-green-500 bg-white"
            />
          </div>
          <!-- PASSWORD -->
          <div class="flex flex-col">
            <label class=" lg:text-[18px] font-medium text-gray-500" for="username">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              class="py-3 px-4 block w-full border border-gray-400 text-black rounded-md text-sm focus:border-green-500 focus:ring-green-500 bg-white"
            />
            <router-link class="sm:text-[10px] lg:text-[15px] text-[#131C39] font-medium text-right" to="">Forgot Password?</router-link>
          </div>
        </div>
        <button class="mt-[30px] rounded-lg sm:py-[7px] sm:px-[40px] bg-[#E8A115] lg:py-[15px] lg:px-[60px] font-bold text-[#1C1C1C] lg:text-[18px]">Log - In</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>