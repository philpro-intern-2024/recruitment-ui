<script>
// import { ref } from 'vue';
import ComposeModal from './ComposeModal.vue'
import ViewSupportModal from "./ViewSupportModal.vue"

export default {
    props: ['data', 'all', 'sort', 'search'],
    components: {
        ComposeModal,
        ViewSupportModal
    },
    data() {
        return {
            tableHeader: [
                "Ticket Number",
                "Page",
                "Date Submitted",
                "Concerns",
                "Actions"
            ],
            sortDropdown: false,
            viewSupportModal: false,
            viewItem: {},
        }
    },
    methods: {
        toggleDropdown() {
            this.sortDropdown = !this.sortDropdown
        },
        toggleSupportModal() {
            this.viewSupportModal = !this.viewSupportModal
        },
        handleOnView(item) {
            this.viewItem = item
            this.viewSupportModal = !this.viewSupportModal
        },
        handleSearch(e) {
            const input = e.target.value
            this.$emit('search', input.toUpperCase())
        },
        handleSort(select) {
            this.$emit('sort', select)
        }
    }
}
</script>

<template>
    <div id="support-list" class="flex flex-col my-[40px]">
        <!-- SORT AND SEARCH -->
        <div class="flex justify-between gap-5 w-full">
            <div class="relative my-auto">
                <button id="dropdownDefaultButton" @click="toggleDropdown"
                    class="text-white font-bold bg-[#131C39] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    type="button">SORT BY
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown" v-if="sortDropdown"
                    class="z-[0] absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 px-2">
                    <ul class="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                        <li class="w-full">
                            <button @click="() => handleSort('All')"
                                class="block px-4 py-2 hover:bg-gray-100 font-medium w-full text-left">All</button>
                        </li>
                        <div class="border-[1px] my-2"></div>
                        <li v-for="items in all">
                            <button @click="handleSort(items.page)"
                                class="block px-4 py-2 hover:bg-gray-100 font-medium w-full text-left">
                                {{ items.page }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex gap-5 w-[50%]">
                <!-- SEARCH -->
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" @change="handleSearch"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                        placeholder="Search..." required />
                    <button type="submit"
                        class="text-white absolute end-2.5 bottom-2.5 bg-[#131C39] font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>

                <!-- COMPOSE CONCERN -->
                <ComposeModal />
            </div>
        </div>

        <!-- TABLE -->
        <div class="w-full mt-[30px] shadow-md rounded-lg h-[600px] overflow-x-auto">
            <table class="w-full table-auto divide-y divide-gray-200">
                <!-- TABLE HEAD -->
                <thead>
                    <tr class="rounded-t-md bg-[#131C39]">
                        <th v-for="items in tableHeader" scope="col"
                            class="px-6 py-3 text-center text-xs font-bold  text-white uppercase">
                            {{ items }}
                        </th>
                    </tr>
                </thead>

                <!-- TABLE BODY -->
                <tbody>
                    <tr v-for="items in data" class="odd:bg-slate-100 text-center">
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.ticket_number }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.page }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.date_submitted }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.concern }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                <button class="w-[20px] h-[20px]" @click="handleOnView(items)">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
                                        viewBox="0 0 224.549 224.549" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M223.476,108.41c-1.779-2.96-44.35-72.503-111.202-72.503S2.851,105.45,1.072,108.41c-1.43,2.378-1.43,5.351,0,7.729   c1.779,2.96,44.35,72.503,111.202,72.503s109.423-69.543,111.202-72.503C224.906,113.761,224.906,110.788,223.476,108.41z    M112.274,173.642c-49.925,0-86.176-47.359-95.808-61.374c9.614-14.032,45.761-61.36,95.808-61.36   c49.925,0,86.176,47.359,95.808,61.374C198.468,126.313,162.321,173.642,112.274,173.642z" />
                                            <path
                                                d="M112.274,61.731c-27.869,0-50.542,22.674-50.542,50.543c0,27.868,22.673,50.54,50.542,50.54   c27.868,0,50.541-22.672,50.541-50.54C162.815,84.405,140.143,61.731,112.274,61.731z M112.274,147.814   c-19.598,0-35.542-15.943-35.542-35.54c0-19.599,15.944-35.543,35.542-35.543s35.541,15.944,35.541,35.543   C147.815,131.871,131.872,147.814,112.274,147.814z" />
                                            <path
                                                d="M112.274,92.91c-10.702,0-19.372,8.669-19.372,19.364c0,10.694,8.67,19.363,19.372,19.363   c10.703,0,19.373-8.669,19.373-19.363C131.647,101.579,122.977,92.91,112.274,92.91z" />
                                        </g>
                                    </svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="w-full gap-5 flex sm:flex-col md:flex-row items-center justify-between mt-[20px]">
            <div>
                <p class="text-[12px] font-medium">Showing 1 Out of 10 pages</p>
            </div>

            <div class="flex text-[12px] font-medium">
                <button
                    class="border-[1px] rounded-l-md py-[5px] px-[30px] uppercase hover:bg-[#FFBC3A] hover:text-black">Previous</button>
                <button class="border-[1px] px-[10px] uppercase hover:bg-[#FFBC3A] bg-[#131C39] text-white">1</button>
                <button class="border-[1px] px-[10px] uppercase hover:bg-[#FFBC3A]">2</button>
                <button class="border-[1px] px-[10px] uppercase hover:bg-[#FFBC3A]">3</button>
                <button
                    class="border-[1px] rounded-r-md py-[5px] px-[30px] uppercase hover:bg-[#FFBC3A] hover:text-black">Next</button>
            </div>
        </div>
        <ViewSupportModal :item="viewItem" :view="viewSupportModal" @close="toggleSupportModal" />
    </div>
</template>

<style scoped></style>