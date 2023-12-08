<template>
  <div
    class="box bg-white w-36px h-36px rounded-6px text-center leading-36px cursor-pointer"
  >
    <span class="rate">{{ rate }}</span>
    <span class="up hidden">hh</span>
  </div>
</template>

<script lang="ts" setup>
import { useScrollDistance } from "@/hooks/web/useScrollDistance";

const { rate } = useScrollDistance();
</script>

<style scoped lang="less">
.box:hover {
  @apply bg-primary;
  .rate {
    display: none;
  }
  .up {
    display: block;
  }
}
</style>
