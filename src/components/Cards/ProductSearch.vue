<script setup lang="ts">
  import { Product } from "@/Interfaces/interfaces";
import { ref } from "vue";

  const props = defineProps<{
    productInfo: Product
  }>();

  const product = ref(props.productInfo)

</script>

<template>
  <VContainer class="pa-0 my-2 mx-1" style="width: 330px;">
    <VCard rounded="lg" to="/">
      <v-img cover style="height: 400px; width: 350px;" :src="product.fotoPrincipal"></v-img>
    </VCard>

    <VRow no-gutters style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size: 15px;">
      <p class="font-weight-regular">{{ product.nome }}</p>
    </VRow>

    <VRow no-gutters justify="space-between">
      <span class="text-h6 mb-1 font-weight-bold">{{ `${product.moeda} ${product.preco}` }}</span>
      <div>
        <v-sheet v-for="tamanho in product.TamanhoProdutoSelecao" :key="tamanho" class="d-inline-flex mr-1 bg-secondary" rounded>
        <p class="pa-1" style="font-size: 10px;">{{tamanho}}</p>
      </v-sheet>
      </div>
    </VRow>

  </VContainer>

</template>
