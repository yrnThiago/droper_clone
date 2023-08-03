<script lang="ts" setup>
  import Anuncios from '@/components/CategoriasAnuncio.vue';
import PageTopNav from '@/components/PageTopNav.vue';
import SearchBar from '@/components/SearchBar.vue';
  import { ref } from "vue";

  const searchValue = ref("");
  const approvedAds = ref(8);
  const waitingApproveAds = ref(0);
  const waitingPhotosAds = ref(0);
  const disabledAds = ref(100);

  const showAdOptions = ref(false);

</script>

<template>
  <PageTopNav title="Anúncios" />

  <VContainer style="max-width: 980px; min-height: 99vh;">
    <SearchBar v-model="searchValue" rounded="lg" :allowEmptyString=false placeholder="Pesquise por ID ou título"/>

    <VCard class="mt-5" rounded="xl" height="90%">
      <div class="d-flex mt-3">
        <Anuncios title="aprovados" :adsCount="approvedAds" color="success" />
        <Anuncios title="aguardando aprovação" :adsCount="waitingApproveAds" color="warning" />
        <Anuncios title="aguardando fotos" :adsCount="waitingPhotosAds" color="error" />
        <Anuncios title="inativos" :adsCount="disabledAds" color="grey" />
      </div>

      <VCardSubtitle class="d-flex justify-center my-8">
        <p class="text-subtitle-1">Estes são os seus anúncios que foram <span class="font-weight-bold">aprovados como originais</span> pela equipe de Legit Check do Droper.</p>
      </VCardSubtitle>

      <VListItem class="my-3" style="cursor: pointer">
        <VRow no-gutters>
          <VCol cols="2">
            <VImg src="https://droper-media.us-southeast-1.linodeobjects.com/195202323417911.jpeg" width="110" rounded="0"></VImg>
          </VCol>

          <VCol cols="9" align-self="center">
            <p class="text-body-1 text-medium-emphasis">Stussy x Nike Camiseta Graphic White Black</p>
            <p class="text-h6 font-weight-bold text-high-emphasis">R$ 484,99</p>
            <v-sheet class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
              <p class="px-1">M</p>
            </v-sheet>
          </VCol>

          <VCol class="d-flex align-center">
            <VBtn class="text-disabled" variant="text" flat rounded icon="mdi-dots-vertical">


            </VBtn>
          </VCol>

          <VMenu v-model="showAdOptions" activator="parent" scrollable location="end bottom">
            <VCard width="200px" height="300px">
              <VList>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

                <VListItem @click="true" width="100%" class="text-start">
                  <div class="d-inline-flex">
                    <VIcon icon="mdi-pencil"/>
                    <p class="mx-4">Editar</p>
                  </div>
                </VListItem>

              </VList>

              <p class="text-end text-caption">#000000</p>
            </VCard>
          </VMenu>

        </VRow>
      </VListItem>

    </VCard>
  </VContainer>

</template>
