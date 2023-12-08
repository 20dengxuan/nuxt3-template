import type { UserShortcuts } from "unocss";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const SHORTCUTS = [["xy-center", "flex items-center justify-center"]];

const THEME = {
  PRIMARY: "#a31f34",
};

export default defineConfig({
  shortcuts: SHORTCUTS as UserShortcuts<any>,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: THEME.PRIMARY,
    },
  },
});
