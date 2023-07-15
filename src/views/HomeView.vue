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

  import BottomNav from '@/components/BottomNav.vue';

  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ];

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

  </VContainer>
  <BottomNav/>

</template>
