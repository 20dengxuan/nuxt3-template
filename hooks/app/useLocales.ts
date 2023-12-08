import { computed } from "vue";
import { zhCN, enUS, dateEnUS, dateZhCN } from "naive-ui";
import type { ConfigProviderProps, NLocale, NDateLocale } from "naive-ui";

const locales: Record<string, NLocale> = {
  zhCN,
  enUS,
};

const dateLocales: Record<string, NDateLocale> = {
  zhCN: dateZhCN,
  enUS: dateEnUS,
};

export function useLocale() {
  const { locale } = useI18n();

  const localeBind = computed<ConfigProviderProps>(() => {
    return {
      locale: locales[locale.value],
      dateLocale: dateLocales[locale.value],
    };
  });
  return { localeBind };
}
