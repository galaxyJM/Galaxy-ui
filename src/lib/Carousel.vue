<template>
  <div class="galaxy-carousel" @mouseover="showup" @mouseout="removeButton">
    <div class="galaxy-carousel-content">
      <slot></slot>
    </div>
    <button class="left-arrow" v-show="hover" @click="toLeft">
      <Icon id="leftArrow" />
    </button>
    <button class="right-arrow" v-show="hover" @click="toRight">
      <Icon id="rightArrow" />
    </button>
    <ul class="galaxy-bottom">
      <li v-for="item in items">
        <div></div>
      </li>
    </ul>
  </div>

</template>

<script lang="ts" setup>
import { onMounted, provide, ref, unref } from 'vue';
import Icon from '../components/Icon.vue';
const props = defineProps({
  trigger: String,
  autoplay: Boolean
})
let items = ref([])
let activeIndex = ref(1)
let hover = ref(false)
// 通过provide和inject进行父子组件之间的相互通信
provide('content', { items, activeIndex })
function toLeft() {
  if (activeIndex.value - 1 < 0) {
    return
  }
  activeIndex.value--
  items.value.map((item, index) => {
    item.moveItem(index, activeIndex)
  })
}
function toRight() {
  if (activeIndex.value + 1 >= items.value.length) {
    return
  }
  activeIndex.value++

  items.value.map((item, index) => {
    item.moveItem(index, activeIndex)
  })
}
function showup() { 
  hover.value = true

}
function removeButton(e) {
  hover.value = false

}
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
    transition: all 2s;

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
  }
}

.galaxy-carousel-content {
  height: 300px;
  display: flex;
  position: relative;
}
</style>