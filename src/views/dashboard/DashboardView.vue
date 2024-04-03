<script lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import Header from "@/components/navigations/Header.vue";
import card1 from "@/assets/cards/1.jpg"
import card2 from "@/assets/cards/2.jpg"
import card3 from "@/assets/cards/3.jpg"
import card4 from "@/assets/cards/4.jpg"

export default {
  components: {
    Header,
  },
  setup() {
    const images = ref([
      "/banner/banner1.png",
      "/banner/banner2.png",
      "/banner/banner3.png",
    ]);
    const currentIndex = ref(0);
    let timer = null;

    const goToImage = (index) => {
      currentIndex.value = index;
    };

    const startAutoSlide = () => {
      timer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
      }, 3000);
    };

    const stopAutoSlide = () => {
      clearInterval(timer);
    };

    onMounted(() => {
      startAutoSlide();
    });

    onBeforeUnmount(() => {
      stopAutoSlide();
    });

    const cards = ref([
      {
        title: "Card 1",
        description: "Description for Card 1",
        buttonText: "Read More",
        image: card1,
      },
      {
        title: "Card 2",
        description: "Description for Card 2",
        buttonText: "Read More",
        image: card2,
      },
      {
        title: "Card 3",
        description: "Description for Card 3",
        buttonText: "Read More",
        image: card3,
      },
      {
        title: "Card 4",
        description: "Description for Card 3",
        buttonText: "Read More",
        image: card4,
      },
    ]);

    const name = ref("EL");
    return {
      images,
      currentIndex,
      goToImage,
      cards,
      name,
    };
  },
};
</script>


<template>
  <!--Parent Div-->
  <div class="h-[1353px] ">
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
    <div class="h-[52%]  flex justify-center ">
      <div class=" w-[83%]">
        <div class="py-12 px-6">
          <h1 class="font-bold text-[40px]">Glad you're here, {{name}} </h1>
          <p class="text-[20px]">Today is Monday, March 12, 2024</p>
        </div>
        <div class=" h-[72%] flex justify-evenly">
          <!--Cards here-->
          <div v-for="(card, index) in cards" :key="index" class="w-full flex justify-center">
            <div class="bg-white rounded-lg shadow-lg p-4 h-full w-[90%]">
                <img :src="card.image" class="w-full h-48 object-cover" />
              <h2 class="text-xl font-bold mt-4">{{ card.title }}</h2>
              <p class="mt-2">{{ card.description }}</p>
              <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">{{ card.buttonText }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>