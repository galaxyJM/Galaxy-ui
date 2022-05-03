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
      <li v-for="item in items.length" :class="{ active: item - 1 === activeControl }">
      </li>

    </ul>

  </div>

</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, onUpdated, provide, ref, unref } from 'vue';
import Icon from '../components/Icon.vue';
const props = defineProps({
  trigger: String,
  autoplay: Boolean
})
let items = ref([])
let activeIndex = ref(1)
let hover = ref(false)
let initPosition = []
let activeControl = computed(() => {
  if (initPosition.length) {
    return initPosition.findIndex((item) => {
      return item.uid === items.value[activeIndex.value].uid
    })

  }
})
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
let throttledToLeft = throttle(toLeft, 350)
let throttledToRight = throttle(toRight, 350)
function toLeft() {
  items.value.unshift(items.value.pop())
  items.value.map((item, index) => {
    item.moveItem(index, activeIndex, 'left')
  })
}
function toRight() {
  items.value.push(items.value.shift())
  items.value.map((item, index) => {
    item.moveItem(index, activeIndex, 'right')
  })
}
function showup() {
  hover.value = true

}
function removeButton() {
  hover.value = false

}
onMounted(() => {
  initPosition = [...items.value]
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
    transition: all 500ms;

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
      background-color: white;
    }

    &.active {
      background-color: white;
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