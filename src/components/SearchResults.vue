<script setup lang="ts">
  import { onMounted, ref, watch } from "vue";
  import ProductCalendario from "@/components/ProductCalendario.vue";
  import { useRoute } from "vue-router";
import ApiService from "@/services/ApiService";
import { DropItem } from "@/Interfaces/interfaces";

  const route = useRoute();
  const productName = ref(route.params.productName.toString());

  const apiService = new ApiService();
  const apiEndpoint = 'public/search/';

  const payload = {
    "termo": productName.value
  };
  const dropsFiltrados = ref([] as DropItem[])

  const searchDrops = async () => {
    dropsFiltrados.value = (await apiService.post(`${apiEndpoint}`, payload)).data.drops;
  }

  onMounted(async () => await searchDrops());

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
