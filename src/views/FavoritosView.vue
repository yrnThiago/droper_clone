<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
  import PageTopNav from "@/components/PageTopNav.vue";
  import ApiService from '@/services/ApiService'
import { FavoriteProductsResponseAPI } from "@/Interfaces/interfaces";

  const favorites = ref({} as FavoriteProductsResponseAPI);
  const favoritesLoaded = ref(false);

  const apiService = new ApiService();
  const apiEndpoint = 'public/produtos';

  onBeforeMount(async () => {
    favorites.value = (await apiService.get(`${apiEndpoint}favoritos`)).data;
    favoritesLoaded.value = true;
  });

  const onDelete = async (id: number) => {
    await apiService.delete(`${apiEndpoint}/${id}/favorito`)

    let data = (await apiService.get(`${apiEndpoint}/${id}`)).data;
    data.totalFavoritas -= 1;

    favorites.value.total -= 1;
    favorites.value.produtos = favorites.value.produtos.filter(product => product.id !== id);

    await apiService.post(`${apiEndpoint}/${id}`, data);
  }

</script>

<template>
  <PageTopNav title="Favoritos"/>
  <VContainer v-if="favoritesLoaded" style="max-width: 1025px; min-height: 99vh;">
    <VRow no-gutters justify="end">
      <p class="text-subtitle-1 text-disabled">{{`${favorites.total} produtos`}}</p>
    </VRow>

    <VRow>
      <VCard width="100%" rounded="xl">
        <VListItem class="text-medium-emphasis" v-for="product in favorites.produtos" :key="product.id">
          <VRow no-gutters>
            <VCol>
              <div class="d-flex">
                <VAvatar class="mr-2 my-2" rounded="sm" :image="product.fotoPrincipal" style="width: 90px; height: 90px;" />
                <div>
                  <p class="text-caption font-weight-light" style="text-overflow: ellipsis; white-space: wrap;">{{product.nome}}</p>

                  <VRow no-gutters justify="space-between">
                    <VCol>
                      <h2>{{ `${product.moeda} ${product.preco}` }}</h2>
                    </VCol>
                  </VRow>

                  <VRow no-gutters>
                    <v-sheet v-for="size in product.TamanhoProdutoSelecao" :key="size" class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
                      <p class="pa-1">{{size}}</p>
                    </v-sheet>
                  </VRow>
                </div>
              </div>
            </VCol>

            <VCol cols="1" align-self="center">
              <VRow no-gutters justify="end">
                <VIcon icon="mdi-delete" @click="onDelete(product.id)"></VIcon>

              </VRow>

            </VCol>
          </VRow>
        </VListItem>
      </VCard>
    </VRow>
  </VContainer>
</template>
