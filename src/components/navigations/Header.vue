<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';

const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const closeSidebar = () => {
  showSidebar.value = false;
};
</script>


<template>
   <Sidebar v-model:show="showSidebar" @close-sidebar="closeSidebar" />
  <div
    class="sm:h-[60px] sm:px-[3rem] xl:h-[80px] xl:px-[5rem] bg-gradient-to-r from-[#131C39] to-[#10121B] xxxl:h-[97px] xxxl:px-[10.5rem] flex flex-row"
  >
    <div class="w-1/2 flex items-center">
      <button @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-[2rem] sm:w-[2rem] xl:h-[3rem] xl:w-[3rem] xxxl:h-[4rem] xxxl:w-[4rem] hover:scale-95"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 12h16M4 16h16"
          />
        </svg>
      </button>
    </div>
    <div class="w-1/2 flex justify-end items-center sm:space-x-4  xl:space-x-9 xxxl:space-x-10 py-6">
      <button class="sm:h-[1.8rem] sm:w-[1.8rem] xl:h-[2.5rem] xl:w-[2.5rem] xxxl:h-[3.5rem] xxxl:w-[3.5rem]  xxxl:p-1 rounded-[2rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=""
          height=""
          viewBox="0 0 512 512"
          id="bell"
          fill="white"
        >
          <path
            d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2zM256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z"
          ></path>
        </svg>
      </button>

      <button class="flex sm:h-[1.8rem] sm:w-[1.8rem] sm:py-1 xl:h-[2.5rem] xl:w-[2.5rem] xxxl:h-[3.5rem] xxxl:w-[3.5rem] bg-white xxxl:p-1 rounded-[2rem] justify-center">
        <svg
          fill="none"
          height=""
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
            stroke="#374151"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
