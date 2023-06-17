<script setup lang="ts">
  import ProductMarket from "@/components/ProductMarket.vue"
  import Chips from "@/components/CustomComponents/CustomChipsGroup.vue"
  import tiposDeProduto from "@/api/tipos_produto.json";
  import produtos from "@/api/ProdutosFeed.json";

  import {ref} from "vue";
  const productTypeSelected = ref(null);
  const sizeSelected = ref(null);

  const getSizes = (index: number | null) => {
    const sizes = tiposDeProduto.tipos.find(item => item.id == index);
    return (!sizes) ? null : sizes["Tamanhos"];
  }

</script>

<template>
  <VContainer style="max-width: 1430px !important;">

    <VRow>
      <VCol cols="10" sm="7" md="5" lg="5" class="text-medium-emphasis">
        <div v-for="produto in produtos" :key="produto" class="product__card mb-10" style="cursor: pointer;">
          <ProductMarket
            :nomeMarca="produto.nomeMarca"
            :nomeProduto="produto.nome"
            :moeda="produto.moeda"
            :preco="produto.preco"
            :fotoPrincipal="produto.fotoPrincipal"
            :totalFavoritadas="produto.totalFavoritadas"
            :tamanhos="produto.TamanhoProdutoSelecao">
          </ProductMarket>
        </div>
      </VCol>

      <VCol cols="2" sm="5" md="7" lg="7">
        <VRow style="top: 0; position: sticky;">
          <Chips v-model="productTypeSelected" :array="tiposDeProduto.tipos"/>

          <div v-if="getSizes(productTypeSelected)" class="mt-3">
            <Chips v-model="sizeSelected" title="TAMANHOS" :array="getSizes(productTypeSelected)"/>
          </div>

        </VRow>
      </VCol>
    </VRow>

  </VContainer>
</template>

<style>
</style>
