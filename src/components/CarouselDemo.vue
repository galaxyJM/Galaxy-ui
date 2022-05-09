<template>
  <div>
    <h1>走马灯组件示例</h1>
    <Demo :component="Carousel1Demo"/>
  </div>
</template>

<script lang="ts" setup>
import Carousel1Demo from '../components/Carousel1Demo.vue';
import Demo from './Demo.vue';
</script>
