<template>
  <div>
    <h1>CarouselDemo组件示例</h1>
    <Demo :component="Carousel1Demo"/>
  </div>
</template>

<script lang="ts" setup>
import Carousel1Demo from '../components/Carousel1Demo.vue';
import Demo from './Demo.vue';
import Icon from './Icon.vue';
</script>
