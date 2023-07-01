<script setup lang="ts">
  import {Ref, ref, watch} from "vue";
  import ProductCalendario from "@/components/ProductCalendario.vue";
  import CustomChips from "@/components/CustomComponents/CustomChipsGroup.vue"
  import {drops} from "@/api/drops.json";
  import dropsRecentes from "@/api/dropsMaisRecentes.json";
  import dropsMaisAntigos from "@/api/dropsMaisAntigos.json";
  import dropsMaisCaros from "@/api/dropsMaisCaros.json";

  import BottomNav from '@/components/BottomNav.vue';
  import { meses, anos } from "@/api/dates.json";

  export type SelectValue = {title: string, filter: string};

  const yearSelected = ref(0);
  const monthSelected = ref(5);

  const select = ref({ title: 'MAIS VISTOS', filter: 'maisvistos' })
  const items = ref([
    { title: 'MAIS RECENTES', filter: 'maisrecentes' },
    { title: 'MAIS ANTIGOS', filter: 'maisantigos' },
    { title: 'MAIS VISTOS', filter: 'maisvistos' },
    { title: 'MAIOR PREÇO', filter: 'retail' },
  ]);

  const filteredDrops = ref(drops);
  const showProgressLoading = ref(false);

  const filteredDropsWithDate = () => {
    const yearSelectedStr = anos[yearSelected.value].titulo.toLocaleLowerCase();
    const monthSelectedStr = meses[monthSelected.value].titulo.toLocaleLowerCase();

    filteredDrops.value = drops.filter(drop => drop.dataLancamentoAno == yearSelectedStr && drop.dataLancamentoMes == monthSelectedStr);
  };

  const organizarDrops = (value: SelectValue) => {
    select.value = value;
    if(select.value.filter == "maisvistos") filteredDrops.value = drops;
    if(select.value.filter == "maisantigos") filteredDrops.value = dropsMaisAntigos.drops;
    if(select.value.filter == "maisrecentes") filteredDrops.value = dropsRecentes.drops;
    if(select.value.filter == "retail") filteredDrops.value = dropsMaisCaros.drops;

  }

  watch([yearSelected, monthSelected], () => {
    showProgressLoading.value = !showProgressLoading.value;
    filteredDropsWithDate();
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
    <CustomChips v-model="yearSelected" :array="anos" size="x-large" singleLine/>
    <CustomChips v-model="monthSelected" :array="meses" size="large" singleLine/>

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
          @update:model-value="organizarDrops"
        >
        </VSelect>
      </VCol>
    </VRow>

    <VRow v-if="!showProgressLoading" no-gutters justify="start">
      <ProductCalendario
        v-for="drop in filteredDrops" :key="drop.id"
        :id="drop.id"
        :titulo="drop.titulo"
        :icone="drop.icone"
        :query="drop.query"
        :dataLancamentoDia="drop.dataLancamentoDia"
        :dataLancamentoMes="drop.dataLancamentoMes"
      />
    </VRow>

    <VRow v-if="!filteredDrops.length && !showProgressLoading" no-gutters justify="center">
      <div class="text-center">
        <VIcon icon="mdi-cart-remove" size="64"></VIcon>
        <p>Ainda não existem drops nessa data</p>
      </div>

    </VRow>

  </VContainer>

  <BottomNav/>
</template>
