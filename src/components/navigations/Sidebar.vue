<script setup lang="ts">
const { show } = defineProps(["show"]);
const emit = defineEmits(["close-sidebar"]);

const handleClose = () => {
  emit("close-sidebar");
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      @click="handleClose"
      class="fixed inset-0 bg-black opacity-50 z-10"
    ></div>
  </transition>
  <transition name="slide">
    <div
      v-if="show"
      class="fixed left-0 top-0 h-screen sm:w-full md:w-[400px] bg-[#131C39] text-[131C39] z-10 rounded-xl"
    >
      <div class="h-1/4 flex justify-center bg-white rounded-tr-xl">
        <img src="../../assets/imgs/logo.png" alt="" />
      </div>
      <button class="absolute top-4 right-4" @click="handleClose">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:scale-95"
          fill="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <ul
        class="px-5 flex flex-col pt-6 text-white font-bold text-[1.4rem] space-y-4 h-1/2"
      >
        <div>
          <li class="">
            <router-link
              to="/"
              @click="handleClose"
              :class="{ 'sidebar-link-active': $route.path === '/' }"
              exact
              class="flex flex-row px-4 py-2 items-center rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">DASHBOARD</p>
            </router-link>
          </li>
        </div>
        <div>
          <li class="">
            <router-link
              to="/accountstate"
              @click="handleClose"
              active-class="sidebar-link-active"
              class="flex flex-row items-center px-4 py-2 rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">ACCOUNT STATE</p>
            </router-link>
          </li>
        </div>
        <div>
          <li class="">
            <router-link
              to="/learn"
              @click="handleClose"
              active-class="sidebar-link-active"
              class="flex flex-row items-center px-4 py-2 rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">LEARN</p>
            </router-link>
          </li>
        </div>
        <div>
          <li class="">
            <router-link
              to="/project"
              @click="handleClose"
              active-class="sidebar-link-active"
              class="flex flex-row items-center px-4 py-2  rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">PROJECT</p>
            </router-link>
          </li>
        </div>
        <div>
          <li class="">
            <router-link
              to="/profile"
              active-class="sidebar-link-active"
              @click="handleClose"
              class="flex flex-row items-center px-4 py-2  rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">PROFILE</p>
            </router-link>
          </li>
        </div>
        <div>
          <li class="">
            <router-link
              to="/support"
              @click="handleClose"
              active-class="sidebar-link-active"
              class="flex flex-row items-center px-4 py-2  rounded-md hover:bg-gray-700 hover:transition hover:duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="3"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <p class="mx-4 text-[18px]">SUPPORT</p>
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2 ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sidebar-link-active {
  background-color: #29374a;
  font-weight: bold;
}
</style>
