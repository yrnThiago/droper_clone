<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";

  const emits = defineEmits(["addProductToFavorite", "removeProductFromFavorite"]);

  const router = useRouter();
  const changeRoute = (newRoute) => {
    router.push(newRoute);
  };

  const props = defineProps({
    anuncioId: Number,
    nomeMarca: String,
    nomeProduto: String,
    moeda: String,
    preco: String,
    fotoPrincipal: String,
    totalFavoritadas: Number,
    tamanhos: Array
  });

  const totalFavoritadas = ref(props.totalFavoritadas);

  const addToFavorites = () => {
    if(totalFavoritadas.value > 0) {
      totalFavoritadas.value -= 1;
      emits("removeProductFromFavorite", props.anuncioId, totalFavoritadas.value);
    }
    else {
      totalFavoritadas.value += 1;
      emits("addProductToFavorite", props.anuncioId, totalFavoritadas.value);
    }
  };

</script>

<template>
    <VCard rounded="lg" to="/">
      <v-img :src="props.fotoPrincipal"></v-img>
    </VCard>

    <v-container fluid class="pa-2">
      <VRow no-gutters class="mt-2">
      <VCol cols="10">
        <p class="text-decoration-underline" @click="changeRoute(`/home`)">{{ props.nomeMarca }}</p>
        <p class="mt-1 mb-2">{{ props.nomeProduto }}</p>
        <h2 class="mb-1 text-lg font-weight-bold">{{props.moeda}} {{ props.preco }}</h2>
      </VCol>

      <VCol cols="2">
        <div class="d-flex justify-end">
          <p class="mx-1" style="font-size: 14px">{{ totalFavoritadas }}</p>
          <VIcon :icon="!totalFavoritadas ? 'mdi-heart-outline' : 'mdi-heart'" size="20px" @click="addToFavorites"></VIcon>
        </div>

      </VCol>

    </VRow>

    <VRow no-gutters>
      <VCol cols="10">
        <v-sheet v-for="tamanho in props.tamanhos" :key="tamanho" class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
            <p class="pa-1" style="font-size: 14px;">{{tamanho}}</p>
          </v-sheet>
      </VCol>

      <VCol cols="2">
        <p class="text-end text-caption font-weight-light">Há 2h</p>
      </VCol>

    </VRow>
    <VDivider></VDivider>
    </v-container>
</template>
