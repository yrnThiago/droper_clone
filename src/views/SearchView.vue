<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import BottomNav from '@/components/BottomNav.vue';
  import SearchBar from "@/components/SearchBar.vue";

  const router = useRouter();
  const route = useRoute();

  let searchValue = ref((route.params.productName)? route.params.productName.toString() : "");

  const limparBarraDePesquisa = () => {
    searchValue.value = "";
    setTimeout(() => {
      router.push("/buscar");
    }, 500)
  };

</script>

<template>
  <VContainer style="max-width: 1400px !important; min-height: 99vh;">
    <VRow no-gutters>

      <VCol cols="9" sm="10" md="11">
        <SearchBar v-model="searchValue" rounded="xl" allowEmptyString allowRedirect/>
      </VCol>

      <VCol cols="3" sm="2" md="1" align-self="center">
        <div v-if="searchValue">
          <VIcon class="ma-2" icon="mdi-close" @click="limparBarraDePesquisa"></VIcon>
          <VIcon class="ma-2" icon="mdi-filter-variant"></VIcon>
        </div>

        <div v-else>
          <VBtn density="compact" ripple variant="text">FILTRAR</VBtn>
        </div>
      </VCol>

    </VRow>

    <RouterView />

    <VContainer class="py-16 my-16"></VContainer>

  </VContainer>

  <BottomNav/>
</template>
