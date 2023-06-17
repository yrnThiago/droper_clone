<script setup lang="ts">
  import {ref} from "vue";
  import {drops} from "@/api/drops.json";

  const searchValue = ref("");
  const dropsFiltrados = ref([]);

  const limparBarraDePesquisa = () => {
    searchValue.value = "";
  };

  const buscarDrops = () => {
    return drops.filter(drop => drop.titulo.includes(searchValue.value))
  };

</script>

<template>
  <VContainer style="max-width: 1400px !important;">
    <VRow no-gutters>

      <VCol cols="11">
        <VTextField
          :loading="loading"
          density="compact"
          variant="solo-filled"
          label="Drops, produtos ou marcas"
          v-model="searchValue"
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
          rounded="xl"
          @keyup.enter="buscarDrops"
        ></VTextField>
      </VCol>

      <VCol v-if="searchValue" cols="1" align-self="center">
        <VIcon class="ma-2" icon="mdi-close" @click="limparBarraDePesquisa"></VIcon>
        <VIcon class="ma-2" icon="mdi-filter-variant"></VIcon>
      </VCol>

      <VCol v-else cols="1" align-self="center">
        <VBtn density="compact" ripple variant="text">FILTRAR</VBtn>
      </VCol>

      <VRow v-if="dropsFiltrados" no-gutters justify="start">
        <VCol cols="6" sm="3" md="3" v-for="drop in dropsFiltrados" :key="drop.id">
          <ProductCalendario
          :id="drop.id"
          :titulo="drop.titulo"
          :icone="drop.icone"
          :query="drop.query"
          :dataLancamentoDia="drop.dataLancamentoDia"
          :dataLancamentoMes="drop.dataLancamentoMes"
        />
        </VCol>
      </VRow>

      <VRow no-gutters v-else>
        <h1>Teste</h1>
      </VRow>

    </VRow>
  </VContainer>
</template>
