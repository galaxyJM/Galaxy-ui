<template>
  <div>
    <h1>Tabs组件示例</h1>
    <Demo :component="Tabs1Demo"/>
  </div>
</template>

<script lang="ts">
import Tabs1Demo from '../components/Tabs1Demo.vue';
import Demo from './Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    };
  }
};
</script>
