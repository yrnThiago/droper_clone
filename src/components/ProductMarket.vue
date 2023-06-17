<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";

  const router = useRouter();
  const changeRoute = (newRoute) => {
    router.push(newRoute);
  };

  const props = defineProps({
    nomeMarca: String,
    nomeProduto: String,
    moeda: String,
    preco: String,
    fotoPrincipal: String,
    totalFavoritadas: Number,
    tamanhos: Array
  });

</script>

<template>
    <VCard rounded="lg" to="/">
      <v-img :src="props.fotoPrincipal"></v-img>
    </VCard>

    <VRow no-gutters class="mt-2">
      <VCol cols="11">
        <p class="text-decoration-underline" @click="changeRoute(`/home`)">{{ props.nomeMarca }}</p>
        <p class="mt-1 mb-2">{{ props.nomeProduto }}</p>
        <h2 class="mb-1 text-lg font-weight-bold">{{props.moeda}} {{ props.preco }}</h2>
      </VCol>

      <VCol cols="1">
        <div class="d-flex">
          <p class="mx-1" style="font-size: 14px">{{ props.totalFavoritadas}}</p>
          <VIcon icon="mdi-heart-outline" size="20px" @click="console.log(`Liked`)"></VIcon>
        </div>

      </VCol>

    </VRow>

    <VRow no-gutters>
      <VCol cols="11">
        <v-sheet v-for="tamanho in props.tamanhos" :key="tamanho" class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
            <p class="pa-1" style="font-size: 14px;">{{tamanho}}</p>
          </v-sheet>
      </VCol>

      <VCol cols="1">
        <p class="text-caption font-weight-light" style="font-size: 1px;">Há 2h</p>
      </VCol>

    </VRow>
    <VDivider></VDivider>
</template>
