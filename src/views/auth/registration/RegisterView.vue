<script setup lang="ts">
import RegisterLayout from "@/layouts/RegisterLayout.vue";
import SelectType from "@/components/auth/registration/SelectType.vue";
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { type LoginData } from "@/stores/models/UserModel";
import { useRouter } from "vue-router";
import PersonalInfo from "@/components/auth/registration/PersonalInfo.vue";
import Credentials from "@/components/auth/registration/Credentials.vue";
import OtherInfo from "@/components/auth/registration/OtherInfo.vue";
import Address from "@/components/auth/registration/Address.vue";

// const showPassword = ref(false);
// const loginData = reactive<LoginData>({
//   username: "",
//   password: "",
// });
// const errorMessage = ref<string>("");
// const authStore = useAuthStore();
// const router = useRouter();

// const toggleShow = () => {
//   showPassword.value = !showPassword.value;
// };

// const submit = async () => {
//   try {
//     const result = await authStore.login(loginData);

//     if (result.status == 200) {
//       router.replace({ name: "dashboard" });
//     }
//   } catch (error: Error | any) {
//     console.log("Error", error.message);
//     errorMessage.value = error.message;
//   }
// };

const stepTitle = ref("SelectType");

const next = (value: string) => {
  stepTitle.value = value;
};
</script>

<template>
  <RegisterLayout
    title="Registration Form"
    subText="Complete the steps below!"
    :stepTitle="stepTitle"
  >
    <!-- <div v-if="errorMessage">gege</div> -->
    <SelectType v-if="stepTitle === 'SelectType'" @switch="next" />
    <PersonalInfo v-if="stepTitle === 'PersonalInfo'" @switch="next" />
    <Credentials v-if="stepTitle === 'Credentials'" @switch="next" />
    <OtherInfo v-if="stepTitle === 'OtherInfo'" @switch="next" />
    <Address v-if="stepTitle === 'Address'" @switch="next" />
  </RegisterLayout>
</template>

<style scoped></style>
