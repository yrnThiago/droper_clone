<script setup lang="ts">
  import { onMounted, ref, watch } from "vue";
  import ProductCalendario from "@/components/ProductCalendario.vue";
  import ProductMarket from "@/components/ProductMarket.vue";
  import { useRoute } from "vue-router";
import ApiService from "@/services/ApiService";
import { DropItem, Product } from "@/Interfaces/interfaces";
import ProductSearch from "./Cards/ProductSearch.vue";

  const route = useRoute();
  const productName = ref(route.params.productName.toString());

  const apiService = new ApiService();
  const apiEndpoint = 'public/search/';

  const temMaisDrops = ref(false);
  const dropsFiltrados = ref([] as DropItem[]);
  const dropsPage = ref(0);

  const filteredProducts = ref([] as Product[]);
  const temMaisProdutos = ref(false);
  const temProdutos = ref(false);

  const payloadBase = {
    "termo": productName.value,
    "page": dropsPage.value,
  };

  const searchDrops = async () => {
    const searchResults = (await apiService.post(`${apiEndpoint}`, payloadBase)).data;

    dropsFiltrados.value.push(...searchResults.drops);
    temMaisDrops.value = searchResults.temMaisDrops;

    filteredProducts.value.push(...searchResults.produtos);
    temMaisProdutos.value = searchResults.temMaisProdutos;
    temProdutos.value = searchResults.temProdutos;
  }
  onMounted(async () => await searchDrops());

  const searchForMoreDrops = async () => {
    payloadBase.page = dropsPage.value += 1;
    await searchDrops();
  }

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

  <VRow v-if="temMaisDrops" no-gutters justify="center" class="mt-4">
    <VBtn color="background-black" @click="searchForMoreDrops()">
      <span class="text-uppercase text-button">
        ver mais
      </span>
    </VBtn>
  </VRow>

  <VRow v-if="temProdutos" class="mt-4" no-gutters justify="start">
    <ProductSearch
      v-for="pr in filteredProducts" :key="pr.id"
      :productInfo="pr"
    />
  </VRow>
</template>
