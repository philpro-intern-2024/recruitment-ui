<script setup lang="ts">

</script>

<template>
  <div class="fixed bottom-0 w-full sm:h-[50%] md:h-[30%] lg:h-[22%]">
    <img
      src="../../assets/imgs/FooterReg.png"
      alt="Image description"
      class="w-full h-full object-cover brightness-50"
    />
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 justify-between my-[50px] sm:mx-[20px] lg:mx-[50px] gap-5 items-start absolute inset-0"
    >
      <div class="text-overlay text-white md:col-span-2 lg:col-span-1 sm:w-[70%] sm:mx-auto lg:w-full lg:mx-0">
        <h1 class="font-bold sm:text-center md:text-left text-xl">
            FOOTER CONTENT
        </h1>
        <h2 class="sm:text-justify md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda inventore, ut est vel magnam culpa ullam dicta deleniti officia beatae maiores temporibus quidem veniam consequuntur architecto nostrum rerum eligendi veritatis.
        </h2>
      </div>
      <div class="text-overlay text-center  text-white flex flex-col">
        <h2 class="font-bold text-xl">FOOTER LINK</h2>
        <router-link to="/">Link1</router-link>
        <router-link to="/">Link2</router-link>
        <router-link to="/">Link3</router-link>
        <router-link to="/">Link4</router-link>
      </div>
      <div class="text-overlay text-white items-center flex flex-col ">
        <h2 class="font-bold text-xl">FOOTER LINK</h2>
        <router-link to="/">Link1</router-link>
        <router-link to="/">Link2</router-link>
        <router-link to="/">Link3</router-link>
        <router-link to="/">Link4</router-link>
      </div>
    </div>
  </div>
</template>