<template>
  <div>
    <h1>Dialog组件示例</h1>
    <Demo :component="Dialog1Demo"/>
  </div>
</template>

<script lang="ts">
import Dialog1Demo from "../components/Dialog1Demo.vue";
import Demo from "../components/Demo.vue";

console.log(Dialog1Demo);

export default {
  name: "ButtonDemo",
  components: {Dialog1Demo, Demo},
  setup() {
    return {Dialog1Demo};
  }
};
</script>
