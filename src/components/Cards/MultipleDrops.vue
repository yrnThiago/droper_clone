<script setup lang="ts">
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";
  import TrackCard from "@/components/Cards/TrackCard.vue";

  const props = defineProps<{
    collection: any
  }>();
</script>

<template>
  <VRow no-gutters class="mt-12">
    <p class="text-uppercase">{{ props.collection.subtitulo }}</p>
  </VRow>

  <VRow no-gutters>
    <h2 class="text-uppercase" style="font-size: 60px;">{{ props.collection.titulo }}</h2>
  </VRow>

  <VCard rounded="xl">
    <CustomRouterLink :to="`/${props.collection.path}`">
      <VImg
        :src="props.collection.wallpaperDesktop"
      >
      </VImg>
    </CustomRouterLink>
    <TrackCard :collection="props.collection" :cardMode="props.collection.mode"/>
  </VCard>
</template>
