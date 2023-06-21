<script setup>
  import {ref} from "vue";
  import PageTopNav from "@/components/PageTopNav.vue";
  import Vendas from "@/components/Vendas.vue";
  import BottomNav from '@/components/BottomNav.vue';
  import SearchBar from "@/components/SearchBar.vue";
  import {iniciados, waitPagamento, pagos, problemas} from "@/api/vendas.json";

  const searchValue = ref("");
  const payedIsOpen = ref(false);
  const onPaymentIsOpen = ref(false);
  const askedIsOpen = ref(false);
  const issueIsOpen = ref(false);

  const payedMessage = ref("São vendas com recebimento confirmado. Agora você pode enviar o produto para o cliente.");
  const onPaymentMessage = ref("Após confirmar disponibilidade do produto e definir preço e frete um botão de pagamento será enviado para o comprador. Esse estado representa que o cliente iniciou o processo de pagamento mas você ainda não recebeu a confirmação de pagamento. Esse processo pode demorar!");
  const askedMessage = ref("São interessados em comprar seu produto no Droper. Responda se o produto está disponível o mais rápido possível.");
  const issueMessage = ref("São compradores que identificaram problemas em suas compras. Resolva esses problemas o mais rápido possível.");


</script>

<template>

  <PageTopNav title="Vendas" />

  <VContainer style="max-width: 1025px !important; min-height: 99vh;">
    <VRow no-gutters>
      <SearchBar v-model="searchValue" rounded="lg" allowClearable :allowEmptyString="false" :allowRedirect="false" placeholder="Pesquise por ID, rastreio, produto ou status"/>
    </VRow>

    <VRow no-gutters>
      <Vendas v-if="pagos.length >= 1" v-model="payedIsOpen" backgroundColor="success" title="Pagos" icon="mdi-check" :message="payedMessage" :info="pagos"/>
      <Vendas v-if="waitPagamento.length >= 1" v-model="onPaymentIsOpen" backgroundColor="warning" title="Em pagamento" icon="mdi-information" :message="onPaymentMessage" :info="waitPagamento"/>
      <Vendas v-if="iniciados.length >= 1" v-model="askedIsOpen" backgroundColor="primary" title="Solicitados" icon="mdi-information" :message="askedMessage" :info="iniciados"/>
      <Vendas v-if="problemas.length >= 1" v-model="issueIsOpen" backgroundColor="error" title="Problemáticos" icon="mdi-close" :message="issueMessage" :info="problemas"/>
    </VRow>

    <VRow no-gutters justify="center" class="mt-14">
      <VBtn to="/vendas/relatorio">
        <p>HISTÓRICO</p>
      </VBtn>
    </VRow>

    <VRow no-gutters justify="center" class="mt-3">
      <p>Mostra todas vendas em ordem cronológica</p>
    </VRow>

  </VContainer>

  <BottomNav/>
</template>
