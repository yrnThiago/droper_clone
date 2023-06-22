<script lang="ts" setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import DarkMode from "@/components/DarkMode.vue"

  const router = useRouter();
  const redirectTo = (path: string) => {
    router.push(path);
  };

  const showPopUpDarkMode = ref(false);
  const isLogged = ref(true);

  const userItems = ref([
  { route: "/home",
    icon: 'mdi-chart-line-variant',
    title: 'Vendas',
    value: 2,
  },
  { route: "/home",
    icon: 'mdi-tag',
    title: 'Market',
    value: 3,
  },
  { route: "/home",
    icon: 'mdi-message',
    title: 'Mensagens',
    value: 4,
  }
  ]);
  const aboutItems = ref([
  { route: "/home",
    icon: 'mdi-home',
    title: 'Início',
    value: 6,
  },
  { route: "/home",
    icon: 'mdi-newspaper-variant-multiple-outline',
    title: 'Notícias',
    value: 7,
  },
  { route: "/home",
    icon: 'mdi-puzzle',
    title: 'Como o Droper funciona?',
    value: 7,
  },
  { route: "/home",
    icon: 'mdi-credit-card-outline',
    title: 'Como comprar?',
    value: 8,
  },
  { route: "/home",
    icon: 'mdi-chart-line',
    title: 'Como vender?',
    value: 9,
  },
  { route: "/home",
    icon: 'mdi-storefront-outline',
    title: 'Nossa loja',
    value: 10,
  },
  { route: "/home",
    icon: 'mdi-alert-box',
    title: 'Fale conosco',
    value: 11,
  },
  { route: "/home",
    icon: 'mdi-autorenew',
    title: 'Trocas e devoluções',
    value: 12,
  },
  { route: "/home",
    icon: 'mdi-clipboard-text',
    title: 'Termos de Uso',
    value: 13,
  },
  { route: "/home",
    icon: 'mdi-clipboard-account',
    title: 'Políticas de pivacidade',
    value: 14,
  },
]);

</script>

<template>
  <VBtn v-if="!isLogged" class="mt-6 mb-3" block color="background-black">ENTRAR</VBtn>
  <VDivider class="pa-2"></VDivider>

  <v-list>
    <v-list-item class="pa-4" prepend-icon="mdi-magnify" title="Pesquisar" @click="redirectTo('/buscar')"></v-list-item>
  </v-list>
  <VDivider class="pa-2"></VDivider>

  <v-list v-if="isLogged">
    <v-list-item prepend-icon="mdi-account-circle-outline" title="Usuário" @click="redirectTo('/market')"></v-list-item>
    <VDivider class="pa-2"></VDivider>
    <v-list-item v-for="item in userItems" :key="item.value" :prepend-icon="item.icon" :title="item.title" @click="redirectTo(item.route)"></v-list-item>
    <VDivider class="pa-2"></VDivider>
    <v-list-item prepend-icon="mdi-fingerprint" title="Documentos" @click="redirectTo('/documentos')"></v-list-item>
    <v-list-item prepend-icon="mdi-brightness-2" title="Modo escuro" @click="showPopUpDarkMode = true"></v-list-item>
  </v-list>
  <VDivider class="pa-2"></VDivider>

  <v-list>
    <v-list-item v-for="item in aboutItems" :key="item.value" :prepend-icon="item.icon" @click="redirectTo(item.route)">
      <p class="ml-2">{{ item.title }}</p>
    </v-list-item>
  </v-list>
  <VDivider class="pa-2"></VDivider>

  <v-list>
    <v-list-item prepend-icon="mdi-brightness-2" @click="showPopUpDarkMode = true"><p class="ml-2">Modo escuro</p></v-list-item>
    <v-list-item prepend-icon="mdi-cog"  @click="redirectTo('/configuracoes')"><p class="ml-2">Configurações</p></v-list-item>
  </v-list>
  <VDivider class="pa-2"></VDivider>

  <div class="pt-10 pb-10"></div>

  <DarkMode v-if="showPopUpDarkMode" v-model="showPopUpDarkMode"/>

</template>

<style>
  .v-list-item-title {
    white-space: wrap !important;
  }
</style>
