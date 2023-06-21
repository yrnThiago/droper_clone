<script setup lang="ts">
  import CustomRouterLink from './CustomComponents/CustomRouterLink.vue';
</script>

<template>
  <VBottomNavigation class="d-flex d-sm-none mb-5 px-5" style="width: 80%; left: 10% !important;" density="comfortable" bg-color="rgba(28, 28, 33, 0.7)"  elevation="0" rounded="pill">
  <VRow no-gutters justify="space-between" align="center">
    <CustomRouterLink to="/">
      <VCol cols="2">
        <VIcon icon="mdi-lightning-bolt-circle" size="26"></VIcon>
      </VCol>
    </CustomRouterLink>

    <CustomRouterLink to="/sparks">
      <VCol cols="2">
        <VIcon icon="mdi-play-circle" size="26"></VIcon>
      </VCol>
    </CustomRouterLink>

    <CustomRouterLink to="/buscar">
      <VCol cols="2">
        <VIcon icon="mdi-magnify" size="26"></VIcon>
      </VCol>
    </CustomRouterLink>

    <CustomRouterLink to="/market">
      <VCol cols="2">
        <VIcon icon="mdi-tag" size="26"></VIcon>
      </VCol>
    </CustomRouterLink>

    <CustomRouterLink to="/market/loja/inicio">
      <VCol cols="2">
        <VIcon icon="mdi-account" size="26"></VIcon>
      </VCol>
    </CustomRouterLink>

    </VRow>
  </VBottomNavigation>

</template>
