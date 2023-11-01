export default defineNuxtConfig({
  devServer: {
    port: 3111,
  },
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
  ],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  css: ["@unocss/reset/tailwind.css"],
  nitro: {
    devProxy: {
      "/exhibition": {
        target: "http://qufair.api.3-e.cn",
        changeOrigin: true,
        // prependPath: true,
      },
    },
    routeRules: {
      "/exhibition/**": {
        proxy: "http://qufair.api.3-e.cn/**",
      },
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/formatInTimeZone"]
          : [],
    },
  },
});
