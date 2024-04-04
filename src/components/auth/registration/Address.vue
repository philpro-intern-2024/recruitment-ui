<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { ref } from "vue";

const { registerData } = defineProps(["registerData"]);
const emit = defineEmits(["switch"]);
const isSame = ref(false);
const errorFields = ref([] as string[]);

const prev = () => {
  emit("switch", "OtherInfo");
};

const next = () => {
  const errorPresent = checkEmptyFields("present");
  const errorPermanent = checkEmptyFields("permanent");

  if (errorPresent.length === 0 && errorPermanent.length === 0)
    emit("switch", "Education");
  else errorFields.value = [...errorPresent, ...errorPermanent];
};

const onChange = (e: any, attr: string) => {
  registerData.address[attr][e.target.name] = e.target.value;

  if (isSame.value) {
    registerData.address.permanent[e.target.name] = e.target.value;
  }

  const error = checkEmptyFields(attr);

  if (error) errorFields.value = error;
};

const checkEmptyFields = (attr: string) => {
  let arr = [];

  for (const [key, value] of Object.entries(registerData.address[attr]))
    if (value === "") arr.push(attr + "-" + key);

  return arr;
};

const onCheck = () => {
  isSame.value = !isSame.value;

  if (isSame.value) {
    Object.assign(registerData.address.permanent, registerData.address.present);
  } else {
    Object.assign(registerData.address.permanent, {
      country: "",
      province: "",
      city: "",
      brgy: "",
      street: "",
      postalCode: "",
    });
  }
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
      <form action="">
        <h1
          class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
        >
          PRESENT ADDRESS
        </h1>
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-wrap w-full justify-center items-start gap-3">
            <!-- House No. / Lot No. / Street -->
            <div class="flex-auto">
              <label for="street" class="text-sm font-light text-[#777777]">
                House No. / Lot No. / Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                autocomplete="street"
                required
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-street')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.street"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-street')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present Street is required
              </p>
            </div>
            <!-- Barangay -->
            <div class="flex-auto">
              <label for="brgy" class="text-sm font-light text-[#777777]">
                Barangay
              </label>
              <input
                type="text"
                name="brgy"
                id="brgy"
                autocomplete="brgy"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-brgy')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.brgy"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present Barangay is required
              </p>
            </div>
            <!-- City / Municipality -->
            <div class="flex-auto">
              <label for="city" class="text-sm font-light text-[#777777]">
                City / Municipality
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="city"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-city')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.city"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present City is required
              </p>
            </div>
            <!-- Province -->
            <div class="flex-auto w-4/12">
              <label for="province" class="text-sm font-light text-[#777777]">
                Province
              </label>
              <input
                type="text"
                name="province"
                id="province"
                autocomplete="province"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-province')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.province"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present Province is required
              </p>
            </div>
            <!-- Country -->
            <div class="flex-auto">
              <label for="country" class="text-sm font-light text-[#777777]">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                autocomplete="country"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-country')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.country"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present Country is required
              </p>
            </div>
            <!-- Postal Code -->
            <div class="flex-auto">
              <label for="postalCode" class="text-sm font-light text-[#777777]">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                autocomplete="postalCode"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('present-postalCode')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.present.postalCode"
                @change="onChange($event, 'present')"
              />
              <p
                v-if="errorFields.includes('present-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Present Postal Code is required
              </p>
            </div>
          </div>
        </div>
        <h1
          class="mt-4 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[15em] text-center px-4"
        >
          PERMANENT ADDRESS
        </h1>
        <div class="flex justify-start items-center gap-x-3 my-3">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            autocomplete="terms"
            required
            :checked="isSame"
            @change="onCheck"
            class="block py-3 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
          />
          <label for="terms" class="text-sm font-light text-[#777777]">
            Same with Present Address
          </label>
        </div>

        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-wrap w-full justify-center items-center gap-3">
            <!-- House No. / Lot No. / Street -->
            <div class="flex-auto">
              <label for="street1" class="text-sm font-light text-[#777777]">
                House No. / Lot No. / Street
              </label>
              <input
                type="text"
                name="street"
                id="street1"
                autocomplete="street"
                required
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('permanent-street')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.street"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-street')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent Street is required
              </p>
            </div>
            <!-- Barangay -->
            <div class="flex-auto">
              <label for="brgy1" class="text-sm font-light text-[#777777]">
                Barangay
              </label>
              <input
                type="text"
                name="brgy"
                id="brgy1"
                autocomplete="brgy"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('permanent-brgy')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.brgy"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-brgy')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent Barangay is required
              </p>
            </div>
            <!-- City / Municipality -->
            <div class="flex-auto">
              <label for="city1" class="text-sm font-light text-[#777777]">
                City / Municipality
              </label>
              <input
                type="text"
                name="city"
                id="city1"
                autocomplete="city"
                class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('permanent-city')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.city"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-city')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent City is required
              </p>
            </div>
            <!-- Province -->
            <div class="flex-auto w-4/12">
              <label for="province1" class="text-sm font-light text-[#777777]">
                Province
              </label>
              <input
                type="text"
                name="province"
                id="province1"
                autocomplete="province"
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('permanent-province')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.province"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-province')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent Province is required
              </p>
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
                :class="
                  errorFields.includes('permanent-country')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.country"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-country')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent Country is required
              </p>
            </div>
            <!-- Postal Code -->
            <div class="flex-auto">
              <label for="postalCode" class="text-sm font-light text-[#777777]">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                autocomplete="postalCode"
                class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
                :class="
                  errorFields.includes('permanent-postalCode')
                    ? 'border border-red-500'
                    : 'border border-gray-300'
                "
                :value="registerData.address.permanent.postalCode"
                @change="onChange($event, 'permanent')"
              />
              <p
                v-if="errorFields.includes('permanent-postalCode')"
                class="text-xs text-red-500 mt-1 font-thin"
              >
                Permanent Postal Code is required
              </p>
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
