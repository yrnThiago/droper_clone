<script setup lang="ts">
  import SuggestionsCard from "@/components/Cards/SuggestionsCard.vue";
  import CustomRouterLink from "@/components/CustomComponents/CustomRouterLink.vue";
  import {lancamentos, maisvendidos, maisvistos} from "@/api/sugestoes.json";
</script>

<template>
  <VRow no-gutters class="mt-12">
    <VCard rounded="xl" width="98%">
      <VCardTitle class="text-h6">BUSCAS ANTERIORES</VCardTitle>

      <VCardItem>
        <CustomRouterLink to="/buscar/Dunk">
          <p>Dunk</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>

      <VCardItem>
        <CustomRouterLink to="/buscar/Jordan">
          <p>Jordan</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>

      <VCardItem>
        <CustomRouterLink to="/buscar/Yeezy">
          <p>Yeezy</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>

      <VCardItem>
        <CustomRouterLink to="/buscar/Dunk%20High">
          <p>Dunk High</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>

      <VCardItem>
        <CustomRouterLink to="/buscar/Born%20and%20Raised">
          <p>Born and Raised</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>

      <VCardItem>
        <CustomRouterLink to="/buscar/teste">
          <p>teste</p>
          <VDivider></VDivider>
        </CustomRouterLink>
      </VCardItem>
    </VCard>
  </VRow>

  <SuggestionsCard :suggestionDrops="maisvendidos" title="Mais vendidos"/>
  <SuggestionsCard :suggestionDrops="maisvistos" title="Mais pesquisados"/>
  <SuggestionsCard :suggestionDrops="lancamentos" title="Lançamentos"/>
</template>
