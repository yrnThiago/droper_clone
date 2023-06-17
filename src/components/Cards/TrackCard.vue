<script lang="ts" setup>
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";

  const props = defineProps<{
    collection: any
    cardMode: number
    title?: string
  }>();
</script>

<template>
  <VRow v-if="cardMode == 5" class="mt-12" no-gutters>
    <VCol>
      <h2 style="opacity: 0.85;font-size: 60px;">{{ (!props.title) ? props.collection.titulo : props.title}}</h2>
    </VCol>
  </VRow>

  <VRow class="overflow-auto" no-gutters>
    <div class="d-inline-flex pb-12">
      <CustomRouterLink v-for="dr in props.collection.drops" :key="dr.id" :to="`d/${dr.id}/${dr.query}`">
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
