<script setup>
  import CollectionDrop from "@/components/Cards/CollectionDrop.vue"
  import {lancamentos} from "@/api/data.json"
</script>

<template>
  <CollectionDrop :collection="lancamentos" title="Lançamentos" :additionalBtns="[{title: 'CALENDÁRIO', route: '/calendario'}]"/>
</template>
