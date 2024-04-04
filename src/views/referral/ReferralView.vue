<script>
import { ref } from "vue";
import Header from "../../components/navigations/Header.vue"
// import Sidebar from "../../components/navigations/Sidebar.vue";
import ReferralCards from "../../components/referral/ReferralCards.vue"
import ReferralList from "../../components/referral/ReferralList.vue"

export default {
    name: "referral",
    components: {
        Header,
        // NavbarClient,
        // Sidebar,
        ReferralCards,
        ReferralList
    },
    // setup() {
    //     const showSidebar = ref(false);

    //     const closeSidebar = () => {
    //         showSidebar.value = false;
    //     };

    //     return {
    //         showSidebar,
    //         closeSidebar,
    //     };
    // },
};
</script>

<template>
    <div>
        <Header />
        <!-- <NavbarClient @click-burger="showSidebar = true" />
        <Sidebar :show="showSidebar" @close-sidebar="closeSidebar" /> -->

        <!-- BANNER -->
        <div class="relative w-full h-[250px] sm:px-[20px] lg:px-[80px] flex">
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/banner.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div class="z-[1] my-auto">
                <h1 class="uppercase font-bold text-[38px] text-white">referrals </h1>
                <div class="border-[1px] w-[80px] border-[#FFBC3A]"></div>
            </div>
        </div>

        <div class="flex flex-col sm:px-[20px] lg:px-[80px] my-[40px]">
            <div class="mb-[30px]">
                <h1 class="uppercase font-bold text-[28px] text-black">Referral Information</h1>
                <div class="border-[1px] w-[80px] border-[#FFBC3A]"></div>
            </div>

            <ReferralCards />

            <ReferralList />
        </div>
    </div>
</template>