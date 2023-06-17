<script setup>
  import {useRouter} from "vue-router";

  const router = useRouter();
</script>

<template>
  <VContainer class="fill-height">
    <VRow class="justify-center align-center">
      <VCol cols="12" sm="6" md="4">

        <VRow no-gutters justify="center">
          <h2 style="justify-self: center;">404</h2>
        </VRow>

        <VRow class="pb-4" no-gutters justify="center">
          <p>Ops, algo de errado aconteceu! </p>
        </VRow>

        <VRow justify="center" no-gutters>
          <VBtn class="mx-2" @click="router.push('/')">Home</VBtn>
          <VBtn color="primary" @click="router.go(-1)" class="mx-2">Voltar</VBtn>
        </VRow>

      </VCol>
    </VRow>
  </VContainer>
</template>
