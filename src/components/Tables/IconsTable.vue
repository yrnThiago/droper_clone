<script setup>
  import {ref} from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const iconsOptions = ref([
    {
      title: 'Ler tag',
      icon: 'mdi-qrcode-scan',
      route: "/legitcheck/reader"
    },
    {
      title: 'Anunciar',
      icon: 'mdi-arrow-up',
      route: "/anunciar/type/2"
    },
    {
      icon: 'mdi-message',
      title: 'Mensagens',
      route: "/mensagens",
    },
    {
      icon: 'mdi-cart',
      title: 'Compras',
      route: "/compras",
    },
    {
      title: 'Market',
      icon: 'mdi-tag',
      route: "/market"
    },
    {
      title: 'Vendas',
      icon: 'mdi-chart-line-variant',
      route: "/vendas"
    },
    {
      icon: 'mdi-heart',
      title: 'Favoritos',
      route: "/favoritos",
    },
    {
      icon: 'mdi-puzzle',
      title: 'Como funciona',
      route: "/comofunciona",
    }
  ]);
</script>

<template>
  <VRow no-gutters class="pb-1 mt-12 overflow-x-auto overflow-y-hidden">
    <div class="d-flex">
      <div class="ma-2" v-for="icon in iconsOptions" :key="icon.title" style="max-width: 88px; max-height: 94px; text-align: center; cursor: pointer;" @click="router.push(`${icon.route}`)">
        <div class="d-flex bg-background-black" style="margin: 0 auto; width: 68px; height: 68px; border-radius: 50%;">
            <v-icon color="on-secondary" :icon="`${icon.icon}`" size="28px" style="margin: auto;"></v-icon>
        </div>
        <h5 style="font-size: 14px; text-align: center; padding: 14px 0 0 0; overflow: hidden; white-space: nowrap;">{{ icon.title }}</h5>
      </div>
    </div>
  </VRow>
</template>
