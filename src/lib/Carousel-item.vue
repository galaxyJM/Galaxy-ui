<template>
    <div :class="{ animation: animationControl }" class="galaxy-carousel-item" :style="trans">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, onMounted, ref, unref } from 'vue';
const parentContext = inject<any>('content')
let items = parentContext.items
let animationControl = ref(true)
let index = ref(0)
let trans = ref('transform: translateX(10px)')
let instance = getCurrentInstance()

function clearAnimation() {
    animationControl.value = !animationControl.value
    setTimeout(() => {
        animationControl.value = !animationControl.value
    },100)
}
function moveItem(index, activeIndex, oldActiveIndex) {
    let distance = getDistance(index, activeIndex)
    let oldDistance = getDistance(index, oldActiveIndex)
    if (Math.abs(distance) + Math.abs(oldDistance) >= items.value.length - 1) {
        clearAnimation()
    }
    if (distance !== undefined) {
        trans.value = `transform: translateX(${distance}00%)`
    }
}
function getDistance(index, activeIndex) {
    let middle = Math.floor(items.value.length / 2)
    let distance = unref(index) - unref(activeIndex)
    if (Math.abs(distance) > middle) {
        return distance > 0 ? -(items.value.length % Math.abs(distance)) : items.value.length % Math.abs(distance)
    } else if (Math.abs(distance) === middle) {
        return distance > 0 ? -distance : distance
    } else {
        return distance
    }
}
function initPos(index, activeIndex) {
    let distance = getDistance(index, activeIndex)
    if (distance !== undefined) {
        trans.value = `transform: translateX(${distance}00%)`
    }
}
console.log(3)
onMounted(() => {
    console.log(4)
    items.value.push({
        instance, moveItem, uid: instance.uid, initPos
    })
    index.value = items.value.findIndex((item) => {
        return item.uid === instance.uid
    })
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