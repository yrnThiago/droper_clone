<script setup lang="ts">
  import { DateType, TipoDeProduto } from "@/Interfaces/interfaces";
import {ref, watch} from "vue";


  const props = defineProps<{
    modelValue: number | null,
    array: DateType[] | TipoDeProduto[],
    size?: string,
    singleLine?: boolean,
    title?: string
  }>();

  const chipSelected = ref(props.modelValue);
</script>

<template>
  <h4 v-if="props.title"> {{ props.title }} </h4>
  <VChipGroup
    v-if="!singleLine"
    column
    v-model:model-value="chipSelected"
    @update:model-value="$emit('update:modelValue', $event)">
    <VChip v-for="item in props.array" :key="item.id" :value="item.id" :size="props.size" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
  </VChipGroup>

  <VRow v-else no-gutters class="overflow-auto">
    <div class="d-inline-flex">
      <VChipGroup
        class="single-line"
        v-model:model-value="chipSelected"
        @update:model-value="$emit('update:modelValue', $event)"
        >
        <VChip v-for="item in props.array" :key="item.id" :value="item.id" :size="props.size" rounded="lg" class="font-weight-bold text-uppercase">{{ item.titulo }}</VChip>
      </VChipGroup>
    </div>
  </VRow>

</template>

<style scoped>
.single-line {
  display: flex; /* Exibe os chips em uma única linha */
  flex-wrap: nowrap; /* Impede que os chips quebrem para a próxima linha */
}
</style>
