<template>
  <router-view />
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import router from "./router";
const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false;
  }
});
provide('asideVisible', asideVisible);
</script>
