<script setup>
  import {ref} from "vue";

  const buttonsDesktop = ref([
    {className: "comocomprar", title: "Como comprar", prependIcon: "", route: "/comocomprar", backgroundColor: "background-black"},
    {className: "comovender", title: "Como vender", prependIcon: "", route: "/comovender", backgroundColor: "background"},
    {className: "instagram", title: "Instagram", prependIcon: "mdi-instagram", href: "https://www.instagram.com/droper/", backgroundColor: "background-black"}
  ]);

  const buttonsMobile = ref([
    {className: "saibamais", title: "Saiba Mais", appendIcon: "mdi-arrow-right", route: "/saibamais", backgroundColor: "background-black"},
    {className: "instagram", title: "Instagram", prependIcon: "mdi-instagram", href: "https://www.instagram.com/droper/", backgroundColor: "background-black"}
  ]);

</script>

<template>
  <VCard
    class="mt-10"
    width="100%"
    height="auto"
    rounded="xl"
  >

    <VRow no-gutters justify="space-around" class="d-none d-sm-flex">
      <VCol cols="7" sm="5" md="5" lg="4" align-self="center">
        <div class="d-flex flex-column">
          <h1 class="d-none d-sm-flex" style="font-size: 2em;">Segurança e Autenticidade</h1>
          <h3 style="font-size: 1.17em; margin-top: 1rem;">Sua compra e venda é 100% garantida no Droper</h3>
          <VCardActions>
            <VBtn
              v-for="btn in buttonsDesktop"
              :key="btn.tilte"
              :class="`bg-${btn.backgroundColor} ${btn.className}`"
              rounded="0"
              :ripple=false
              flat
              density="compact"
              elevation="4"
              :to="btn.route"
              :href="btn.href"
              :prepend-icon="btn.prependIcon"
              ><p>{{ btn.title }}</p>
            </VBtn>
          </VCardActions>
        </div>
      </VCol>

      <VCol cols="3" align-self="center">
          <v-img class="ma-2" src="https://droper.app/angular/img/aboutus/seguranca_tenis.png" style="width: 250px; height: 250px;"></v-img>
      </VCol>
    </VRow>

    <!-- start banner xs  -->

    <VRow no-gutters class="d-flex d-sm-none">
      <VCol cols="4">
        <v-img src="https://droper.app/angular/img/aboutus/seguranca_tenis.png" style="width: 160px; height: 220px;"></v-img>
      </VCol>

      <VCol cols="8" align-self="center">
        <h2>Sua compra é 100% segura no Droper</h2>

        <VRow no-gutters justify="start" class="mt-4">
          <VCol cols="8">
            <VBtn
            v-for="btn in buttonsMobile"
            :key="btn.tilte"
            :class="`bg-${btn.backgroundColor} ${btn.className} mb-2`"
            rounded="0"
            :ripple=false
            flat
            density="compact"
            elevation="4"
            :to="btn.route"
            :href="btn.href"
            :prepend-icon="btn.prependIcon"
            :append-icon="btn.appendIcon"
            ><p>{{ btn.title }}</p>
          </VBtn>
          </VCol>
        </VRow>

      </VCol>
    </VRow>

    <!-- end banner xs  -->

  </VCard>
</template>

<style>
 .instagram {
  background: linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%) !important;
 }
</style>
