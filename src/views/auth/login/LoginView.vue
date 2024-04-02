<script setup lang="ts">
import LoginForgotLayout from "@/layouts/LoginForgotLayout.vue";
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { type LoginData } from "@/stores/models/UserModel";
import { useRouter } from "vue-router";

const showPassword = ref(false);
const loginData = reactive<LoginData>({
  username: "",
  password: "",
});
const errorMessage = ref<string>("");
const authStore = useAuthStore();
const router = useRouter();

const toggleShow = () => {
  showPassword.value = !showPassword.value;
};

const submit = async () => {
  try {
    const result = await authStore.login(loginData);

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
  <LoginForgotLayout title="Welcome Back!" subText="Please enter your details!">
    <div v-if="errorMessage">gege</div>
    <form class="w-5/12 my-5" @submit.prevent="submit">
      <div class="">
        <label for="username" class="text-lg font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autocomplete="username"
          required
          class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
          v-model="loginData.username"
        />
      </div>
      <div class="mt-5">
        <label for="password" class="text-lg font-medium text-gray-700">
          Password
        </label>
        <!-- <input type="password" /> -->
        <div class="relative">
          <input
            v-if="showPassword"
            type="text"
            class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            v-model="loginData.password"
          />
          <input
            v-else
            type="password"
            class="mt-1 w-full block py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#131C39] focus:border-[#131C39] sm:text-sm"
            v-model="loginData.password"
          />
          <button
            type="button"
            @click.prevent="toggleShow"
            class="absolute inset-y-0 right-3"
          >
            <v-icon
              v-if="!showPassword"
              name="bi-eye"
              class="icon"
              fill="black"
              scale="1.5"
            />
            <v-icon
              v-else
              name="bi-eye-slash"
              class="icon"
              fill="black"
              scale="1.5"
            />
          </button>
        </div>
      </div>
      <div class="mt-1 text-right">
        <RouterLink to="/">Forgot Password?</RouterLink>
      </div>
      <div class="mt-5 text-center">
        <button
          type="submit"
          class="py-3 w-5/12 rounded-[32px] bg-[#E8A115] font-bold"
        >
          Login
        </button>
      </div>
      <div class="mt-5 text-center">
        <p>
          Don’t have an account?
          <span class="font-bold"><RouterLink to="/">Sign Up</RouterLink></span>
        </p>
      </div>
    </form>
  </LoginForgotLayout>
</template>

<style scoped></style>
