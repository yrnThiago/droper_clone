<script setup lang="ts">
  import {onBeforeMount, Ref, ref, watch} from "vue";
  import ProductCalendario from "@/components/ProductCalendario.vue";
  import CustomChips from "@/components/CustomComponents/CustomChipsGroup.vue"
  import BottomNav from '@/components/BottomNav.vue';

  import ApiService from "@/services/ApiService";
import { Dates, DropsResponseAPI } from "@/Interfaces/interfaces";

  export type SelectValue = {title: string, filter: string};

  const dates: Dates = {
    anos: [],
    meses: []
  };

  const dropsAPI = ref({} as DropsResponseAPI);

  const datasLoaded = ref(false);

  const apiService = new ApiService();
  const apiEndpoint = 'public/calendar/';


  const payload = ref({page: 0, amount: 100, filtro: "maisvistos", mes: 7, ano: 2023});

  onBeforeMount(async () => {
    Object.assign(dates, (await apiService.get(`${apiEndpoint}dates`)).data)
    Object.assign(dropsAPI.value, (await apiService.post(`${apiEndpoint}`, payload.value)).data)

    datasLoaded.value = true;
  })

  const searchDropsWithFilter = async () => {
    const filteredDrops = (await apiService.post(`${apiEndpoint}`, payload.value)).data;

    dropsAPI.value = filteredDrops;
  };

  const select = ref({ title: 'MAIS VISTOS', filter: 'maisvistos' })
  const items = ref([
    { title: 'MAIS RECENTES', filter: 'maisrecentes' },
    { title: 'MAIS ANTIGOS', filter: 'maisantigos' },
    { title: 'MAIS VISTOS', filter: 'maisvistos' },
    { title: 'MAIOR PREÇO', filter: 'retail' },
  ]);

  const showProgressLoading = ref(false);

  const dropFilterSelected = (value: SelectValue) => {
    select.value = value;
    payload.value.filtro = value.filter;
  }

  watch(payload.value, () => {
    showProgressLoading.value = !showProgressLoading.value;
    searchDropsWithFilter();
  })

  watch(showProgressLoading, (value: boolean) => {
    if(!value) return;

    setTimeout(() => (showProgressLoading.value = false), 1000)
  })

</script>

<template>

  <VProgressLinear
    :active="showProgressLoading"
    :indeterminate="showProgressLoading">
  </VProgressLinear>

  <VContainer style="max-width: 1350px !important;  min-height: 99vh;">
    <CustomChips v-if="datasLoaded" v-model="payload.ano" :array="dates.anos" size="x-large" singleLine/>
    <CustomChips v-if="datasLoaded" v-model="payload.mes" :array="dates.meses" size="large" singleLine/>

    <VRow class="pr-3" no-gutters justify="end">
      <VIcon icon="mdi-filter-variant" class="align-self-center ma-3"></VIcon>
      <VCol cols="4" sm="3" md="2" lg="2" align-self="center">
        <VSelect
          variant="underlined"
          flat
          :model-value="select"
          :items="items"
          item-title="title"
          item-value="filter"
          persistent-hint
          return-object
          single-line
          @update:model-value="dropFilterSelected"
        >
        </VSelect>
      </VCol>
    </VRow>

    <VRow v-if="!showProgressLoading" no-gutters justify="start">
      <ProductCalendario
        v-for="drop in dropsAPI.drops" :key="drop.id"
        :id="drop.id"
        :titulo="drop.titulo"
        :icone="drop.icone"
        :query="drop.query"
        :dataLancamentoDia="drop.dataLancamentoDia"
        :dataLancamentoMes="drop.dataLancamentoMes"
      />
    </VRow>

    <VRow v-if="!dropsAPI.total && !showProgressLoading && datasLoaded" no-gutters justify="center">
      <div class="text-center">
        <VIcon icon="mdi-cart-remove" size="64"></VIcon>
        <p>Ainda não existem drops nessa data</p>
      </div>

    </VRow>

  </VContainer>

  <BottomNav/>
</template>
