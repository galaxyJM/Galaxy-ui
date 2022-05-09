<demo>
常规用法
</demo>

<template>
  <Switch :value="selected" @update:value="selected = $event" />
</template>

<script lang="ts" setup>
import Switch from '../lib/Switch.vue';
import { ref } from 'vue';
const selected = ref(false);
</script>