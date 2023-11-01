<template>
  <LayoutNavbar />
  <Header />
  <main class="w-[1200px] m-auto">
    <slot></slot>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Header from "./components/LayoutHeader.vue";
import Footer from "./components/LayoutFooter.vue";
import LayoutNavbar from "./components/LayoutNavbar.vue";
</script>
