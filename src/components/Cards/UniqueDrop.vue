<script setup lang="ts">
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";

  const props = defineProps<{
    collection: any,
  }>();

</script>

<template>
  <CustomRouterLink :to="props.collection.url">
    <VCard
      rounded="xl"
      class="my-16"
    >
      <VImg :src="props.collection.wallpaperDesktop"></VImg>
      <VCardActions>
        <VSpacer></VSpacer>
        <div class="d-flex align-center">
          <VImg width="90px" :src="props.collection.drop.icone"></VImg>
          <VCardText class="text-h6">{{ props.collection.titulo }}</VCardText>
          <VBtn :ripple=false density="compact" class="bg-background-black">Comprar</VBtn>
        </div>
        <VSpacer></VSpacer>
      </VCardActions>
    </VCard>
  </CustomRouterLink>
</template>

