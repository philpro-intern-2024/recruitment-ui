<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { ref } from "vue";

const { registerData } = defineProps(["registerData"]);
const emit = defineEmits(["switch"]);
const errorFields = ref([] as string[]);

const prev = () => {
  emit("switch", "Credentials");
};

const next = () => {
  const error = checkEmptyFields();

  if (error.length === 0) emit("switch", "Address");
  else errorFields.value = error;
};

const onChange = (e: any) => {
  registerData.otherInfo[e.target.name] = e.target.value;

  const error = checkEmptyFields();

  if (error) errorFields.value = error;
};

const checkEmptyFields = () => {
  let arr = [];

  for (const [key, value] of Object.entries(registerData.otherInfo)) {
    if (value === "") {
      // console.log(key);
      arr.push(key);
    }
  }

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
      <Stepper step="2" />
      <h1
        class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
      >
        OTHER INFORMATION
      </h1>
      <form class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full justify-start items-start gap-3">
          <!-- Gender -->
          <div class="flex-auto w-3/12">
            <label for="gender" class="text-sm font-light text-[#777777]">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              autocomplete="gender"
              required
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('gender')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.gender"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('gender')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Gender is required
            </p>
          </div>
          <!-- Marital Status -->
          <div class="flex-auto w-4/12">
            <label
              for="maritalStatus"
              class="text-sm font-light text-[#777777]"
            >
              Marital Status
            </label>
            <input
              type="text"
              name="maritalStatus"
              id="maritalStatus"
              autocomplete="maritalStatus"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('maritalStatus')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.maritalStatus"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('maritalStatus')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Marital Status is required
            </p>
          </div>
          <!-- Birth Date -->
          <div class="flex-auto w-4/12">
            <label for="birthDate" class="text-sm font-light text-[#777777]">
              Birth Date
            </label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              autocomplete="birthDate"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('birthDate')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.birthDate"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('birthDate')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Birth Date is required
            </p>
          </div>
          <!-- Citizenship -->
          <div class="flex-auto w-3/12">
            <label for="citizenship" class="text-sm font-light text-[#777777]">
              Citizenship
            </label>
            <input
              type="text"
              name="citizenship"
              id="citizenship"
              autocomplete="citizenship"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('citizenship')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.citizenship"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('citizenship')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Citizenship is required
            </p>
          </div>
          <!-- Mobile Number -->
          <div class="flex-auto w-4/12">
            <label for="mobileNumber" class="text-sm font-light text-[#777777]">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              autocomplete="mobileNumber"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('mobileNumber')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.mobileNumber"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('mobileNumber')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Mobile Number is required
            </p>
          </div>
          <!-- Phone Number -->
          <div class="flex-auto">
            <label for="phoneNumber" class="text-sm font-light text-[#777777]">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autocomplete="phoneNumber"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('phoneNumber')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.phoneNumber"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('phoneNumber')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Phone Number is required
            </p>
          </div>
          <!-- Website Link -->
          <div class="flex-auto">
            <label for="websiteLink" class="text-sm font-light text-[#777777]">
              Website Link
            </label>
            <input
              type="text"
              name="websiteLink"
              id="websiteLink"
              autocomplete="websiteLink"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('websiteLink')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.websiteLink"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('websiteLink')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Website Link is required
            </p>
          </div>
          <!-- Facebook Link -->
          <div class="flex-auto">
            <label for="facebookLink" class="text-sm font-light text-[#777777]">
              Facebook Link
            </label>
            <input
              type="text"
              name="facebookLink"
              id="facebookLink"
              autocomplete="facebookLink"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('facebookLink')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.otherInfo.facebookLink"
              @change="onChange($event)"
            />
            <p
              v-if="errorFields.includes('websiteLink')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Facebook Link is required
            </p>
          </div>
        </div>
        <div class="flex w-6/12 gap-x-4 mt-4">
          <button
            @click.prevent="prev()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] border-gradient border-gradient-custom mt-5 p-1 font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Step 2
          </button>

          <button
            @click.prevent="next()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] mt-5 py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proceed to Step 4
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
