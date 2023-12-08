<template>
  <header class="header-bg">
    <Logo class="flex-none" />
    <Menu />
  </header>
</template>

<script lang="ts" setup>
import Logo from "./Logo/index.vue";
import Menu from "./Menu/index.vue";
</script>

<style lang="less" scoped>
.header-bg {
  background: linear-gradient(
    120deg,
    rgba(247, 135, 54, 0.208) 0,
    rgba(54, 125, 247, 0.208) 100%
  );

  @apply z-99999 h-70px w-full fixed flex justify-between items-center
    px-100px;
}
</style>
