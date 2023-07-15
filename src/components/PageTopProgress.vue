<script setup lang="ts">
  import {ref, watch} from "vue";

  const props = defineProps<{
    modelValue: boolean
  }>();

  const emits = defineEmits(["update:modelValue"]);

  const updateModelValue = () => {
    emits('update:modelValue', loading.value);
  }

  const loading = ref(props.modelValue)
  const showProgress = () => {
    loading.value = true;

    setTimeout(() => (loading.value = false), 1000)
    updateModelValue()
  }
  // watch(loading, () => {
  //   if(!loading.value) return;

  //   setTimeout(() => (loading.value = false), 1000)
  //   updateModelValue()
  // });

</script>

<template>
  <VProgressLinear
    :v-model="loading"
    :active="loading"
    :indeterminate="loading"
    @change="showProgress"
    >
  </VProgressLinear>
</template>
