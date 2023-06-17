<script setup lang="ts">

  const props = defineProps<{
    to: string | Object
  }>();

</script>

<template>
  <RouterLink :to="props.to" class="custom-link">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.custom-link {
  text-decoration: none;
  color: inherit;
}
</style>
