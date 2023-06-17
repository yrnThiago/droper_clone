<script lang="ts" setup>
  import {colecao} from "@/api/data.json";
  import TrackCard from "@/components/Cards/TrackCard.vue";

</script>

<template>
  <!-- Usando coleção apenas para teste -->
  <TrackCard title="Vistos Recentemente" :collection="colecao[2]" :cardMode="5"/>
</template>
