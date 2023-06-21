<script setup lang="ts">
  import TrackCard from "@/components/Cards/TrackCard.vue";

  const props = defineProps<{
    suggestionDrops: Array<any>
    title: string
  }>();
</script>

<template>
  <VRow class="mt-8" no-gutters>
    <VCard rounded="xl" width="98%">
      <VCardTitle>{{ props.title }}</VCardTitle>
      <TrackCard :collection="suggestionDrops" :cardMode=5 />
    </VCard>
  </VRow>
</template>
