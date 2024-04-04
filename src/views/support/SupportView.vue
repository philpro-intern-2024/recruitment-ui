<script>
import { ref } from 'vue';
import Header from "../../components/navigations/Header.vue"
import SupportList from "../../components/support/SupportList.vue"
import sampledata from "../../components/support/SampleData.json"

export default {
    name: "support",
    components: {
        Header,
        SupportList,
    },
    data() {
        return {
            data: sampledata,
            all: sampledata
        }
    },
    methods: {
        handleSearch(value) {
            const search = value.toUpperCase()

            const getSearch = this.all.filter((item) =>
                item.ticket_number.toUpperCase().includes(search) ||
                item.page.toUpperCase().includes(search)
            )

            this.data = getSearch
        },
        handleSort(select) {
            const sort = select.toUpperCase()

            if (select !== "All") {
                const getSort = sampledata.filter((item) =>
                    item.page.toUpperCase() === sort
                )
                this.data = getSort
            } else {
                this.data = sampledata
            }
        }
    }
}
</script>

<template>
    <div>
        <Header />

        <div class="relative w-full h-[250px] sm:px-[20px] lg:px-[80px] flex">
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/banner.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div class="z-[0] my-auto">
                <h1 class="uppercase font-bold text-[38px] text-white">GET SUPPORT</h1>
                <div class="border-[1px] w-[80px] border-[#FFBC3A]"></div>
            </div>
        </div>

        <div class="flex flex-col sm:px-[20px] lg:px-[80px] my-[40px]">
            <SupportList :data="data" :all="all" @sort="handleSort" @search="handleSearch" />
        </div>
    </div>
</template>

<style scoped></style>