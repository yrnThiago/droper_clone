<script lang="ts" setup>
  import {ref} from "vue";
  import {useRouter, useRoute} from "vue-router";

  import Menu from "@/components/Menu.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import SidebarItems from "./SidebarItems.vue";

  const router = useRouter();

  const drawer = ref(false);
  const SearchValue = ref("");

  const redirectTo = (path: string) => {
    router.push(path);
  };

  const rightSideBtns = ref([
    {
      title: 'Market',
      icon: 'mdi-tag',
      value: 0,
      route: '/market/loja/inicio'
    },
    {
      title: 'Vendas',
      icon: 'mdi-chart-line-variant',
      value: 0,
      route: '/vendas'
    },
    {
      title: 'Notificações',
      icon: 'mdi-bell',
      value: 0,
      route: '/notificacoes'
    }
  ])

</script>

<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    temporary
    class="primary"
    location="right"
    :width="300"
  >
    <v-list class="mx-3">
      <v-list-item class="mb-3">
        <img
        class="logo mt-3 justify-center"
        alt="logo"
        src="https://droper.app/angular/img/logo.png"
        :width="150"
        @click="redirectTo(`/home`), drawer=false"/>
        <template v-slot:append>
          <v-icon
            class="justify-end"
            flat
            variant="text"
            icon="mdi-window-close"
            @click.stop="drawer = !drawer"
            size="16px"
          ></v-icon>
        </template>
      </v-list-item>

      <SidebarItems />

    </v-list>
  </v-navigation-drawer>

  <VToolbar color="background-black">
    <VContainer fluid class="d-none d-sm-block">
      <VRow no-gutters justify="space-between">

        <VCol class="hidden-md-and-down ma-3" cols="1" align-self="center">
          <VImg
            alt="logo"
            src="../assets/logo.png"
            style="min-width=250px; width: 250px; height: 100%; cursor: pointer;"
            @click="redirectTo(`/home`)"/>
        </VCol>

        <VCol cols="7" sm="7" md="5" lg="3" align-self="center">
          <Menu />
          <v-btn flat @click="redirectTo(`/sparks`)">SPARKS</v-btn>
          <v-btn flat @click="redirectTo(`/calendario`)">CALENDÁRIO</v-btn>
          <v-btn flat position="absolute" @click="redirectTo(`/feed`)">FEED</v-btn>
        </VCol>

        <VSpacer class="hidden-sm-and-down"></VSpacer>

        <VCol class="hidden-sm-and-down" cols="3" md="3" lg="2" align-self="center">
          <div class="d-flex justify-end">
            <v-btn icon v-for="btn in rightSideBtns" :key="btn.value" @click="redirectTo(btn.route)">
              <v-icon>{{ btn.icon }}</v-icon>
              <v-tooltip
                activator="parent"
                location="bottom"
                >{{ btn.title }}</v-tooltip>
            </v-btn>
            <v-btn icon @click="redirectTo(`/market/loja/inicio`)">
              <v-icon>
                <v-avatar image="https://cdn.discordapp.com/avatars/244933465634504712/16ddc2f5134e5b9a00c47ca9058d0159.webp?size=64"></v-avatar>
              </v-icon>
            </v-btn>
          </div>
        </VCol>

        <VCol cols="4" md="2" lg="2" align-self="center">
          <SearchBar v-model="SearchValue" rounded="xl" appendInnerIcon="mdi-arrow-right" :allowClearable="false" :allowEmptyString="false" :allowRedirect="true"/>
        </VCol>

        <VAppBarNavIcon v-if="!drawer" @click.stop="drawer = !drawer"></VAppBarNavIcon>

      </VRow>
    </VContainer>

    <VContainer fluid class="d-block d-sm-none">
      <VRow class="mt-10" no-gutters justify="center" @click="redirectTo('/buscar')">
        <SearchBar v-model="SearchValue" rounded="xl" appendInnerIcon="mdi-arrow-right" :allowClearable="false" :allowEmptyString="false" :allowRedirect="true"/>
      </VRow>

      <VRow class="mt-3" no-gutters justify="center">
        <Menu />
        <v-btn flat @click="redirectTo(`/calendario`)">CALENDÁRIO</v-btn>
        <v-btn flat @click="redirectTo(`/feed`)">FEED</v-btn>
      </VRow>
    </VContainer>

  </VToolbar>
</template>

<style>
  @media (max-width: 600px) {
    .v-toolbar {
      height: 100px !important;
    }
  }

</style>
