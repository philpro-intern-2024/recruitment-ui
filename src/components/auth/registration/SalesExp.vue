<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { ref, reactive } from "vue";

const { registerData } = defineProps(["registerData"]);
const emit = defineEmits(["switch", "file", "submit"]);
const url = ref(null);

const prev = () => {
  emit("switch", "SpecialSkills");
};

const onChange = (e: any) => {
  if (e.target.name === "terms") registerData.terms = e.target.checked;
  else registerData.salesExpRef[e.target.name] = e.target.value;
};

const onProfileChange = (e: any) => {
  emit("file", e.target.files[0]);
  url.value = URL.createObjectURL(e.target.files[0]);
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
      <Stepper step="6" />

      <form action="">
        <h1
          class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[25em] text-center px-4"
        >
          SALES EXPERIENCE AND REFERENCES
        </h1>
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-wrap w-full justify-center items-center gap-3">
            <!-- Special Skills -->
            <div class="w-full">
              <label for="jobDesc" class="text-sm font-light text-[#777777]">
                Job Description
              </label>
              <textarea
                rows="3"
                name="jobDesc"
                id="jobDesc"
                autocomplete="jobDesc"
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :value="registerData.salesExpRef.jobDesc"
                @change="onChange($event)"
              ></textarea>
            </div>

            <!-- Sales Target Reached -->
            <div class="w-full">
              <label
                for="salesTarget"
                class="text-sm font-light text-[#777777]"
              >
                Sales Target Reached
              </label>
              <input
                type="number"
                name="salesTarget"
                id="salesTarget"
                autocomplete="salesTarget"
                required
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :value="registerData.salesExpRef.salesTarget"
                @change="onChange($event)"
              />
            </div>
            <!-- References & Contact Number -->
            <div class="w-full">
              <label for="references" class="text-sm font-light text-[#777777]">
                References & Contact Number
              </label>
              <textarea
                rows="3"
                name="references"
                id="references"
                autocomplete="references"
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :value="registerData.salesExpRef.references"
                @change="onChange($event)"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex gap-x-5 mt-5 justify-start items-start">
          <div class="w-6/12">
            <h1
              class="mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[12em] text-center px-4"
            >
              UPLOAD IMAGE
            </h1>
            <div class="flex flex-col justify-center items-center">
              <div
                class="flex flex-wrap w-full justify-center items-center gap-3"
              >
                <!-- Formal Picture -->
                <div class="w-full">
                  <label
                    for="profile"
                    class="text-sm font-light text-[#777777]"
                  >
                    Upload your Formal Photo
                  </label>
                  <label>
                    <span className="sr-only">Choose logo photo</span>
                    <input
                      type="file"
                      name="profile"
                      id="profile"
                      autocomplete="profile"
                      accept="image/*"
                      @change="onProfileChange($event)"
                      className="mt-1 border border-gray-300 block w-full text-sm text-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-[#131C39] file:text-white"
                    />
                  </label>
                </div>
              </div>
            </div>
            <h1
              class="mt-4 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
            >
              TERMS AND AGREEMENT
            </h1>
            <div class="flex flex-col justify-center items-center">
              <div
                class="flex flex-wrap w-full justify-start items-center gap-3"
              >
                <!-- Terms and Agreement -->
                <div class="flex flex-row-reverse justify-start items-center">
                  <label for="terms" class="text-sm font-light text-[#777777]">
                    I agree to the
                    <span class="text-[#131C39] font-bold"
                      >terms and conditions</span
                    >
                    of Philproperties contract and the website.
                  </label>
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    autocomplete="terms"
                    required
                    :value="registerData.terms"
                    @change="onChange($event)"
                    class="mt-1 w-2/12 block py-3 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-6/12 border border-1">
            <img :src="url" class="aspect-square object-cover w-full" alt="" />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="flex w-6/12 gap-x-4 mt-2">
            <button
              @click.prevent="prev()"
              class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] border-gradient border-gradient-custom mt-5 p-1 font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Back to Step 6
            </button>
            <button
              @click.prevent="submit()"
              class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] mt-5 py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input:disabled {
  background-color: white;
}

.border-gradient {
  border: 10px solid transparent;
  border-image-slice: 1;
  border-width: 1px;
  border-radius: 16px;
  position: relative;
}

.border-gradient-custom::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(to left, #131c39, #367cff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
