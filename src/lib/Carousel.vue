<template>
  <div class="galaxy-carousel">
    <div class="galaxy-carousel-content">

      <slot></slot>

    </div>
    <button class="left-arrow" @click="toLeft">
      <Icon id="leftArrow" />
    </button>
    <button class="right-arrow" @click="toRight">
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
// 通过provide和inject进行父子组件之间的相互通信
provide('content', { items, activeIndex })
function toLeft() {
  if (activeIndex.value -1 < 0) {
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
onMounted(() => {
  
})





</script>

<style lang="scss">
.galaxy-carousel {
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    z-index: 999;

    &.left-arrow {
      top: 50%;
      left: 0;
    }

    &.right-arrow {
      top: 50%;
      right: 0;
    }
  }
}

.content {
  display: flex;
}

.galaxy-bottom {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;

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