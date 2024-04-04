<script>
export default {
    props: ['item', 'view', 'close'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}

</script>

<template>
    <!-- BACKDROP -->
    <div v-if="view" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full">
        <div @click.self="closeModal"
            class="bg-black bg-opacity-[30%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full z-0">
        </div>
        <!-- MODAL -->
        <div class="relative w-[530px] h-[600px] bg-white mx-auto mt-[30px] rounded-md z-[1]">
            <!-- MODAL HEADER -->
            <div class="bg-[#131C39] h-[80px] rounded-t-md px-[20px] flex items-center justify-between">
                <h6 class="text-white font-bold text-[20px]">VIEW TICKET</h6>
                <button @click="closeModal"
                    class="bg-white px-[10px] py-[3px] flex items-center rounded-full font-bold">X</button>
            </div>

            <!-- MODAL CONTENT -->
            <div class="p-[20px] overflow-y-auto h-[500px]">
                <div class="w-full h-full flex flex-col justify-between">
                    <div class="items-start">
                        <h1 class="text-[16px] leading-3 uppercase font-bold">Ticket Number:</h1>
                        <h1 class="text-[22px] uppercase font-bold">{{ item.ticket_number }}</h1>

                        <div
                            class="grid grid-cols-2 w-full mt-[20px] rounded-[10px] px-5 py-2 border-[1px] border-[#777777]">
                            <div class="flex flex-col text-[14px]">
                                <span><b>Page:</b> {{ item.page }}</span>
                                <span><b>Concerns/Comments:</b> {{ item.concern }}</span>
                                <span><b>Additional Comments:</b> {{ item.additional }}</span>
                            </div>
                            <div class="relative">
                                <p class="h-full w-full rounded-md absolute bg-black bg-opacity-[50%] text-white text-center pt-[70px]">3+ more</p>
                                <img class="rounded-md" :src="item.files[0].src" alt="">
                            </div>
                        </div>

                        <div
                            class="grid grid-cols-1 w-full mt-[20px] rounded-[10px] px-5 py-2 border-[1px] border-[#777777]">
                            <div class="flex flex-col text-[14px] w-full">
                                <span><b>Evaluated By:</b> {{ item.evaluated_by }}</span>
                                <span><b>Evaluated Date:</b> {{ item.evaluated_date }}</span>
                                <span><b>Feedback:</b> {{ item.feedback }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center items-center gap-5">
                        <button
                            class="rounded-md py-[5px] px-[30px] text-white font-medium text-[18px] bg-[#186A16]">SAVE</button>
                        <button @click="closeModal"
                            class="rounded-md py-[5px] px-[30px] text-white font-medium text-[18px] bg-[#C60909]">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>