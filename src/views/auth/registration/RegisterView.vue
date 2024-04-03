<script setup lang="ts">
import RegisterLayout from "@/layouts/RegisterLayout.vue";
import SelectType from "@/components/auth/registration/SelectType.vue";
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { type RegisterData } from "@/stores/models/UserModel";
import { useRouter } from "vue-router";
import PersonalInfo from "@/components/auth/registration/PersonalInfo.vue";
import Credentials from "@/components/auth/registration/Credentials.vue";
import OtherInfo from "@/components/auth/registration/OtherInfo.vue";
import Address from "@/components/auth/registration/Address.vue";
import Education from "@/components/auth/registration/Education.vue";
import SpecialSkills from "@/components/auth/registration/SpecialSkills.vue";
import SalesExp from "@/components/auth/registration/SalesExp.vue";

const registerData = reactive<RegisterData>({
  memberType: "",
  personalInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    prefix: "",
    upline: "",
    uplineContact: "",
  },
  credentials: {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  },
  otherInfo: {
    gender: "",
    maritalStatus: "",
    birthDate: "",
    citizenship: "",
    mobileNumber: "",
    phoneNumber: "",
    websiteLink: "",
    facebookLink: "",
  },
  address: {
    primary: {
      country: "",
      province: "",
      city: "",
      brgy: "",
      street: "",
      postalCode: 0,
    },
    secondary: {
      country: "",
      province: "",
      city: "",
      brgy: "",
      street: "",
      postalCode: 0,
    },
  },
  education: {
    institution: "",
    degree: "",
  },
  skillsProfExp: {
    specialSkills: [] as string[],
    workExperience: "",
    about: "",
  },
  salesExpRef: {
    jobDesc: "",
    salesTarget: 0,
    references: "",
  },
  terms: false,
});
const profile = ref(null);
const errorMessage = ref<string>("");
const authStore = useAuthStore();
const router = useRouter();
const stepTitle = ref("SelectType");

const next = (value: string) => {
  stepTitle.value = value;
};

const onFileChange = (file) => {
  profile.value = file;
}

const submit = async () => {
  try {
    const result = await authStore.register(registerData);

    if (result.status == 200) {
      router.replace({ name: "dashboard" });
    }
  } catch (error: Error | any) {
    console.log("Error", error.message);
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <RegisterLayout
    title="Registration Form"
    subText="Complete the steps below!"
    :stepTitle="stepTitle"
  >
    <div v-if="errorMessage">gege</div>
    <SelectType
      v-if="stepTitle === 'SelectType'"
      @switch="next"
      :registerData="registerData"
    />
    <PersonalInfo
      v-if="stepTitle === 'PersonalInfo'"
      @switch="next"
      :registerData="registerData"
    />
    <Credentials
      v-if="stepTitle === 'Credentials'"
      @switch="next"
      :registerData="registerData"
    />
    <OtherInfo
      v-if="stepTitle === 'OtherInfo'"
      @switch="next"
      :registerData="registerData"
    />
    <Address
      v-if="stepTitle === 'Address'"
      @switch="next"
      :registerData="registerData"
    />
    <Education
      v-if="stepTitle === 'Education'"
      @switch="next"
      :registerData="registerData"
    />
    <SpecialSkills
      v-if="stepTitle === 'SpecialSkills'"
      @switch="next"
      :registerData="registerData"
    />
    <SalesExp
      v-if="stepTitle === 'SalesExp'"
      @switch="next"
      :registerData="registerData"
      @submit="submit"
      @file="onFileChange"
    />
  </RegisterLayout>
</template>

<style scoped></style>
