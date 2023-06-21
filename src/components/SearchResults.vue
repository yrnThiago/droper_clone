<script setup lang="ts">
  import { ref } from "vue";
  import ProductCalendario from "@/components/ProductCalendario.vue";
  import {drops} from "@/api/drops.json";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const productName = route.params.productName;

  const buscarDrops = (value: string) => {
    return drops.filter(drop => drop.titulo.includes(value));
  };
  const dropsFiltrados = buscarDrops(productName);

</script>

<template>
  <VRow v-if="dropsFiltrados.length > 0" class="mt-12" no-gutters justify="start">
    <ProductCalendario
      v-for="drop in dropsFiltrados" :key="drop.id"
      :id="drop.id"
      :titulo="drop.titulo"
      :icone="drop.icone"
      :query="drop.query"
      :dataLancamentoDia="drop.dataLancamentoDia"
      :dataLancamentoMes="drop.dataLancamentoMes"
    />
  </VRow>

  <VRow v-else no-gutters justify="center" class="mt-12">
    <h2>Não encontramos nenhum item</h2>
  </VRow>
</template>
