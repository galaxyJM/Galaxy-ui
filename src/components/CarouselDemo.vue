<template>
  <div>
    <h1>走马灯组件示例</h1>
    <Demo :component="Carousel"/>
  </div>
</template>

<script lang="ts" setup>
import Carousel from '../examples/Carousel.vue';
import Demo from './Demo.vue';
</script>
