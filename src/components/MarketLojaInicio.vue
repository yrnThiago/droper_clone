<script lang="ts" setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import PageTopNav from "@/components/PageTopNav.vue";
  import ConfigItems from "@/components/Cards/ConfigItems.vue";

  import BottomNav from '@/components/BottomNav.vue';
  import Footer from "@/components/Footer.vue";

  import ApiService from "@/services/ApiService";

  const router = useRouter();

  const apiService = new ApiService();
  const apiEndpoint = 'public/auth';

  const logout = async() => {
    localStorage.removeItem('is-auth');
    await apiService.get('public/auth/logout');
    setTimeout(() => { router.push({ path: '/login' }); notification.show = false }, 1000)
  };

  const redirectTo = (path: string) => {
    router.push({ path })
  };

  const aboutItems = ref([
    {
      icon: 'mdi-widgets',
      title: 'Anúncios',
      value: 6,
      onClick: () => router.push({ path: '/market/anuncios' })
    },
    {
      icon: 'mdi-chart-line-variant',
      title: 'Vendas',
      value: 7,
      onClick: () => router.push({ path: '/vendas'})
    },
    {
      icon: 'mdi-map-marker',
      title: 'Endereços',
      value: 7,
      onClick: () => router.push({ path: '/enderecos'})
    },
    {
      icon: 'mdi-tag',
      title: 'Categorias',
      value: 8,
      onClick: () => router.push({ path: '/categorias'})
    },
    {
      icon: 'mdi-cog',
      title: 'Configurações',
      value: 9,
      onClick: () => router.push({ path: '/configuracoes'})
    },
    {
      icon: 'mdi-open-in-app',
      title: 'Ver vitrine',
      value: 8,
      onClick: () => router.push({ path: '/vitrine'})
    },
    {
      icon: 'mdi-exit-to-app',
      title: 'Sair',
      onClick: logout,
      value: 9,
    }
  ]);

  const additionalBtns = ref([
    {id: 1, icon: 'mdi-poll', route: '/feed'},
    {id: 2, icon: 'mdi-autorenew', route: '/calendario'}
  ]);

</script>

<template>
  <PageTopNav title="Sua loja" :additionalBtns="additionalBtns" />

  <VContainer style="max-width: 980px; min-height: 99vh;">
    <VCard height="220px" rounded="xl" class="seller__stats pa-3">
      <VRow no-gutters align-content="center" class="pa-2">

        <VCol cols="1">
          <VAvatar>
            <VImg src="https://cdn.discordapp.com/avatars/244933465634504712/16ddc2f5134e5b9a00c47ca9058d0159.webp?size=64"></VImg>
          </VAvatar>
        </VCol>

        <VCol cols="10">
          <h2>YRN SNEAKERS</h2>
        </VCol>

        <VCol cols="1">
          <VBtn flat href="/">
            <VIcon icon="mdi-arrow-right"></VIcon>
          </VBtn>
        </VCol>
      </VRow>

      <VRow no-gutters class="pa-2">
        <VCol cols="11">
          <h2 style="font-size: xx-large;">R$ 1000,00</h2>
          <p style="font-size: small;">R$ 2000,00 a liberar</p>
        </VCol>

        <VCol cols="1" align-self="center">
          <VBtn flat href="/">
          <VIcon icon="mdi-arrow-right"></VIcon>
        </VBtn>
        </VCol>
      </VRow>

      <VRow no-gutters class="pa-2">
        <VCol cols="2" xs="2" sm="2" md="1" lg="1">
          <h4>TAXA</h4>
          <h4>8%</h4>
        </VCol>

        <VCol cols="3" xs="2" sm="2" md="1" lg="1">
          <h4>VENDAS</h4>
          <h4>72</h4>
        </VCol>

        <VCol cols="2" xs="2" sm="2" md="1" lg="1">
          <h4>NOTA</h4>
          <h4>4,95</h4>
        </VCol>

        <VCol cols="4" xs="2" sm="2" md="2" lg="2">
          <h4>EM 30 DIAS</h4>
          <div class="d-flex">
            <h4>3</h4>
            <h4 class="text-success ml-1">+50%</h4>
          </div>
        </VCol>

      </VRow>
    </VCard>

    <VBtn block color="black" class="my-5">
      <VCardText class="text-center">ANUNCIAR PRODUTO</VCardText>
    </VBtn>

    <ConfigItems :items="aboutItems"/>

    <BottomNav/>
  </VContainer>

</template>

<style scoped>
</style>
