<template>
    <div :class="{ animation: animationControl }" class="galaxy-carousel-item" :style="trans">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, onMounted, ref, unref } from 'vue';
const parentContext = inject('content')
let items = parentContext.items  //表示
let activeIndex = parentContext.activeIndex
let animationControl = ref(true)
let index = ref(0)
let trans = ref('transform: translateX(10px)')
let instance = getCurrentInstance()
function moveItem(index, activeIndex,direction) {
    if ((direction === 'left' && (unref(index) - unref(activeIndex)) === -1) 
    || (direction === 'right' && (unref(index) - unref(activeIndex)) === 2)) {
        animationControl.value = !animationControl.value
        setTimeout(() => {
            animationControl.value = !animationControl.value
        })
    }
    trans.value = `transform: translateX(${unref(index) - unref(activeIndex)}00%)`
}
onMounted(() => {
    items.value.push({ instance, moveItem, uid: instance.uid })
    index.value = items.value.findIndex((item) => {
        return item.uid === instance.uid
    })
    trans.value = `transform: translateX(${unref(index) - unref(activeIndex)}00%)`
})
</script>

<style lang="scss">
.galaxy-carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.animation {
        transition: transform 500ms;
    }


}
</style>