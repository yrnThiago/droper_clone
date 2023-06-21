<script setup lang="ts">
  import CustomRouterLink from './CustomComponents/CustomRouterLink.vue';

</script>

<template>
  <VFooter class="d-none d-sm-flex py-5 px-0" color="background-black">
    <VContainer fluid style=" padding: 0, 0 !important; max-width: 1430px !important;">
      <VRow no-gutters justify="space-between">
        <VCol cols="3" sm="2" lg="2">
          <h4 class="mb-1">ENTRE EM CONTATO</h4>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">droper.app@gmail.com</p>
          </CustomRouterLink>

            <CustomRouterLink :to="'/'">
              <p class="text-caption">Instagram: @droper</p>
            </CustomRouterLink>

          <div class="mt-16 pt-6">
            <h4 class="mb-1">BAIXE O APP DROPER</h4>
            <VCol class="pa-0">
              <CustomRouterLink :to="'/'">
                <VImg width="120" src="../assets/rodape/playstore.png"></VImg>
              </CustomRouterLink>

              <CustomRouterLink :to="'/'">
                <VImg width="120" class="mt-1" src="../assets/rodape/applestore.png"></VImg>
              </CustomRouterLink>

            </VCol>
          </div>

        </VCol>

        <VCol cols="3" sm="2" lg="1">

          <h4 class="mb-1">AJUDA</h4>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Dúvidas gerais</p>
          </CustomRouterLink>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Atendimento e suporte</p>
          </CustomRouterLink>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Trocas e devoluções</p>
          </CustomRouterLink>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Termos de uso</p>
          </CustomRouterLink>

          <CustomRouterLink :to="'/'">
            <VImg width="85" src="../assets/rodape/reclameaqui.png"></VImg>
          </CustomRouterLink>


        </VCol>

        <VCol cols="2" sm="2" lg="1">
          <h4 class="mb-1">SOBRE A DROPER</h4>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Sobre nós</p>
          </CustomRouterLink>

          <CustomRouterLink :to="'/'">
            <p class="text-caption">Droper Concept Store</p>
          </CustomRouterLink>

        </VCol>

        <VCol cols="4" sm="3" lg="2">
          <h4 class="mb-1">SOCIAL</h4>
          <VRow no-gutters justify="start">

            <CustomRouterLink :to="'/'">
              <VAvatar class="mr-2" size="30">
                <VImg src="../assets/rodape/instagram.png"></VImg>
              </VAvatar>
            </CustomRouterLink>

            <CustomRouterLink :to="'/'">
              <VAvatar class="mr-2" size="30">
                <VImg src="../assets/rodape/facebook.png"></VImg>
              </VAvatar>
            </CustomRouterLink>

            <CustomRouterLink :to="'/'">
              <VAvatar class="mr-2" size="30">
                <VImg src="../assets/rodape/twitter.png"></VImg>
              </VAvatar>
            </CustomRouterLink>

            <CustomRouterLink :to="'/'">
              <VAvatar class="mr-2" size="30">
                <VImg src="../assets/rodape/tiktok.png"></VImg>
              </VAvatar>
            </CustomRouterLink>

          </VRow>

          <div class="mt-16 pt-6">
            <h4 class="mb-1">FORMAS DE PAGAMENTO</h4>
            <VRow no-gutters justify="space-between">
              <VImg class="mr-2" src="../assets/cardBrands/master.png"></VImg>
              <VImg class="mr-2" src="../assets/cardBrands/visa.png"></VImg>
              <VImg class="mr-2" src="../assets/cardBrands/elo.png"></VImg>
              <VImg class="mr-2" src="../assets/cardBrands/amex.png"></VImg>
              <VImg class="mr-2" src="../assets/cardBrands/hipercard.png"></VImg>
              <VImg class="mr-2" src="../assets/cardBrands/pixcard.png"></VImg>
            </VRow>
          </div>

        </VCol>

        <VCol cols="2" lg="1" align-self="start">
          <CustomRouterLink :to="'/'">
            <VImg width="120" src="../assets/logo.png"></VImg>
          </CustomRouterLink>

        </VCol>
      </VRow>

      <VDivider class="mt-12" color="white"></VDivider>

      <VRow no-gutters justify="space-between" class="mt-8">
          <VCol cols="1">
            <div class="d-flex">
              <VAvatar rounded="0" size="16" image="../assets/rodape/logobr.png"></VAvatar>
              <p class="text-caption ml-2">Português - BR</p>
            </div>
          </VCol>

          <VCol cols="10" sm="9" md="7" lg="5">
            <p class="text-caption">2023 © Droper Tecnologia e Serviços LTDA CNPJ 41.385.557/0001-75</p>
            <p class="text-caption">Av. Magalhães de Castro, 12.000, Loja 11, Terceiro Piso - Cidade Jardim, São Paulo - SP, 05502-001</p>
          </VCol>
        </VRow>

    </VContainer>
  </VFooter>
</template>
