<script setup lang="ts">
  import ProductMarket from "@/components/ProductMarket.vue"
  import ProductFavorite from "@/components/Cards/ProductFavorite.vue"
  import BottomNav from '@/components/BottomNav.vue';
  import { onBeforeMount, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
import ApiService from "@/services/ApiService";
import { FavoriteProductsResponseAPI, ProductSizesTypeApiResponse, Product } from "@/Interfaces/interfaces";
import { computed } from "vue";

  const router = useRouter();

  const filteredProducts = ref([] as Product[]);
  const tiposDeProduto = ref({} as ProductSizesTypeApiResponse);
  const showProgressLoading = ref(false);
  const productTypeSelected = ref(null);
  const sizeSelected = ref(null);
  const productSizesType = ref();
  const pageProducts = ref(0);
  const idTipoProduto = ref(0);
  const showLoggedInMessage = ref(false);
  const userIsLoggedIn = computed(() => {
    const cookieAuth = localStorage.getItem("is-auth");
    if (cookieAuth !== null) return true;
    else return false;
  });

  const favorites = ref({} as FavoriteProductsResponseAPI);
  const favoritesLoaded = ref(false);

  const apiService = new ApiService();
  const apiEndpoint = 'public/produtos';

  const onAdd = async (id: number) => {
    if (userIsLoggedIn.value) {
      let data = filteredProducts.value.filter(product => product.id == id)[0];
      await apiService.post(`${apiEndpoint}/${id}/favorito`, data)

      data.totalFavoritas += 1;

      await apiService.post(`${apiEndpoint}/${id}`, data);

      favorites.value.produtos.push(data);
      favorites.value.total += 1;

    } else {
      showLoggedInMessage.value = true;
    }
  }

  const onDelete = async (id: number) => {
    await apiService.delete(`${apiEndpoint}/${id}/favorito`)
    let data = favorites.value.produtos.filter(product => product.id === id)[0];
    data.totalFavoritas -= 1;

    favorites.value.total -= 1;
    favorites.value.produtos = favorites.value.produtos.filter(product => product.id !== id);

    await apiService.post(`${apiEndpoint}/${id}`, data);
  }

  onBeforeMount(async () => {
    Object.assign(filteredProducts.value, (await apiService.get(`${apiEndpoint}/novidades/0/10`)).data)
    Object.assign(favorites.value, (await apiService.get(`${apiEndpoint}favoritos`)).data)
    Object.assign(tiposDeProduto.value, (await apiService.get(`${apiEndpoint}/filtros`)).data)

    favoritesLoaded.value = true;
  });

  const urlAtual = computed(() => {
    let value = `${apiEndpoint}/novidades/${pageProducts.value}/10?`;
    if(idTipoProduto.value !== 0) value += `idTipoProduto=${idTipoProduto.value}`;
    if(sizeSelected.value) value += `&tamanho=${sizeSelected.value}`;

    return value;
  });

  watch(productTypeSelected, async () => {
    scrollToTop();
    showProgressLoading.value = !showProgressLoading.value;
    await getSizes(productTypeSelected.value);
  });

  watch(sizeSelected, async () => {
    scrollToTop();
    showProgressLoading.value = !showProgressLoading.value;

    filteredProducts.value = (await apiService.get(urlAtual.value)).data;

  });

  watch(showProgressLoading, (value: boolean) => {
    if(!value) return;

    setTimeout(() => (showProgressLoading.value = false), 999)
  });


  const getSizes = async (index: number | null) => {
    pageProducts.value = 0;

    if(index !== undefined && index !== null){
      idTipoProduto.value = index;
      filteredProducts.value = (await apiService.get(urlAtual.value)).data;

      const sizes = tiposDeProduto.value.tipos.find(filtro => filtro.id == index);
      if(sizes != undefined) productSizesType.value = sizes["Tamanhos"];
    } else {

      idTipoProduto.value = 0;
      filteredProducts.value = (await apiService.get(urlAtual.value)).data;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0, behavior: "smooth"
    })
  };

  const loadMoreProducts = async () => {
    pageProducts.value += 1;
    const moreProduct = (await apiService.get(urlAtual.value)).data;
    if (moreProduct.length > 0) filteredProducts.value.push(...moreProduct);
  }

  const productAlreadyLiked = (productId: number) => {
    return (favorites.value.produtos.find(product => product.id === productId))? true: false;
  };

</script>

<template>
  <VProgressLinear
      :active="showProgressLoading"
      :indeterminate="showProgressLoading">
    </VProgressLinear>

  <VContainer style="max-width: 1430px !important; min-height: 99vh;">

    <VRow no-gutters class="hidden-sm-and-up overflow-auto">
      <div class="d-inline-flex">
        <VChipGroup class="d-flex flex-nowrap" column v-model="productTypeSelected">
          <VChip v-for="item in tiposDeProduto.tipos" :key="item.id" :value="item.id" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
        </VChipGroup>
      </div>
    </VRow>

    <VRow no-gutters class="hidden-sm-and-up overflow-auto">
      <div class="d-inline-flex">
        <VChipGroup class="d-flex flex-nowrap" column v-model="sizeSelected">
          <VChip v-for="item in productSizesType" :key="item.id" :value="item.id" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
        </VChipGroup>
      </div>
    </VRow>



    <VRow v-if="!showProgressLoading && favoritesLoaded">
      <VCol cols="12" sm="7" md="5" lg="5" class="text-medium-emphasis">
        <VInfiniteScroll :onLoad="loadMoreProducts" :items="filteredProducts">
          <div v-for="produto in filteredProducts" :key="produto.id" class="product__card mb-10" style="cursor: pointer;">
            <ProductMarket
              :anuncioId="produto.id"
              :nomeMarca="produto.nomeMarca"
              :nomeProduto="produto.nome"
              :moeda="produto.moeda"
              :preco="produto.preco"
              :fotoPrincipal="produto.fotoPrincipal"
              :totalFavoritas="produto.totalFavoritas"
              :tamanhos="produto.TamanhoProdutoSelecao"
              :dataCriacao="produto.dataCriacao"
              :userLiked="productAlreadyLiked(produto.id)"
              @addProductToFavorite="onAdd"
              @removeProductFromFavorite="onDelete"
              >
            </ProductMarket>
          </div>
          <div class="d-flex justify-center">
            <VBtn class="text-subtitle-2 text-uppercase" flat variant="text" @click="loadMoreProducts">Mais produtos</VBtn>
          </div>
        </VInfiniteScroll>
      </VCol>

      <VCol class="d-none d-sm-block" cols="2" sm="5" md="7" lg="7">
        <VContainer fluid style="top: 0 !important; position: sticky !important; padding: 0;">
          <VRow no-gutters>
            <VChipGroup column v-model="productTypeSelected">
              <VChip v-for="item in tiposDeProduto.tipos" :key="item.id" :value="item.id" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
            </VChipGroup>

          <div v-if="productTypeSelected" class="mt-3">
            <h4 class="text-uppercase">tamanhos</h4>
            <VChipGroup column v-model="sizeSelected">
              <VChip v-for="item in productSizesType" :key="item.id" :value="item.id" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
            </VChipGroup>
          </div>

        </VRow>

        <div v-if="favoritesLoaded && favorites.total > 0" class="mt-5">
          <VRow no-gutters justify="space-between" align="center">
            <h4 class="text-uppercase">Favoritos</h4>
            <VBtn flat variant="text" class="text-caption" @click="router.push('/favoritos')">VER TODOS</VBtn>
          </VRow>

          <VRow>
            <div class="d-inline-flex overflow-auto">
              <ProductFavorite
                v-for="pr in favorites.produtos" :key="pr.id"
                :productInfo="pr"
              />
            </div>
          </VRow>
        </div>
        </VContainer>

      </VCol>
    </VRow>

    <VSnackbar v-model="showLoggedInMessage" :timeout="2000" color="secondary" location="bottom left">
      <span class="pa-3">
        Você deve estar logado para favoritar um anúncio
      </span>
    </VSnackbar>

  </VContainer>

  <BottomNav/>
</template>

<style>
</style>
