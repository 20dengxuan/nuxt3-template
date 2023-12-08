import zhCN from "./locales/zh";
import enUS from "./locales/en";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zhCN",
  messages: {
    enUS,
    zhCN,
  },
}));
