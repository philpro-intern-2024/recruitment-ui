<script setup lang="ts">
const emit = defineEmits(["switch"]);

const next = () => {
  emit("switch", "PersonalInfo");
};
</script>

<template>
  <div
    class="bg-white mt-10 border rounded-[70px] w-10/12 shadow-[4px_4px_4px_0px_#00000024]"
  >
    <div
      class="flex flex-col justify-center items-center gap-5 h-[400px] py-10"
    >
      <div class="flex flex-col justify-center items-center w-full mb-3">
        <h1 class="text-5xl font-bold">SELECT TYPE</h1>
        <hr class="border-[#FFBC3A] w-3/12 rounded-md border-2 mt-2" />
      </div>
      <button
        @click.prevent="next()"
        class="w-9/12 bg-red-50 h-[75px] rounded-[16px] text-4xl font-bold bg-gradient-to-r from-[#131C39] to-[#367CFF] text-white shadow-[4px_4px_4px_0px_#00000024] transition duration-300 ease-in-out transform hover:scale-105"
      >
        NATIONAL
      </button>
      <button
        @click.prevent="next()"
        class="w-9/12 bg-red-50 h-[75px] rounded-[16px] text-4xl font-bold bg-gradient-to-r from-[#C68914] to-[#FFAA00] text-white shadow-[4px_4px_4px_0px_#00000024] transition duration-300 ease-in-out transform hover:scale-105"
      >
        INTERNATIONAL
      </button>
    </div>
  </div>
</template>

<style scoped></style>
