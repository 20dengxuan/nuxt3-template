<template>
  <nav>
    <ul class="flex gap-30px">
      <li
        v-for="menu in options"
        :key="menu.key"
        class="menu-item"
        :class="{ 'active-menu-item': menu.key === activeKey }"
      >
        {{ menu.label }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "#vue-router";

const route = useRoute();

const activeKey = computed(() => route.name);

const options = [
  { label: "Home", key: "index" },
  { label: "Docs", key: "Docs" },
  { label: "Help", key: "Help" },
  { label: "My", key: "My" },
];
</script>

<style lang="less" scoped>
.menu-item {
  &.active-menu-item::after {
    content: "";
    @apply bg-primary h-3px w-full block;
  }
}
</style>
