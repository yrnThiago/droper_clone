<script lang="ts" setup>
  import { ref } from "vue"
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";
import { Collection } from "@/Interfaces/interfaces";

  export type CollectionIDs = "marcas" | "lancamentos" | "bestsellers" | "slider" | "colecao";
  export type AdditionalBtnsTable = {title: string, route: string};

  const props = defineProps<{
    collection: Collection
    title?: string
    id?: CollectionIDs
    additionalBtns?: Array<AdditionalBtnsTable>
  }>();

  const dropCollection = ref(props.collection);

  const dividirLista = (inicio: number, fim: number) => {
    let collectionResult = [];
    if(props.title) collectionResult = dropCollection.value;
    else collectionResult = dropCollection.value.drops;

    const novaLista = [];
    for (let i=inicio; i < fim; i++){
      novaLista.push(collectionResult[i]);
    }

    return novaLista;
  }

  const collection1 = dividirLista(0, 5);
  const collection2 = dividirLista(5, 10);
  const collection3 = dividirLista(10, 15);
</script>

<template>
  <h1 class="mt-12" style="font-size: 60px;">{{(!props.title) ? dropCollection.titulo : props.title}}</h1>
  <VCard class="px-2 py-4" rounded="xl">

    <VRow no-gutters class="d-none d-sm-flex">

      <VCol cols="4" sm="6" lg="4">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection1" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

      <VCol cols="4" sm="6" lg="4">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection2" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

      <VCol cols="4" sm="6" lg="4" class="hidden-md-and-down">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection3" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

    </VRow>

    <VRow no-gutters class="d-flex d-sm-none">

      <VCol cols="4">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection1" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

      <VCol cols="4">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection2" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

      <VCol cols="4">
        <CustomRouterLink :to="`/${produto.query}`" v-for="produto in collection3" :key="produto.id">
          <VRow class="px-3" no-gutters align="center" justify="start">
          <VCol cols="1">
            <p class="text-center" style="font-size: 22px;">
              {{produto.dataLancamentoDia}}
            </p>
            <p class="text-center" style="font-size: 9px;">
              {{produto.dataLancamentoMes}}/{{ produto.dataLancamentoAnoAbrev }}
            </p>
          </VCol>

          <VCol cols="3">
            <VImg
            :src="produto.icone"
            style="max-width: 90px;"
            ></VImg>
          </VCol>

          <VCol cols="8">
            <h4 style="font-size: 18px; line-height: 20px;">{{produto.titulo}}</h4>
          </VCol>

          <VDivider></VDivider>
        </VRow>
        </CustomRouterLink>
      </VCol>

    </VRow>
  </VCard>

  <VRow no-gutters v-if="props.additionalBtns" justify="end">
    <VBtn v-for="btn in props.additionalBtns" :key="btn" density="compact" ripple variant="text" :to="btn.route">{{ btn.title }}</VBtn>
  </VRow>

</template>
