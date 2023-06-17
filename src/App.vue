<template>
  <v-app>
    <LoadingTeste v-if="isLoading" />
    <v-main v-if="!isLoading">
      <NavBar/>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <BottomNav/>
    </v-main>
  </v-app>
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import BottomNav from './components/BottomNav.vue';
  import LoadingTeste from "@/components/LoadingTeste.vue";
  import {onMounted, ref} from "vue";

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 999)

  });

</script>

<style>
</style>
