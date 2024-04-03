<script setup lang="ts">

</script>

<template>
    <!-- FOUR CARDS -->
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="border-[2px] rounded-xl p-5">
            <h6 class="uppercase text-[24px] font-bold">Carl Louie Dalupe</h6>
            <p>Candidate</p>

            <div class="border-[1px] border-[#B7B7B7] my-5"></div>

            <!-- LINKS -->
            <div class="flex flex-col rounded-[5px] bg-[#04091C] p-3 bg-opacity-[73%] gap-2 w-full">
                <p class="text-white font-medium text-[16px]">LINKS</p>

                <div class="bg-[#E2E2E2] bg-opacity-[11%] flex items-center justify-between rounded-lg p-2 w-full">
                    <p class="text-[12px] text-white truncate w-[70%]">https://philproperties.com/viennieve</p>
                    <button
                        class="bg-[#131C39] uppercase font-bold text-white p-2 text-[10px] rounded-full">copy</button>
                </div>
                <div class="bg-[#E2E2E2] bg-opacity-[11%] flex items-center justify-between rounded-lg p-2 w-full">
                    <p class="text-[12px] text-white truncate w-[70%]">Contact Link</p>
                    <button
                        class="bg-[#131C39] uppercase font-bold text-white p-2 text-[10px] rounded-full">copy</button>
                </div>
            </div>
        </div>

        <div class="border-[2px] rounded-xl p-5 flex flex-col justify-between text-center">
            <div class="flex flex-col">
                <p class="text-black font-bold">Total Number of Referrals</p>
                <h6 class="uppercase text-[56px] font-bold">1,234</h6>
            </div>

            <div class="w-full flex justify-end items-end">
                <img class="md:w-[50%] lg:w-[70%] sm:hidden md:block" src="../../assets/imgs/group.png" alt="">
            </div>
        </div>

        <div class="border-[2px] rounded-xl p-5 flex flex-col justify-between text-center">
            <div class="flex flex-col">
                <p class="text-black font-bold">Active Referrals</p>
                <h6 class="uppercase text-[56px] font-bold">1,234</h6>
            </div>

            <div class="w-full flex justify-end items-end">
                <img class="md:w-[50%] lg:w-[70%] sm:hidden md:block" src="../../assets/imgs/group.png" alt="">
            </div>
        </div>

        <div class="border-[2px] rounded-xl p-5 flex flex-col justify-between text-center">
            <div class="flex flex-col">
                <p class="text-black font-bold">Inactive Referrals</p>
                <h6 class="uppercase text-[56px] font-bold">1,234</h6>
            </div>

            <div class="w-full flex justify-end items-end">
                <img class="md:w-[50%] lg:w-[70%] sm:hidden md:block" src="../../assets/imgs/group.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>