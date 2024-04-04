<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const { show } = defineProps(["show"]);
const emit = defineEmits(["close-sidebar"]);
const handleClose = () => {
  emit("close-sidebar");
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      @click="handleClose"
      class="fixed inset-0 bg-black opacity-50 z-20"
    ></div>
  </transition>
  <transition name="slide">
    <div
      v-if="show"
      class="z-50 fixed left-0 top-0 h-screen sm:w-full md:w-[15%] bg-white text-[131C39] z-10"
    >
      <div
        class="h-[30%] flex justify-center items-center bg-white rounded-tr-xl"
      >
        <img src="../../assets/imgs/logo.png" class="h-[80%]" />
      </div>
      <button class="absolute top-4 right-4" @click="handleClose">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:scale-95"
          fill="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="h-[50%] text-white flex justify-center">
        <ul class="flex flex-col justify-evenly w-full">
          <li class="w-full">
            <!-- Use router-link with button element -->
            <router-link to="/dashboard">
              <button
                class="py-2 text-[#131C39] text-[19px] font-bold w-full hover:bg-gradient-to-r from-[#131C39] to-[#354E9F] hover:text-white transition-all duration-500"
              >
                DASHBOARD
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2 ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sidebar-link-active {
  background-color: #29374a;
  font-weight: bold;
}
button {
  background-color: #ffffff;

  transition: background-color 0.5s;
}

button:hover {
  background-color: #354e9f;
}
</style>
