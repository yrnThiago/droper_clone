<script setup lang="ts">
  import { news } from "@/api/data.json";
import { ref } from "vue";

  const props = defineProps<{
    NewsInfo: {};
  }>();

  const newsProps = ref(props.NewsInfo);

</script>

<template>
  <span class="text-h2 font-weight-bold mb-8">Top News</span>
  <VRow no-gutters class="my-6">
    <div class="d-inline-flex overflow-auto">
      <div v-for="nw in news" :key="nw.id" class="d-flex mr-3 mb-3">
        <VCard rounded="xl" width="550" height="750" href="#">
          <VImg class="d-flex align-end" :src="nw.imagem" cover style="height: 750px; width: 550px;">
            <VCardText>
              <span class="text-h5 font-weight-bold">
                {{ nw.titulo }}
              </span>
            </VCardText>
          </VImg>
        </VCard>
      </div>
    </div>
  </VRow>

</template>
