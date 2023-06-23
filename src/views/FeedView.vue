<script setup lang="ts">
  import ProductMarket from "@/components/ProductMarket.vue"
  import ProductFavorite from "@/components/Cards/ProductFavorite.vue"
  import CustomChips from "@/components/CustomComponents/CustomChipsGroup.vue"
  import tiposDeProduto from "@/api/tipos_produto.json";
  import productsFeed from "@/api/ProdutosFeed.json";
  import {produtos, total } from "@/api/favoritos.json";
  import BottomNav from '@/components/BottomNav.vue';
  import { ref, watch } from "vue";

  const filteredProducts = ref(productsFeed);
  const favoritesProducts = ref<Array<Object>>(produtos);
  const showProgressLoading = ref(false);
  const productTypeSelected = ref(null);
  const sizeSelected = ref(null);
  const productSizesType = ref();

  const addToFavorite = (anuncioId: Number, totalFavoritadas: number) => {
    if(totalFavoritadas){
      const productResult = productsFeed.find(product => product.id === anuncioId);
      favoritesProducts.value.push(productResult as Object);

      console.log(favoritesProducts.value);

      console.log("Produto adicionado aos favoritos!", anuncioId, productResult);
    }
  };

  const removeFromFavorite = (anuncioId: Number, totalFavoritadas: number) => {
    const productIndex = favoritesProducts.value.findIndex(product => product.id === anuncioId);

    if(productIndex !== -1){
      favoritesProducts.value.splice(productIndex, 1);
      console.log("Produto removido dos favoritos!", anuncioId);
    } else {
      console.log("Produto não está na sua lista de favoritos!");
    }

  }

  watch(productTypeSelected, () => {
    scrollToTop();
    showProgressLoading.value = !showProgressLoading.value;
    productSizesType.value = getSizes(productTypeSelected.value);
  });

  watch(showProgressLoading, (value: boolean) => {
    if(!value) return;

    setTimeout(() => (showProgressLoading.value = false), 999)
  });

  const getSizes = (index: number | null) => {
    if(index != undefined){
      filteredProducts.value =
      productsFeed.filter(product => product.idTipoProduto === index);
    }else{
      filteredProducts.value = productsFeed;
    }

    const sizes = tiposDeProduto.tipos.find(item => item.id == index);
    return (!sizes) ? null : sizes["Tamanhos"];
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0, behavior: "smooth"
    })
  };

</script>

<template>
  <VProgressLinear
      :active="showProgressLoading"
      :indeterminate="showProgressLoading">
    </VProgressLinear>

  <VContainer style="max-width: 1430px !important; min-height: 99vh;">

    <VRow no-gutters class="hidden-sm-and-up">
      <CustomChips v-model="productTypeSelected" :array="tiposDeProduto.tipos" singleLine/>
      <CustomChips v-if="productTypeSelected" v-model="sizeSelected" title="TAMANHOS" :array="productSizesType" singleLine/>
    </VRow>



    <VRow v-if="!showProgressLoading">
      <VCol cols="12" sm="7" md="5" lg="5" class="text-medium-emphasis">
        <div v-for="produto in filteredProducts" :key="produto.id" class="product__card mb-10" style="cursor: pointer;">
          <ProductMarket
            :anuncioId="produto.id"
            :nomeMarca="produto.nomeMarca"
            :nomeProduto="produto.nome"
            :moeda="produto.moeda"
            :preco="produto.preco"
            :fotoPrincipal="produto.fotoPrincipal"
            :totalFavoritadas="produto.totalFavoritadas"
            :tamanhos="produto.TamanhoProdutoSelecao"
            @addProductToFavorite="addToFavorite"
            @removeProductFromFavorite="removeFromFavorite"
            >
          </ProductMarket>
        </div>
        <div class="d-flex justify-center">
          <VBtn class="text-subtitle-2 text-uppercase" flat variant="text">Mais produtos</VBtn>
        </div>

      </VCol>

      <VCol style="top: 0; position: sticky;" class="d-none d-sm-block" cols="2" sm="5" md="7" lg="7">
        <VRow no-gutters>
          <CustomChips v-model="productTypeSelected" :array="tiposDeProduto.tipos"/>

          <div v-if="productTypeSelected" class="mt-3">
            <CustomChips v-model="sizeSelected" title="TAMANHOS" :array="productSizesType"/>
          </div>

        </VRow>

        <div v-if="favoritesProducts.length" class="mt-5">
          <VRow no-gutters justify="space-between" align="center">
            <h4 class="text-uppercase">Favoritos</h4>
            <VBtn flat variant="text" class="text-caption" @click="red">VER TODOS</VBtn>
          </VRow>

          <VRow>
            <div class="d-inline-flex overflow-auto">
              <ProductFavorite
                v-for="pr in favoritesProducts" :key="pr.id"
                :productInfo="pr"
              />
            </div>
          </VRow>
        </div>
      </VCol>
    </VRow>

  </VContainer>

  <BottomNav/>
</template>

<style>
</style>
