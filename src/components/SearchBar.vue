<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const props = defineProps<{
    modelValue: string
    rounded: string
    allowEmptyString: boolean
    allowClearable?: boolean
    allowRedirect?: boolean
    appendInnerIcon?: string
    placeholder?: string
  }>();

  const emits = defineEmits(["update:modelValue"]);

  const updateField = (value: string) => {
    emits('update:modelValue', value)
  }

  const searchTo = (value: string) => {
    if (value && props.allowRedirect || value != undefined && props.allowEmptyString) {
      router.push(`/buscar/${value}`);
    }
  };

  const router = useRouter();
  const searchPlaceholder = ref("Drops, produtos ou marcas");

</script>

<template>
  <VTextField
    density="compact"
    variant="solo"
    :clearable="props.allowClearable"
    :label="(props.placeholder)? props.placeholder : searchPlaceholder"
    :model-value="props.modelValue"
    prepend-inner-icon="mdi-magnify"
    single-line
    hide-details
    :rounded="props.rounded"
    :append-inner-icon="(appendInnerIcon && props.modelValue)? appendInnerIcon : ''"
    @click:append-inner="searchTo(props.modelValue)"
    @update:model-value="updateField"
    @keyup.enter="searchTo(props.modelValue)"
  ></VTextField>
</template>

<style>
</style>
