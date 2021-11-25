<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" />
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1Demo.vue';
import Demo from './Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo
    };
  }
};
</script>

<style lang="scss" scoped>
</style>