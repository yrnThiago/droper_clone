<script setup>
  import {ref} from "vue";
  import {slider} from "@/api/data.json";
  import {useRouter} from "vue-router";

  const router = useRouter();
</script>


<template>
  <!-- start carousel desktop -->
  <VCarousel class="d-none d-md-block" height="880px" hide-delimiters cycle interval="5000">
    <VCarouselItem
      v-for="image in slider.slider"
      :key="image.id"
      :src="image.src"
      :alt="image.name"
      @click="router.push(`${image.url}`)"
      cover
    ></VCarouselItem>
  </VCarousel>
  <!-- end carousel desktop -->

  <!-- start carousel mobile -->
  <VCarousel class="d-block d-md-none" height="400"  hide-delimiters cycle interval="3500">
    <VCarouselItem
      v-for="image in slider.slider"
      :key="image.id"
      :src="image.srcMobile"
      :alt="image.name"
      @click="router.push(`${image.url}`)"
      cover
    ></VCarouselItem>
  </VCarousel>
  <!-- end carousel mobile -->

</template>

<style>

</style>
