<script setup lang="ts">
  import {ref} from "vue";
  import VendasDialog from "@/components/VendasDialog.vue";
  import { VendaInfo } from "@/Interfaces/interfaces";

  const props = defineProps<{
    modelValue: boolean
    backgroundColor: string
    title: string
    icon: string
    message: string
    info: VendaInfo[]
  }>();

  const isOpen = ref(false);
  const showPopUpInfo = ref(props.modelValue);
  const showPopUpSale = ref(false);

</script>

<template>
  <VCard class="mt-6" :color="props.backgroundColor" rounded="t-lg" width="100%">
    <VRow no-gutters class="pa-2" justify="space-between">

      <VCol class="d-flex" cols="10" lg="2" align-self="center">
        <v-sheet class="d-inline-flex bg-background-black" rounded="circle">
          <p class="px-2 mt-1" style="font-size: 14px;">{{props.info.length}}</p>
        </v-sheet>
        <h3 class="ml-3">{{props.title}}</h3>
      </VCol>

      <VCol class="d-flex" lg="1" align-self="center">
        <VIcon :icon="props.icon" @click="showPopUpInfo = !showPopUpInfo"></VIcon>
        <VSpacer></VSpacer>
        <VIcon v-if="!isOpen" icon="mdi-menu-down" class="pr-3" @click="isOpen = true"></VIcon>
        <VIcon v-else icon="mdi-menu-up" class="pr-3" @click="isOpen = false"></VIcon>
      </VCol>

      <VDialog
          v-model="showPopUpInfo"
          width="80%"
        >
          <VCard>
            <VCardTitle class="pl-6">{{ props.title }}</VCardTitle>
            <VCardText>
              <p>{{ props.message }}</p>
            </VCardText>
            <VCardActions class="justify-end">
              <v-btn variant="text" @click="showPopUpInfo = false">Ok</v-btn>
            </VCardActions>
          </VCard>
        </VDialog>

    </VRow>
  </VCard>

  <VCard v-if="isOpen" rounded="b-xl" width="100%" height="auto">
    <VList>

      <VListItem v-for="item in props.info" :key="item.id" class="pa-4">
        <VRow no-gutters>
          <VAvatar :image="item.Produto.fotoPrincipal" size="90" rounded="lg" @click="showPopUpSale = true"></VAvatar>
          <VCol class="pl-3">
            <h4>{{item.Produto.nome}}</h4>
            <h2>{{ `${item.Produto.moeda} ${item.Produto.preco}` }}</h2>
            <v-sheet class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
              <p class="px-1" style="font-size: 14px;">{{item.Produto.TamanhoProdutoSelecao[0]}}</p>
            </v-sheet>
          </VCol>
        </VRow>

        <VDialog
          v-model="showPopUpSale"
          width="800"
        >
          <VCard class="pb-16" color="background" height="800">
            <VContainer>
              <VRow no-gutters justify="space-between">

              <VCol cols="5">
                <div class="d-flex align-center">
                  <VIcon class="mr-5" size="18" icon="mdi-arrow-left" @click="showPopUpSale = false"></VIcon>
                  <div>
                    <h3>{{ `nº ${item.id}` }}</h3>
                    <h4>Detalhes da venda</h4>
                  </div>
                </div>
              </VCol>

              <VCol cols="1" align-self="center">
                <div class="d-flex align-center justify-end">
                  <VIcon icon="mdi-tag"></VIcon>
                  <h5>TAGS</h5>
                </div>
              </VCol>
              </VRow>

              <VRow no-gutters>
              <VSheet class="mt-8" rounded="xl" width="100%">
                <VContainer fluid>
                  <VRow no-gutters>
                    <VAvatar :image="item.Produto.fotoPrincipal" size="90" rounded="lg" @click="showPopUpSale = true"></VAvatar>
                    <VCol class="pl-3">
                      <h4>{{item.Produto.nome}}</h4>
                      <h2>{{ `${item.Produto.moeda} ${item.Produto.preco}` }}</h2>
                      <v-sheet class="d-inline-flex mr-2 mb-3 bg-secondary" rounded>
                        <p class="px-1" style="font-size: 14px;">{{item.Produto.TamanhoProdutoSelecao[0]}}</p>
                      </v-sheet>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>

              <VSheet class="mt-4" rounded="xl" width="100%">
                <VContainer fluid>
                  <VRow no-gutters justify="center">
                    <VIcon icon="mdi-alert-circle-outline"></VIcon>
                  </VRow>

                  <VRow no-gutters justify="center" class="text-center">
                    <h3>Aguarde o comprador efetuar o pagamento.</h3>
                  </VRow>

                  <VRow no-gutters justify="center" class="text-center">
                    <p>O comprador tem 48 horas para finalizar o pagamento. Você pode cancelar essa venda e disponibilizar a outro comprador interessado.</p>
                  </VRow>

                </VContainer>
              </VSheet>

              <VSheet class="mt-4" rounded="xl" width="100%">
                <VContainer fluid>
                  <VRow no-gutters>
                    <h3>Compra</h3>
                  </VRow>

                  <VRow class="text-center pa-8" no-gutters justify="space-around">
                    <VCol cols="3">
                      <VSheet class="d-inline-flex" rounded="sm" :style="{ backgroundColor: item.statusInteresse.cor }">
                        <h4 class="text-uppercase">{{item.statusInteresse.status}}</h4>
                      </VSheet>
                      <h6>STATUS</h6>
                      <p class="mt-4">{{`${item.Produto.moeda} ${item.Produto.preco}`}}</p>
                      <h6>PRODUTO</h6>
                    </VCol>

                    <VCol cols="3">
                      <p>{{item.nomeComprador}}</p>
                      <h6>COMPRADOR</h6>
                      <p class="mt-4">{{`${item.Produto.moeda} ${item.precoFrete}`}}</p>
                      <h6>FRETE</h6>
                    </VCol>

                  </VRow>

                  <VRow class="mt-4" no-gutters justify="center">
                    <VCol class="text-center">
                      <h3>{{`${item.Produto.moeda} ${item.Produto.preco}`}}</h3>
                      <h4>VOCÊ RECEBE (TAXA 10%)</h4>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>

              <VSheet class="mt-4" rounded="xl" width="100%">
                <VContainer fluid>
                  <VRow no-gutters>
                    <h3>Opções</h3>
                  </VRow>

                  <VList>
                    <VListItem to="/">
                      <p class="text-error">Cancelar venda</p>
                    </VListItem>

                    <VListItem to="/">
                      <p>Como vender no Droper</p>
                    </VListItem>

                  </VList>
                </VContainer>
              </VSheet>

              <VRow class="mt-6" no-gutters justify="center">
                <p>{{ `Venda criada no dia ${item.dataHoraCriacao}` }}</p>
              </VRow>

              </VRow>
            </VContainer>
          </VCard>
        </VDialog>

      </VListItem>
    </VList>
  </VCard>

  <VCard v-else class="mx-1" rounded="b-pill" width="100%" height="8">
  </VCard>

</template>
