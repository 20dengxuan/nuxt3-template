<template>
  <div>
    <LayoutNavbar></LayoutNavbar>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import LayoutNavbar from "./components/LayoutNavbar.vue";
</script>
