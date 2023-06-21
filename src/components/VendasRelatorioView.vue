<script setup lang="ts">
  import { ref, watch } from "vue"
  import { historico, total } from "../api/historico.json";
  import PageTopNav from "@/components/PageTopNav.vue";
  import BottomNav from '@/components/BottomNav.vue';
  import SearchBar from "@/components/SearchBar.vue";

  const searchValue = ref("");
  const historicoFiltered = ref(historico);

  const keysToFilter = ref(["id", "codigoRastreio", "codigoRastreio", "status"]);

  watch(searchValue, () => {
    historicoFiltered.value =
      historico.filter(venda => venda.Produto.nome.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()));
  });
</script>

<template>
  <PageTopNav title="Histórico de vendas" />
  <VContainer style="max-width: 1025px !important; min-height: 99vh;">
    <SearchBar v-model="searchValue" rounded="lg" :allowClearable="false" :allowEmptyString="false" placeholder="Pesquise por ID, rastreio, produto ou status" :allowRedirect="false"/>
    <VCard class="mt-6" rounded="xl">
      <VList>
        <VListItem v-for="item in historicoFiltered" :key="item.id" class="pa-4" to="/">
          <VRow style="white-space: nowrap;" no-gutters>

            <VCol cols="1">
              <VAvatar :image="item.Produto.fotoPrincipal" size="90" rounded="lg"></VAvatar>
            </VCol>

            <VCol class="pl-3">
              <h4>{{item.Produto.nome}}</h4>

              <VRow no-gutters justify="space-between">
                <VCol>
                  <h2>{{ `${item.Produto.moeda} ${item.Produto.preco}` }}</h2>
                </VCol>

                <VCol>
                  <div class="d-flex justify-end align-center">
                    <VSheet :color="item.statusInteresse.cor" rounded="lg">
                      <p class="pa-1 font-weight-bold text-caption text-center text-uppercase">{{item.statusInteresse.status}}</p>
                    </VSheet>
                  </div>
                </VCol>

              </VRow>

              <VRow no-gutters>
                <v-sheet class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
                  <p class="px-1" style="font-size: 14px;">{{item.TamanhoSelecionado.titulo}}</p>
                </v-sheet>
              </VRow>

            </VCol>
          </VRow>
        </VListItem>
      </VList>
    </VCard>

    <VRow class="mt-8" no-gutters justify="center">
      <VBtn variant="text">
        CARREGAR MAIS
      </VBtn>
    </VRow>

    <VRow class="my-10" no-gutters justify="center">
      <div class="d-block text-center">
        <p class="mb-2">{{total}} vendas contabilizadas</p>
        <p>50 vendas por página</p>
      </div>
    </VRow>
  </VContainer>

</template>
