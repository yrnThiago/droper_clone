<script lang="ts" setup>
  import PageTopNav from '@/components/PageTopNav.vue';

</script>

<template>
  <PageTopNav title="Entrar" />

  <VContainer style="max-width: 500px !important; min-height: 99vh; margin-top: 100px;">
    <RouterView />
  </VContainer>


</template>
