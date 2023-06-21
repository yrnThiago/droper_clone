<script setup>

  const props = defineProps({
    id: Number,
    titulo: String,
    icone: String,
    query: String,
    dataLancamentoDia: String,
    dataLancamentoMes: String
  });

</script>

<template>
  <VCol class="px-2 pb-2" cols="6" sm="3" md="3">
    <VCard class="product_calendar pa-2" flat height="300px" max-height="300px" :to="`/d/${props.id}/${props.query}`" rounded="lg">
      <VRow no-gutters justify="space-between">
        <VCol cols="11">
          <p style="font-size: 14px;">{{props.titulo}}</p>
        </VCol>

        <VCol cols="1" align-self="end">

          <VRow no-gutters justify="center">
            <p style="font-size: 20px;">{{ props.dataLancamentoDia }}</p>
          </VRow>

          <VRow no-gutters justify="center">
            <p style="font-size: 10px;" class="font-weight-light text-uppercase">{{props.dataLancamentoMes}}</p>
          </VRow>

        </VCol>

      </VRow>
      <VRow no-gutters justify="start">
        <VCol cols="12">
          <VImg :src="props.icone"></VImg>
        </VCol>
      </VRow>
    </VCard>
  </VCol>
</template>

<style>
  @media (max-width: 1024px){
    .product_calendar {
      height: 200px !important;
    }
  }

</style>
