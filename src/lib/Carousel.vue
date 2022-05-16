<template>
  <div class="galaxy-carousel" @mouseover="showup" @mouseout="removeButton">
    <div class="galaxy-carousel-content">
      <slot></slot>
    </div>
    <button class="left-arrow" v-show="hover" @click="throttledToLeft">
      <Icon id="leftArrow" />
    </button>
    <button class="right-arrow" v-show="hover" @click="throttledToRight">
      <Icon id="rightArrow" />
    </button>
    <ul class="galaxy-bottom">
      <li v-for="item in items.length" :class="{ active: item - 1 === activeIndex }" @click="jumpToNext(item - 1)">
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, ref } from 'vue';
import Icon from '../components/Icon.vue';
const props = defineProps({
  trigger: String,
  autoplay: Boolean
})
let items = ref([])
let activeIndex = ref(0)
let hover = ref(false)
// 通过provide和inject进行父子组件之间的相互通信
provide('content', { items, activeIndex })
function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    fn(...args)
    timer = setTimeout(() => {
      timer = null
    }, delay)
  }
}
function jumpToNext(target) {
  let oldActiveIndex = activeIndex.value
  let time = Math.abs(target - oldActiveIndex)
  if (target > oldActiveIndex) {
    let index = 0
    while (index < time) {
      setTimeout(() => {
        toRight()
      }, index * 150)
      index++
    }
  } else if (target < oldActiveIndex) {
    let index = 0
    while (index < time) {
      setTimeout(() => {
        toLeft()
      }, index * 150)
      index++
    }
  }
}
let throttledToLeft = throttle(toLeft, 300)
let throttledToRight = throttle(toRight, 300)
function toLeft() {
  let oldActiveIndex = activeIndex.value
  activeIndex.value--
  if (activeIndex.value === -1) {
    activeIndex.value = items.value.length - 1
  }
  items.value.map((item, index) => {
    item.moveItem(index, activeIndex, oldActiveIndex)
  })

}
function toRight() {
  let oldActiveIndex = activeIndex.value
  activeIndex.value++
  items.value.map((item, index) => {
    item.moveItem(index, activeIndex, oldActiveIndex)
  })
  if (activeIndex.value >= items.value.length) {
    activeIndex.value = 0
  }

}
function showup() {
  hover.value = true

}
function removeButton() {
  hover.value = false

}

onMounted(() => {
  items.value.forEach((item, index) => {
    item.initPos(index, activeIndex.value)
  })
})
</script>

<style lang="scss">
.galaxy-carousel {
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    z-index: 999;
    border: none;
    background-color: gainsboro;
    border-radius: 50%;
    transition: all 200ms ease;

    .icon {
      font-size: 30px;
    }

    &.left-arrow {
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    &.right-arrow {
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
}

.content {
  display: flex;
}

.galaxy-bottom {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  li {
    width: 20px;
    height: 20px;
    background: #cabfb0;
    margin-left: 20px;
    border-radius: 50%;
    position: relative;


    &:hover {
      background-color: grey;
    }

    &.active {
      background-color: grey;
      transition: all 500ms;
    }
  }
}

.galaxy-carousel-content {
  height: 300px;
  display: flex;
  position: relative;
}
</style>