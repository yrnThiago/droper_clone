<script setup>
  import { ref } from "vue"
  const maxWidth = ref("280px");
  const searchText = ref("Drops, produtos ou marcas");
  const arrowIcon = ref("");

  const expandSearchBar = () => {
    maxWidth.value = maxWidth.value === "280px" ? "525px" : "280px";
    searchText.value = searchText.value === "Drops, produtos ou marcas" ? "" : "Drops, produtos ou marcas";
    arrowIcon.value = arrowIcon.value === "mdi-arrow-right" ? "" : "mdi-arrow-right"
  };

</script>

<template>
  <v-text-field
    v-model.trim="searchText"
    prepend-inner-icon="mdi-magnify"
    variant="solo"
    class="search-bar"
    density="compact"
    hide-details
    rounded
    :placeholder="searchText"
    :append-inner-icon ="arrowIcon"
    @focus="expandSearchBar"
    @blur="expandSearchBar"
  />
</template>

<style lang="sass">
  .v-input.search-bar
    transition: max-width 1.0s
    transition-timing-function: ease
    right: 40px
    bottom: 12px
    position: absolute !important
    z-index: 900 !important
    height: 40px
    min-width: 280px
    .v-field--active input
      opacity: 0.30
</style>
