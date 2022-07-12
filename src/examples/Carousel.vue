<demo>
这是一个走马灯组件
</demo>

<script lang="ts" setup>
import Carousel from "../lib/Carousel.vue";
import CarouselItem from "../lib/Carousel-item.vue";
</script>

<template>
    <Carousel>
      <carousel-item v-for="item in 4" :key="item">
        <h3>{{item}}</h3>
      </Carousel-item>
    </Carousel>
</template>

<style lang="scss">
.galaxy-carousel-item h3 {
  color: black;
  font-size: 100px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.galaxy-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.galaxy-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>