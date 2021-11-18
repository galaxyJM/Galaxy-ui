<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from "vue";

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    provide('asideVisible',asideVisible)
  }
}
</script>
