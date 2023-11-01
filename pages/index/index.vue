<template>
  <div>
    {{ data }}
    <NButton @click="refresh()">get</NButton>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from "naive-ui";
import { recommend } from "@/api/exhibition";

definePageMeta({
  image: "https://st-image.3-e.cn/st-admin/Group_44_2-151618-515a.jpg",
});

const { data, refresh } = recommend();
</script>
