<demo>
常规用法
</demo>

<script lang="ts" setup>
import Switch from '../lib/Switch.vue';
import { ref } from 'vue';
const selected = ref(false);
</script>

<template>
  <Switch :value="selected" @update:value="selected = $event" />
</template>

