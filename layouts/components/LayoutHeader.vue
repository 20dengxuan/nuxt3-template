<template>
  <header>
    <div v-if="meta.image">
      <img :src="meta.image" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const { meta } = useRoute();
</script>
