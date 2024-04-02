<script setup lang="ts">
const props = defineProps(["step"]);
</script>

<template>
  <div class="flex items-center justify-center">
    <li
      v-for="(_, index) in Array(7)"
      :key="index"
      class="flex items-center text-white"
      :class="
        index != 6 && index <= props.step - 1
          ? ' after:border-[#E97305] w-[100px] after:w-full after:h-1 after:border-2'
          : index != 6 &&
            ' after:border-[#B7B7B7] w-[100px] after:w-full after:h-1 after:border-2'
      "
    >
      <span
        class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 font-bold"
        :class="index <= props.step ? 'bg-[#E97305]' : 'bg-[#7A7A7A]'"
      >
        {{ index + 1 }}
      </span>
    </li>
  </div>
</template>

<style scoped></style>
