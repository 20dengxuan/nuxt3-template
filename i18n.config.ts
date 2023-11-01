import zh from "./locales/zh";
import en from "./locales/en";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: {
    en,
    zh,
  },
}));
