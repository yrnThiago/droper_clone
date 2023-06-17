<script lang="ts" setup>
  import { ref } from "vue";

  const showSubMenu = ref(false);

  const menuItems = ref([
  { title: 'Sneakers' },
  { title: 'Streetwear Nacional' },
  { title: 'Streetwear Inter.' },
  { title: 'Eletrônicos' },
  { title: 'Colecionáveis'}
  ])
</script>

<template>
  <v-menu
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        MARCAS
      </v-btn>
    </template>

    <v-list min-width="10%">
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        append-icon="mdi-menu-right"
        @click="showSubMenu= !showSubMenu"
      >
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
