<template>
  <article>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Setting class="fixed right-20 bottom-20" />
  </article>
</template>

<script lang="ts" setup>
import Header from "./header/index.vue";
import Setting from "./setting/index.vue";
</script>
