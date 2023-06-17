<script setup>
  import CollectionDrop from "@/components/Cards/CollectionDrop.vue"
  import {bestsellers} from "@/api/data.json"
</script>

<template>
  <CollectionDrop :collection="bestsellers" title="Mais Vendidos" id="bestsellers"/>
</template>
