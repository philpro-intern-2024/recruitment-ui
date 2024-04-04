<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { ref, reactive, watch } from "vue";
import { type SkillsProfExp } from "../../../stores/models/UserModel";

const { registerData } = defineProps(["registerData"]);
const emit = defineEmits(["switch"]);
const tempSkill = ref("");
const errorFields = ref([] as string[]);

const prev = () => {
  emit("switch", "Education");
};

const next = () => {
  const error = checkEmptyFields();

  if (error.length === 0) emit("switch", "SalesExp");
  else errorFields.value = error;
};

const addSkill = ($event: any) => {
  if ($event.key === "," && tempSkill) {
    if (!registerData.skillsProfExp.specialSkills.includes(tempSkill.value)) {
      registerData.skillsProfExp.specialSkills.push(tempSkill.value);

      const error = checkEmptyFields();

      if (error) errorFields.value = error;
    }
    tempSkill.value = "";
  }
};

const deleteSkill = (skill: string) => {
  registerData.skillsProfExp.specialSkills =
    registerData.skillsProfExp.specialSkills.filter((item: any) => {
      return skill !== item;
    });

  const error = checkEmptyFields();

  if (error) errorFields.value = error;
};

const onChange = (e: any) => {
  registerData.skillsProfExp[e.target.name] = e.target.value;

  const error = checkEmptyFields();

  if (error) errorFields.value = error;
};

const checkEmptyFields = () => {
  let arr = [];

  for (const [key, value] of Object.entries(
    registerData.skillsProfExp as SkillsProfExp
  ))
    if (value === "" || value.length === 0) arr.push(key);

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
      <Stepper step="5" />
      <h1
        class="mt-8 mb-3 py-2 font-bold text-xl bg-[#FFBC3A] max-w-[30em] text-center px-4"
      >
        SPECIAL SKILLS AND PROFESSIONAL EXPERIENCE
      </h1>
      <form class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full justify-center items-center gap-3">
          <!-- Special Skills -->
          <div class="w-full">
            <label
              for="specialSkills"
              class="text-sm font-light text-[#777777]"
            >
              Special Skills (Press ALT + Comma (",") to add)
            </label>
            <input
              type="text"
              name="specialSkills"
              id="specialSkills"
              autocomplete="specialSkills"
              required
              @keyup.alt="addSkill"
              v-model="tempSkill"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('specialSkills')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
            />
            <div
              v-for="skill in registerData.skillsProfExp.specialSkills"
              :key="skill"
              class="relative inline-block bg-white border border-1 border-blue-700 rounded-[12px] cursor-pointer py-2 px-5 mr-2 mt-3 font-semibold"
            >
              <span>{{ skill }}</span>
              <v-icon
                @click="deleteSkill(skill)"
                name="bi-x-circle-fill"
                class="absolute -top-2 -right-2 bg-white"
                fill="#ff686b"
                scale="1"
              />
            </div>
            <p
              v-if="errorFields.includes('specialSkills')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Special Skills are required
            </p>
          </div>

          <!-- Work Experience -->
          <div class="w-full">
            <label
              for="workExperience"
              class="text-sm font-light text-[#777777]"
            >
              Work Experience
            </label>
            <textarea
              rows="3"
              name="workExperience"
              id="workExperience"
              autocomplete="workExperience"
              class="mt-1 w-full block py-3 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :value="registerData.skillsProfExp.workExperience"
              :class="
                errorFields.includes('workExperience')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              @change="onChange($event)"
            ></textarea>
            <p
              v-if="errorFields.includes('workExperience')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Work Experience is required
            </p>
          </div>
          <!-- About Yourself -->
          <div class="w-full">
            <label for="about" class="text-sm font-light text-[#777777]">
              Tell Us About Yourself
            </label>
            <textarea
              rows="3"
              name="about"
              id="about"
              autocomplete="about"
              class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
              :class="
                errorFields.includes('about')
                  ? 'border border-red-500'
                  : 'border border-gray-300'
              "
              :value="registerData.skillsProfExp.about"
              @change="onChange($event)"
            ></textarea>
            <p
              v-if="errorFields.includes('about')"
              class="text-xs text-red-500 mt-1 font-thin"
            >
              Tell Us About Yourself is required
            </p>
          </div>
        </div>
        <div class="flex w-6/12 gap-x-4 mt-4">
          <button
            @click.prevent="prev()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] border-gradient border-gradient-custom mt-5 p-1 font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Step 5
          </button>

          <button
            @click.prevent="next()"
            class="w-full hover:shadow-[4px_4px_4px_0px_#00000024] bg-gradient-to-r from-[#131C39] to-[#367CFF] mt-5 py-3 rounded-[16px] font-bold text-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proceed to Step 7
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
