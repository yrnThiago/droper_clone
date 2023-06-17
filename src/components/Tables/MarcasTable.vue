<script lang="ts" setup>
  import CustomRouterLink from "../CustomComponents/CustomRouterLink.vue";
  import data from "@/api/data.json";

</script>

<template>
  <div class="container d-block">
    <div class="icons-marcas" style="overflow: scroll; overflow-y: hidden;">
      <div class="icons-limites d-inline-flex">
        <CustomRouterLink v-for="marca in data.marcas" :key="marca.id" :to="`${marca.url}`">
          <div class="icon" style="text-align: center; width: 88px; height: 100px; margin: 7px auto 0px;">
            <v-img
              :src="`${marca.logo}`"
              :alt="`${marca.nome}`"
              style="margin: 0 auto; border-radius: 50%; height: 68px !important; width: 68px !important; background-color: #000;"
            ></v-img>
            <h5 class="marca-titulo">{{marca.nome}}</h5>
          </div>
        </CustomRouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h5 {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.65;
    font: bold;
    overflow: hidden;
    white-space: nowrap;
  }

</style>
