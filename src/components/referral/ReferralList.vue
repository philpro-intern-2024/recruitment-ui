<script>
import { ref } from 'vue';
import sampledata from "./SampleData.json"

export default {
    data() {
        return {
            tableHeader: [
                "Applicant ID",
                "Name",
                "Date Join",
                "Status",
            ],
            showDropdown: false,
            data: sampledata,
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        handleSort(select) {
            const sort = select.toUpperCase()

            if (select !== "All") {
                const getSort = sampledata.filter((item) =>
                    item.status.toUpperCase() === sort
                )
                this.data = getSort
            } else {
                this.data = sampledata
            }
        },
        handleSearch(e) {
            const search = e.target.value.toUpperCase()

            const getSearch = sampledata.filter((item) =>
                item.applicant_id.includes(search) ||
                item.name.toUpperCase().includes(search)
            )
            this.data = getSearch
        }
    }
}
</script>

<template>
    <div class="flex flex-col my-[40px]">
        <!-- SORT AND SEARCH -->
        <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 w-full">
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
                <div id="dropdown" v-if="showDropdown"
                    class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 px-2">
                    <ul class="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                        <li class="w-full">
                            <button @click="() => handleSort('All')"
                                class="block px-4 py-2 hover:bg-gray-100 font-medium w-full text-left">All</button>
                        </li>
                        <div class="border-[1px] my-2"></div>
                        <li>
                            <button @click="handleSort('Active')"
                                class="block px-4 py-2 hover:bg-gray-100 font-medium w-full text-left">Active
                                Referrals</button>
                        </li>
                        <li>
                            <button @click="handleSort('Inactive')"
                                class="block px-4 py-2 hover:bg-gray-100 font-medium w-full text-left">Inactive
                                Referrals</button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- SEARCH -->
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
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
                                {{ items.applicant_id }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.name }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.date_join }}
                            </span>
                        </td>
                        <td className="px-6 py-3">
                            <span className="text-center text-xs sm:text-sm text-black line-clamp-2 uppercase">
                                {{ items.status }}
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
    </div>
</template>

<style scoped></style>