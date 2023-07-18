<script setup>
  import ImagesHome from "@/components/ImagesHome.vue"
  import MarcasTable from "@/components/Tables/MarcasTable.vue"
  import LancamentosTable from "@/components/Tables/LancamentosTable.vue"
  import BestSellersTable from "@/components/Tables/BestSellersTable.vue"
  import VistosRecentemente from "@/components/Tables/VistosRecentemente.vue"
  import IconsTable from "@/components/Tables/IconsTable.vue"
  import Banner from "@/components/Banner.vue"
  import CardDrops from "@/components/Cards/CardDrops.vue"
  import Footer from "@/components/Footer.vue"
  import data from "@/api/data.json"
  import TopNews from "@/components/Cards/TopNews.vue"

  import BottomNav from '@/components/BottomNav.vue';
</script>

<template>
  <ImagesHome/>
  <VContainer style="max-width: 1430px !important;">
    <MarcasTable/>
    <LancamentosTable/>
    <Banner/>
    <VistosRecentemente/>
    <BestSellersTable/>
    <IconsTable/>
    <CardDrops />
    <TopNews />
  </VContainer>
  <BottomNav/>

</template>
