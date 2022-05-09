<demo>
这是一个走马灯组件
</demo>

<template>
    <Carousel>
      <carousel-item v-for="item in 4" :key="item">
        <h3>{{item}}</h3>
      </Carousel-item>
    </Carousel>
</template>
<script lang="ts" setup>
import Carousel from "../lib/Carousel.vue";
import CarouselItem from "../lib/Carousel-item.vue";
</script>
<style lang="scss">
.galaxy-carousel-item h3 {
  color: grey;
  font-size: 100px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
</style>