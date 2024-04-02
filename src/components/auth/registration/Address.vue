<script setup lang="ts">
import Stepper from "./Stepper.vue";

const emit = defineEmits(["switch"]);

const prev = () => {
  emit("switch", "OtherInfo");
};

const next = () => {
  emit("switch", "Address");
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
      <Stepper step="3" />
      <h1
        class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
      >
        PRIMARY ADDRESS
      </h1>
      <form class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full justify-center items-center gap-3">
          <!-- House No. / Lot No. / Street -->
          <div class="flex-auto w-4/12">
            <label for="street" class="text-sm font-light text-[#777777]">
              House No. / Lot No. / Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              autocomplete="street"
              required
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Barangay -->
          <div class="flex-auto w-4/12">
            <label for="brgy" class="text-sm font-light text-[#777777]">
              Barangay
            </label>
            <input
              type="text"
              name="brgy"
              id="brgy"
              autocomplete="brgy"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- City / Municipality -->
          <div class="flex-auto w-4/12">
            <label for="city" class="text-sm font-light text-[#777777]">
              City / Municipality
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="city"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Province -->
          <div class="flex-auto w-3/12">
            <label for="province" class="text-sm font-light text-[#777777]">
              Province
            </label>
            <input
              type="text"
              name="province"
              id="province"
              autocomplete="province"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Country -->
          <div class="flex-auto w-4/12">
            <label for="country" class="text-sm font-light text-[#777777]">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              autocomplete="country"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
        </div>
        <!-- <div class="flex w-6/12 gap-x-4 mt-4">
          <button
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] border-gradient border-gradient-custom mt-5 p-1 font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Step 1
          </button>

          <button
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] mt-5 py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proceed to Step 3
          </button>
        </div> -->
      </form>

      <h1
        class="mt-4 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
      >
        SECONDARY ADDRESS
      </h1>
      <form class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full justify-center items-center gap-3">
          <!-- House No. / Lot No. / Street -->
          <div class="flex-auto w-4/12">
            <label for="street" class="text-sm font-light text-[#777777]">
              House No. / Lot No. / Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              autocomplete="street"
              required
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Barangay -->
          <div class="flex-auto w-4/12">
            <label for="brgy" class="text-sm font-light text-[#777777]">
              Barangay
            </label>
            <input
              type="text"
              name="brgy"
              id="brgy"
              autocomplete="brgy"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- City / Municipality -->
          <div class="flex-auto w-4/12">
            <label for="city" class="text-sm font-light text-[#777777]">
              City / Municipality
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="city"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Province -->
          <div class="flex-auto w-3/12">
            <label for="province" class="text-sm font-light text-[#777777]">
              Province
            </label>
            <input
              type="text"
              name="province"
              id="province"
              autocomplete="province"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
          <!-- Country -->
          <div class="flex-auto w-4/12">
            <label for="country" class="text-sm font-light text-[#777777]">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              autocomplete="country"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            />
          </div>
        </div>
        <div class="flex w-6/12 gap-x-4 mt-4">
          <button
            @click.prevent="prev()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] border-gradient border-gradient-custom mt-5 p-1 font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Step 3
          </button>

          <button
            @click.prevent="next()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] mt-5 py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proceed to Step 5
          </button>
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
