<script setup lang="ts">
  import {colecao} from "@/api/data.json";
  import UniqueDrop from "@/components/Cards/UniqueDrop.vue"
  import MultipleDrops from "@/components/Cards/MultipleDrops.vue"
  import CollectionDrop from "@/components/Cards/CollectionDrop.vue"
  import TrackCard from "@/components/Cards/TrackCard.vue"
</script>

<template>
  <div v-for="dr in colecao" :key="dr.id">
    <TrackCard v-if="dr.mode==5" :collection="dr" :cardMode="dr.mode"/>
    <MultipleDrops v-if="dr.mode==4" :collection="dr"/>
    <CollectionDrop v-if="dr.mode==2" :collection="dr"/>
    <UniqueDrop v-if="dr.mode==1" :collection="dr"/>
  </div>

</template>
