<script setup>
  import LoadingTeste from "@/components/LoadingTeste.vue";
  import NavBar from '@/components/NavBar.vue';
  import Footer from "@/components/Footer.vue";
  import {onMounted, ref} from "vue";
  import { useRoute } from "vue-router";

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 999)

  });

</script>

<template>
  <VApp>
    <LoadingTeste v-if="isLoading" />
    <RouterView v-if="!isLoading" v-slot="{ Component }">
      <NavBar class="d-none d-sm-flex"/>
      <transition name="fade">
        <component :is="Component" />
      </transition>
      <Footer></Footer>
    </RouterView>
  </VApp>
</template>

