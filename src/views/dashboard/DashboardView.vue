<script lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import Header from "@/components/navigations/Header.vue";
import { cards } from "./cardData";
import { useRouter } from "vue-router";

export default {
  components: {
    Header,
  },

  setup() {
    const router = useRouter();
    const goToPath = (path) => {
      router.push(path);
    };
    //images for banner
    const images = ref([
      "/banner/banner1.png",
      "/banner/banner2.png",
      "/banner/banner3.png",
    ]);

    //this is for the pagination of the banners
    const currentIndex = ref(0);
    let timer = null;
    const goToImage = (index) => {
      currentIndex.value = index;
    };

    // const startAutoSlide = () => {
    //   timer = setInterval(() => {
    //     currentIndex.value = (currentIndex.value + 1) % images.value.length;
    //   }, 3000);
    // };

    // const stopAutoSlide = () => {
    //   clearInterval(timer);
    // };

    // onMounted(() => {
    //   startAutoSlide();
    // });

    // onBeforeUnmount(() => {
    //   stopAutoSlide();
    // });

    //this is for the cards declared
    const cardsRef = ref(cards);

    //sample data
    const name = ref("EL");

    //this is for hovering the card
    const isHovered = ref(Array(cards.length).fill(false));

    const scaleImage = (index) => {
      isHovered.value[index] = true;
    };

    const resetImage = (index) => {
      isHovered.value[index] = false;
    };

    return {
      images,
      currentIndex,
      goToImage,
      cards,
      name,
      isHovered,
      scaleImage,
      resetImage,
      goToPath,
    };
  },
};
</script>


<template>
  <!--Parent Div-->
  <div class="h-[1353px]">
    <Header />
    <!--banner-->
    <div class="h-[416px] relative flex flex-row overflow-hidden">
      <transition name="">
        <img :src="images[currentIndex]" class="h-full" :key="currentIndex" />
      </transition>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="flex justify-center space-x-2">
          <button
            v-for="(image, index) in images"
            :key="index"
            @click="goToImage(index)"
            :class="{
              'bg-gray-500': index === currentIndex,
              'bg-gray-200': index !== currentIndex,
            }"
            class="w-4 h-4 rounded-full"
          ></button>
        </div>
      </div>
    </div>
    <!--cards and text main div-->
    <div class="h-[52%] flex justify-center">
      <div class="w-[83%]">
        <div class="py-12">
          <h1 class="font-bold text-[40px]">Glad you're here, {{ name }}</h1>
          <p class="text-[20px]">Today is Monday, March 12, 2024</p>
        </div>
        <div class="h-[72%] flex justify-center space-x-6">
          <!--Cards div-->
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-full flex justify-center overflow-hidden rounded-[1.5rem] position-relative"
          >
            <div
              class="rounded-[1.5rem] shadow-lg h-full w-full flex position-relative"
              @mouseover="scaleImage(index)"
              @mouseleave="resetImage(index)"
            >
              <div class="h-full relative">
                <!--Backdrop overlay here-->
                <div class="absolute z-10 inset-0 bg-black opacity-50"></div>
                <div
                  class="absolute z-10 inset-0 bg-gradient-to-b from-amber-400 via slate-[#131C39] to-[#000000] opacity-30"
                ></div>
                <!--Image-->
                <img
                  :src="card.image"
                  class="h-full object-cover transition-transform duration-300 transform scale-100"
                  :class="{ 'scale-110': isHovered[index] }"
                />
                <!--Title, Details, and Read more Button-->
                <div class="absolute z-10 inset-0 flex flex-col h-full">
                  <div class="px-7 h-[40%] flex items-end">
                    <h2 class="text-white text-[35px] font-bold mt-4">
                      {{ card.title }}
                    </h2>
                  </div>
                  <div class=" h-[30%] flex items-center px-7">
                    <p class="text-white">{{ card.description }}</p>
                  </div>
                  <div class="px-7 mt-8">
                    <router-link
                      :to="card.path"
                      class="text-black bg-amber-500 text-white py-2 px-4 rounded-lg"
                    >
                      Read More
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.scale-110 {
  transform: scale(1.5);
}
</style>
