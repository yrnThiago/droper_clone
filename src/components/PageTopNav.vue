<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { AdditionalBtns } from "@/Interfaces/interfaces.js"

  const router = useRouter();

  const props = defineProps<{
    title: string
    additionalBtns?: AdditionalBtns[];
  }>();

</script>

<template>
  <VCard height="40px" class="d-flex align-center text-center">
    <VRow no-gutters justify="space-between">
      <VCol cols="1" class="d-flex justify-start pa-4" align-self="center">
        <VIcon icon="mdi-arrow-left" size="18px" @click="router.push('/market')" ></VIcon>
      </VCol>

      <VCol cols="4" sm="3">
        <VCardText>
          <h3 class="font-weight-bold">{{ props.title }}</h3>
        </VCardText>
      </VCol>

      <VCol cols="1" class="d-flex justify-end" align-self="center">
        <VIcon v-for="btn in props.additionalBtns" :key="btn.id" class="mx-3" :icon="btn.icon" @click="router.push(btn.route)"></VIcon>
      </VCol>

    </VRow>
  </VCard>
</template>
