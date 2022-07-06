<template>
  <div class="galaxy-Tabs">
    <div class="galaxy-Tabs-title" ref="container">
      <div class="galaxy-Tabs-title-item"
           :class="{selected: title === selected}"
           v-for="(title,index) in titles" @click="select(title)"
           :key="index"
           :ref="el => { if (title === selected) {selectedItem = el }}"
      >{{ title }}
      </div>
      <div class="galaxy-Tabs-title-indicator" ref="indicator"></div>
    </div>
    <div class="galaxy-Tabs-content">
      <component :is="currentTab" :key="currentTab.props.title"/>
    </div>
  </div>

</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed, onMounted, ref, watchEffect} from "vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);  //用一个ref去关联模板里的元素
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {width, left: left1} = selectedItem.value.getBoundingClientRect(); //返回元素的大小及其相对于视口的位置
        const {left: left2} = container.value.getBoundingClientRect();
        const left = left1 - left2;
        indicator.value.style.width = width + 'px';
        indicator.value.style.left = left + 'px';
      });
      //watchEffect可以在任意生命周期运行
      //所以为了避免在挂载之前就运行
      //就在onMounted之后执行watchEffect
    });
    const defaults = context.slots.default();
    console.log(defaults)
    const select = (title) => {
      context.emit('update:selected', title);
    };
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs标签内必须为Tab标签');
      }
    });
    const titles = defaults.map((tab) => {
      return tab.props.title;
    });  
    const currentTab = computed(() => {
      return defaults.find(tab => tab.props.title === props.selected);
    });

    return {defaults, titles, select, currentTab, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.galaxy-Tabs {
  &-title {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>