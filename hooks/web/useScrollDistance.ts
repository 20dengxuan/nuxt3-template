import { ref, computed } from "vue";
import { useEventListener } from "@vueuse/core";

export function useScrollDistance() {
  const scrollTop = ref<number>(0);
  const clientHeight = ref<number>(0);
  const scrollHeight = ref<number>(0);

  if (process.client) {
    useEventListener(document, "scroll", () => {
      scrollTop.value = document.documentElement.scrollTop;
      clientHeight.value = document.documentElement.clientHeight;
      scrollHeight.value = document.documentElement.scrollHeight;
    });
  }

  const rate = computed(
    () =>
      parseInt(
        String(
          (scrollTop.value / (scrollHeight.value - clientHeight.value)) * 100,
        ),
      ) || 0,
  );

  const setScrollOffset = () => {
    document.documentElement.scrollTop = 0;
  };
  return { scrollTop, rate, setScrollOffset };
}
