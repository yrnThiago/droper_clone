<script setup>
  import {notificacoes} from "@/api/notificacoes.json";
  import PageTopNav from "@/components/PageTopNav.vue";
</script>

<template>
  <PageTopNav title="Notificações" :additionalBtns="['mdi-cog-box']" />

  <VContainer style="max-width: 1045px !important;">
    <VCard width="98%" rounded="xl">
      <VCardTitle class="text-subtitle-1 font-weight-medium">VISUALIZADAS</VCardTitle>
      <VDivider></VDivider>
      <VList>
        <VListItem :to="notificacao.href" v-for="notificacao in notificacoes" :key="notificacao.id" height="70px">
          <VRow no-gutters class="mt-4 my-3">

            <VCol cols="2" sm="1" align-self="center">
              <VAvatar rounded="lg">
                <VImg :src="notificacao.fotoPerfil" alt="" width="40px"></VImg>
              </VAvatar>
            </VCol>

            <VCol cols="8" sm="10" align-self="center">
              <p>{{ notificacao.mensagem }}</p>
            </VCol>

            <VCol v-if="notificacao.fotoAtividade" cols="1" align-self="center">
              <VAvatar rounded="lg">
                <VImg :src="notificacao.fotoAtividade" width="40px"></VImg>
              </VAvatar>
            </VCol>
          </VRow>
          <VRow no-gutters>
            <VDivider></VDivider>
          </VRow>
        </VListItem>
      </VList>
    </VCard>

    <VRow no-gutters justify="center">
      <VBtn class="mt-8" density="compact" ripple variant="text">MAIS</VBtn>
    </VRow>

  </VContainer>
</template>
