<script setup lang="ts">
import { ref } from "vue";
import NavbarClient from "../../components/navigations/NavbarClient.vue";
import Sidebar from "../../components/navigations/Sidebar.vue";
import FooterReg from "../../components/footer/FooterRegistration.vue";

const showSidebar = ref(false);

const closeSidebar = () => {
  showSidebar.value = false;
};
</script>

<template>
  <main>
    <div>
      <NavbarClient @click-burger="showSidebar = true" />
      <Sidebar :show="showSidebar" @close-sidebar="closeSidebar" />
      <h1>DITO ANG PROFILE OKAY?</h1>
      <FooterReg />
    </div>
  </main>
</template>
