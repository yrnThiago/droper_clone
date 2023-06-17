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
  <VCard flat height="300px" :to="`/d/${props.id}/${props.query}`" rounded="lg" class="pa-2 mb-3 ml-6 w-94">
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
</template>

<style scoped>

</style>
