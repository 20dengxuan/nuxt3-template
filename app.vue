<template>
  <NConfigProvider
    v-bind="{ ...localeBind }"
    :theme="lightTheme"
    :theme-overrides="themeOverrides"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider, lightTheme } from "naive-ui";
import type { GlobalThemeOverrides } from "naive-ui";
import { useCustomI18n } from "@/locales";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#a31f34",
    primaryColorHover: "#a31f34",
    primaryColorPressed: "#a31f34",
    primaryColorSuppl: "#a31f34",
  },
};

const { localeBind } = useCustomI18n();
</script>
