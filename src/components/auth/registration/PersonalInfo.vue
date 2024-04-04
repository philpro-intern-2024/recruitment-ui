<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { ref } from "vue";

const { registerData } = defineProps(["registerData"]);
const emit = defineEmits(["switch"]);

const errorFields = ref([] as string[]);

const next = () => {
  const error = checkEmptyFields();

  if (error.length === 0) emit("switch", "Credentials");
  else errorFields.value = error;
};

const onChange = (e: any) => {
  registerData.personalInfo[e.target.name] = e.target.value;

  const error = checkEmptyFields();

  if (error) errorFields.value = error;
};

const checkEmptyFields = () => {
  let arr = [];
  let excludes = ["suffix", "middleName", "upline", "uplineContact"];

  for (const [key, value] of Object.entries(registerData.personalInfo))
    if (!excludes.includes(key) && value === "") arr.push(key);

  return arr;
};
</script>

<template>
  <div class="w-full mt-4 max-w-4xl flex flex-col">
    <div
      class="font-bold text-3xl bg-gradient-to-r from-[#131C39] to-[#367CFF] text-white shadow-[4px_4px_4px_0px_#00000024] text-center p-4 rounded-t-3xl max-w-xs"
    >
      NATIONAL
    </div>
    <div
      class="bg-white border border-black rounded-b-[70px] rounded-tr-[70px] w-full shadow-[4px_4px_4px_0px_#00000024] h-full p-10"
    >
      <Stepper step="0" />
      <h1
        class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
      >
        PERSONAL INFORMATION
      </h1>
      <form class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full justify-start items-start gap-3">
          <div class="w-2/12">
            <label for="prefix" class="text-sm font-light text-[#777777]">
              Prefix
            </label>
            <select
              name="prefix"
              id="prefix"
              autocomplete="prefix"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('prefix')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.personalInfo.prefix"
              @change="onChange($event)"
            >
              <option
                v-for="item in ['Mr.', 'Ms.', 'Miss', 'Mrs.', 'Mx.']"
                :key="item"
              >
                {{ item }}
              </option>
            </select>
            <p
              v-if="errorFields.includes('prefix')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Prefix is required
            </p>
          </div>
          <!-- FIRST NAME -->
          <div class="flex-auto">
            <label for="firstName" class="text-sm font-light text-[#777777]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autocomplete="firstName"
              required
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('firstName')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.personalInfo.firstName"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('firstName')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              First Name is required
            </p>
          </div>
          <!-- MIDDLE NAME -->
          <div class="flex-auto">
            <label for="middleName" class="text-sm font-light text-[#777777]">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              autocomplete="middleName"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :value="registerData.personalInfo.middleName"
              @change="onChange($event)"
            />
          </div>
          <!-- LAST NAME -->
          <div class="flex-auto">
            <label for="lastName" class="text-sm font-light text-[#777777]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autocomplete="lastName"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('lastName')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.personalInfo.lastName"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('lastName')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Last Name is required
            </p>
          </div>
          <!-- SUFFIX -->
          <div class="w-2/12">
            <label for="suffix" class="text-sm font-light text-[#777777]">
              Suffix
            </label>

            <input
              type="text"
              name="suffix"
              id="suffix"
              autocomplete="suffix"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :value="registerData.personalInfo.suffix"
              @change="onChange($event)"
            />
          </div>
          <div class="flex-auto">
            <label for="upline" class="text-sm font-light text-[#777777]">
              Upline
            </label>
            <input
              type="text"
              name="upline"
              id="upline"
              autocomplete="upline"
              class="mt-1 w-full block py-3 font-bold text-base"
              disabled
              value="Rafhael Vien Sacdalan"
            />
          </div>
          <div class="flex-auto">
            <label
              for="uplineContact"
              class="text-sm font-light text-[#777777]"
            >
              Upline Contact
            </label>
            <input
              type="text"
              name="uplineContact"
              id="uplineContact"
              autocomplete="uplineContact"
              class="mt-1 w-full block py-3 font-bold text-base"
              disabled
              value="09062619170"
            />
          </div>
        </div>
        <!-- PREFIX -->
        <button
          @click.prevent="next()"
          class="w-4/12 mt-4 hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          Proceed: Step 2
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
input:disabled {
  background-color: white;
}
</style>
