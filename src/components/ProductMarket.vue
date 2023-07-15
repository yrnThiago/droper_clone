<script setup lang="ts">
  import {useRouter} from "vue-router";
  import {computed, ref} from "vue";

  const emits = defineEmits(["addProductToFavorite", "removeProductFromFavorite"]);

  const router = useRouter();
  const changeRoute = (newRoute) => {
    router.push(newRoute);
  };

  const props = defineProps<{
    anuncioId: number;
    nomeMarca: string;
    nomeProduto: string;
    moeda: string;
    preco: string;
    fotoPrincipal: string;
    totalFavoritas: number;
    tamanhos: Array<string>;
    dataCriacao: Date;
    userLiked: boolean;
  }>();

  const totalFavoritadas = ref(props.totalFavoritas);
  const userAlreadyLiked = ref(props.userLiked);
  const productCreatedAt = ref(new Date(props.dataCriacao));

  const calculateDifferenceTime = () => {
    const dateNow: Date = new Date();
    const difference: number = (dateNow.getTime() - productCreatedAt.value.getTime());
    const dayInMilliseconds: number = 24 * 60 * 60 * 1000;
    if(difference >= dayInMilliseconds) return `Há ${Math.floor(difference / dayInMilliseconds)}d`;
    else return `Há ${Math.floor(difference / (60 * 60 * 1000))}h`;
  };

  const userIsLoggedIn = computed(() => {
    const cookieAuth = localStorage.getItem("is-auth");
    if (cookieAuth !== null) return true;
    else return false;
  });

  const productCreatedAtStr = calculateDifferenceTime();

  const addToFavorites = () => {
    if(userAlreadyLiked.value && userIsLoggedIn.value) {
      totalFavoritadas.value -= 1;
      userAlreadyLiked.value = false;
      emits("removeProductFromFavorite", props.anuncioId, totalFavoritadas.value);
    }
    else {
      emits("addProductToFavorite", props.anuncioId, totalFavoritadas.value);
      if (userIsLoggedIn.value) {
        totalFavoritadas.value += 1;
        userAlreadyLiked.value = true;
      }
    }
  };

</script>

<template>
    <VCard rounded="lg" to="/">
      <VImg :src="props.fotoPrincipal"></VImg>
    </VCard>

    <VContainer fluid class="pa-2">
      <VRow no-gutters class="mt-2">
      <VCol cols="10">
        <p class="text-decoration-underline" @click="changeRoute(`/home`)">{{ props.nomeMarca }}</p>
        <p class="mt-1 mb-2">{{ props.nomeProduto }}</p>
        <h2 class="mb-1 text-lg font-weight-bold">{{props.moeda}} {{ props.preco }}</h2>
      </VCol>

      <VCol cols="2">
        <div class="d-flex justify-end">
          <p class="mx-1" style="font-size: 14px">{{ totalFavoritadas }}</p>
          <VIcon :icon="userAlreadyLiked ? 'mdi-heart' : 'mdi-heart-outline'" size="20px" @click="addToFavorites"></VIcon>
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
        <p class="text-end text-caption font-weight-light">{{ productCreatedAtStr }}</p>
      </VCol>

    </VRow>
    </VContainer>
    <VDivider color="white"></VDivider>
</template>
