<template>
  <div class="home-page relative">
    <div class="h-1000 pt-70px">{{ scrollTop }}hhh</div>
    <div class="fixed top-90px" @click="setScrollOffset">{{ rate }}</div>
  </div>
</template>

<script lang="ts" setup>
import {} from "naive-ui";
import { useScrollDistance } from "@/hooks/web/useScrollDistance";

const { scrollTop, rate, setScrollOffset } = useScrollDistance();
</script>

<style lang="less" scoped>
.home-page {
  background-image: url("https://redefine.ohevan.com/images/wallhaven-wqery6-light.webp");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: all 0.3s ease 0s;
  // filter: blur(15px);
}
</style>
