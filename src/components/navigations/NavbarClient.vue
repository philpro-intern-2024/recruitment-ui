<script setup lang="ts">
const emit = defineEmits(["click-burger"]);

const toggleSidebar = () => {
  emit("click-burger");
};
</script>

<template>
  <div
    class="bg-gradient-to-r from-[#131C39] to-[#10121B] px-6 py-2 flex flex-row"
  >
    <div class="w-1/2 flex items-center">
      <button @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 hover:scale-95"
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
    <div class="w-1/2 flex justify-end py-2">
      <button class="bg-white p-1 rounded-[2rem]">
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24"
          width="30"
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
