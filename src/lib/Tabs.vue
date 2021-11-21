<template>
  <div class="hui-Tabs">
    <div class="hui-Tabs-title">
      <div class="hui-Tabs-title-item"
           :class="{selected: title === selected}"
           v-for="(title,index) in titles" @click="select(title)"
           :key="index">{{ title }}
      </div>
    </div>
    <div class="hui-Tabs-content">
      <component v-for="(tab,index) in defaults" :is="tab" :key="index"/>
    </div>
  </div>

</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed} from "vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
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

    return {defaults, titles, select, currentTab};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.hui-Tabs {
  &-title {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

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
  }

  &-content {
    padding: 8px 0;
  }
}
</style>