<script lang="ts" setup>
  import CustomRouterLink from "@/components/CustomComponents/CustomRouterLink.vue";
import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const userAgreedWithTerms = ref(false);
</script>

<template>
  <VRow no-gutters>
    <VBtn class="w-100 mt-6" :disabled="!userAgreedWithTerms" @click="router.push('/entrar')">
      <VIcon icon="mdi-email" size="25px"></VIcon>
      <span class="ml-4">Entrar com E-mail</span>
    </VBtn>
  </VRow>

  <VRow no-gutters>
    <VBtn class="w-100 mt-6" :disabled="!userAgreedWithTerms" :color="(userAgreedWithTerms) ? `primary` : `on-background`" @click="router.push('/entrar')">
      <VIcon icon="mdi-facebook" size="25px"></VIcon>
      <span class="ml-4">Entrar com Facebook</span>
    </VBtn>
  </VRow>

  <VRow no-gutters>
    <VBtn class="w-100 mt-6" :disabled="!userAgreedWithTerms" @click="router.push('/entrar')">
      <VIcon icon="mdi-google" size="25px"></VIcon>
      <span class="ml-4">Entrar com o Google</span>
    </VBtn>
  </VRow>


  <VRow no-gutters class="mt-12">
    <VCheckbox color="primary" hide-details v-model="userAgreedWithTerms" label=" e  do Droper?">
      <template v-slot:label>
        <span>Você concorda com os <CustomRouterLink to="#">Termos de Uso</CustomRouterLink> e <CustomRouterLink to="#">Políticas de privacidade</CustomRouterLink> do Droper?</span>
      </template>
    </VCheckbox>
  </VRow>

  <div class="d-flex justify-center mt-12">
    <span class="text-caption">Quer vender como uma <span class="font-weight-bold">loja PRO?</span></span>
  </div>

  <VRow no-gutters justify="center">
    <VBtn :disabled="!userAgreedWithTerms">
      <VIcon icon="mdi-store" size="30px"></VIcon>
      <span class="ml-4 text-uppercase">Entrar como loja</span>
    </VBtn>
  </VRow>
</template>
