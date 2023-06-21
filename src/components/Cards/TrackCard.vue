<script lang="ts" setup>
  import { ref } from "vue";
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";

  const props = defineProps<{
    collection: any
    cardMode: number
    title?: string
  }>();

  let drops = ref([]);

  const collectionOrDrop = () => {
    if(props.collection.drops) drops.value = props.collection.drops;
    else drops.value = props.collection;
  }
  collectionOrDrop();

</script>

<template>
  <VRow v-if="props.collection.titulo && cardMode == 5 " class="mt-12" no-gutters>
    <VCol>
      <h2 style="opacity: 0.85;font-size: 60px;">{{ props.collection.titulo }}</h2>
    </VCol>
  </VRow>

  <VRow v-else-if="props.title && cardMode == 5 " class="mt-12" no-gutters>
    <VCol>
      <h2 style="opacity: 0.85;font-size: 60px;">{{ props.title }}</h2>
    </VCol>
  </VRow>

  <VRow class="overflow-auto" no-gutters>
    <div class="d-inline-flex pb-12">
      <CustomRouterLink v-for="dr in drops" :key="dr.id" :to="`d/${dr.id}/${dr.query}`">
        <VCol style="max-width: 170px; width: 170px; max-height: 170px; height: 170px; margin-top: -12px;">
          <VImg
            :src="`${dr.icone}`"
            :alt="`${dr.titulo}`">
          </VImg>
          <h5 class="text-start" style="font-size: 16px; line-height: 19px !important;">{{ dr.titulo }}</h5>
        </VCol>
      </CustomRouterLink>
    </div>
  </VRow>

</template>
