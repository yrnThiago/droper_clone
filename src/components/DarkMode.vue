<script setup lang="ts">
  import {ref, watch} from "vue";
  import { useTheme } from 'vuetify'

  const props = defineProps<{
    modelValue: boolean
  }>();

  const emits = defineEmits(["update:modelValue"]);

  const theme = useTheme();
  const dialog = ref(props.modelValue);
  const darkMode = ref(true);

  watch(dialog, (value: boolean) => {
    emits('update:modelValue', value)
  })

  const toggleDarkOrLightTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    if(theme.global.name.value == 'dark') darkMode.value = true;
    else darkMode.value = false;
  };

</script>

<template>
  <VDialog
    v-model="dialog"
    width="auto"
    style="background-color: rgba(0, 0, 0, 0.8) !important;"
  >
    <VCard class="align-center pa-8" rounded="xl" width="auto" elevation="12">
      <VRow no-gutters>
        <VIcon v-if="darkMode" icon="mdi-white-balance-sunny" size="64"></VIcon>
        <VIcon v-else icon="mdi-brightness-2" style="rotate: 140deg;" size="64"></VIcon>
      </VRow>

      <VRow no-gutters align="center" class="mt-6">
        <VSwitch v-model="darkMode" hide-details color="primary" :label=" (darkMode) ? 'Desabilitar dark mode' : 'Habilitar dark mode'" @click="toggleDarkOrLightTheme"></VSwitch>
      </VRow>

      <VRow no-gutters align="center">
        <v-btn variant="text" color="on-surface" @click="dialog = false">Fechar</v-btn>
      </VRow>

    </VCard>
  </VDialog>

</template>

<style>
  .v-overlay__scrim {
    opacity: 0.09;
  }
</style>
