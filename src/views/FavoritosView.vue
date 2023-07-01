<script setup>
  import PageTopNav from "@/components/PageTopNav.vue";
  import {produtos, total} from "@/api/favoritos.json";
  import ApiService from '@/services/ApiService'

  const removeProductFromFavorites = () => {
    console.log("Produto removido dos favoritos!");
  };

  const apiService = new ApiService();

  const userFavorites = async () => {
    const favorites = await apiService.get('favoritos');

    console.log(favorites);
  };

  userFavorites();

</script>

<template>
  <PageTopNav title="Favoritos"/>
  <VContainer style="max-width: 1025px; min-height: 99vh;">
    <VRow no-gutters justify="end">
      <p class="text-subtitle-1 text-disabled">{{`${total} produtos`}}</p>
    </VRow>

    <VRow>
      <VCard width="100%" rounded="xl">
        <VListItem class="text-medium-emphasis" v-for="product in produtos" :key="product.id" @click="removeProductFromFavorites">
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
                <VIcon icon="mdi-delete"></VIcon>

              </VRow>

            </VCol>
          </VRow>
        </VListItem>
      </VCard>
    </VRow>
  </VContainer>
</template>
