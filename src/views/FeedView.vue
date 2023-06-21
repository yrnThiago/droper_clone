<script setup lang="ts">
  import ProductMarket from "@/components/ProductMarket.vue"
  import CustomChips from "@/components/CustomComponents/CustomChipsGroup.vue"
  import tiposDeProduto from "@/api/tipos_produto.json";
  import produtos from "@/api/ProdutosFeed.json";
  import BottomNav from '@/components/BottomNav.vue';
  import { ref, watch } from "vue";

  const filteredProducts = ref(produtos);
  const showProgressLoading = ref(false);
  const productTypeSelected = ref(null);
  const sizeSelected = ref(null);
  const productSizesType = ref();

  watch(productTypeSelected, () => {
    showProgressLoading.value = !showProgressLoading.value;
    productSizesType.value = getSizes(productTypeSelected.value);
  })

  watch(showProgressLoading, (value: boolean) => {
    if(!value) return;

    setTimeout(() => (showProgressLoading.value = false), 999)
  })

  const getSizes = (index: number | null) => {
    if(index != undefined){
      filteredProducts.value =
      produtos.filter(product => product.idTipoProduto === index);
    }else{
      filteredProducts.value = produtos;
    }

    const sizes = tiposDeProduto.tipos.find(item => item.id == index);
    return (!sizes) ? null : sizes["Tamanhos"];
  };

</script>

<template>


  <VContainer style="max-width: 1430px !important;">

    <VProgressLinear
      :active="showProgressLoading"
      :indeterminate="showProgressLoading">
    </VProgressLinear>

    <VRow no-gutters class="hidden-sm-and-up">
      <CustomChips v-model="productTypeSelected" :array="tiposDeProduto.tipos" singleLine/>
      <CustomChips v-if="productTypeSelected" v-model="sizeSelected" title="TAMANHOS" :array="productSizesType" singleLine/>
    </VRow>



    <VRow v-if="!showProgressLoading">
      <VCol cols="12" sm="7" md="5" lg="5" class="text-medium-emphasis">
        <div v-for="produto in filteredProducts" :key="produto.id" class="product__card mb-10" style="cursor: pointer;">
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

        <p v-if="!filteredProducts.length" class="text-center">Não encontramos nenhum item</p>
      </VCol>

      <VCol class="d-none d-sm-block" cols="2" sm="5" md="7" lg="7">
        <VRow style="top: 0; position: sticky;">
          <CustomChips v-model="productTypeSelected" :array="tiposDeProduto.tipos"/>

          <div v-if="getSizes(productTypeSelected)" class="mt-3">
            <CustomChips v-model="sizeSelected" title="TAMANHOS" :array="getSizes(productTypeSelected)"/>
          </div>

        </VRow>
      </VCol>
    </VRow>

  </VContainer>

  <BottomNav/>
</template>

<style>
</style>
