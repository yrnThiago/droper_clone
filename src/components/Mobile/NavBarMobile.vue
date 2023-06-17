<script setup>
  import {ref} from "vue";
  import SearchBar from "@/components/SearchBar.vue";
  import Menu from "@/components/Menu.vue";

  const searchText = ref("Drops, produtos ou marcas");

</script>

<template>
  <v-app-bar flat app color="black" height="100">
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-text-field
        v-model.trim="searchText"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        class="search-bar mr-2"
        density="compact"
        hide-details
        rounded
        :placeholder="searchText"
        @click="redirectTo('/')"
        disabled
      />
    </v-row>
    <v-row align="center" justify="center" class="mt-5">
      <Menu/>
      <v-btn @click="redirectTo(`/calendario`)">CALENDÁRIO</v-btn>
      <v-btn @click="redirectTo(`/feed`)">FEED</v-btn>
    </v-row>
  </v-container>
</v-app-bar>
</template>
