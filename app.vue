<template>
  <NConfigProvider
    :theme="lightTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider, lightTheme, zhCN, dateZhCN } from "naive-ui";

import type { GlobalThemeOverrides } from "naive-ui";
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#1890ff",
    primaryColorHover: "#1890ff",
    primaryColorPressed: "#1890ff",
    primaryColorSuppl: "#1890ff",
  },
};
</script>
