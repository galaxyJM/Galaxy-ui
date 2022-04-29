<template>
  <Switch :value="selected" @update:value="selected = $event"/>
  <p>sdfsdfsdf</p>
</template>

<script lang="ts" setup>
import {Switch} from '../../dist/my-lib.es.js';
import '../../dist/style.css'
import {ref} from 'vue';
const selected = ref(false);
</script>
<style>
</style>
