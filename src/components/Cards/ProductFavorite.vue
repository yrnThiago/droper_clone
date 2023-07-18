<script setup lang="ts">
  import { Product } from "@/Interfaces/interfaces";
import { ref } from "vue";

  const props = defineProps<{
    productInfo: Product
  }>();

  const product = ref(props.productInfo)

</script>

<template>
  <VContainer fluid style="width: 220px; padding: 8px;">
    <VCard rounded="lg" to="/" width="210">
      <v-img cover style="height: 300px; width: 210px;" :src="product.fotoPrincipal"></v-img>
    </VCard>

    <VRow no-gutters>

      <VRow no-gutters style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        <p>{{ product.nome }}</p>
      </VRow>

      <VRow no-gutters justify="space-between">
        <h4 class="mb-1 text-xs font-weight-bold">{{ `${product.moeda} ${product.preco}` }}</h4>
        <div>
          <v-sheet v-for="tamanho in product.TamanhoProdutoSelecao" :key="tamanho" class="d-inline-flex mr-1 bg-secondary" rounded>
          <p class="pa-1" style="font-size: 10px;">{{tamanho}}</p>
        </v-sheet>
        </div>
      </VRow>

    </VRow>
  </VContainer>

</template>
