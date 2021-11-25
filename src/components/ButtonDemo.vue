<template>
  <div>
    <h1>一大堆Button组件正在来袭</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
    <Demo :component="Button6Demo"/>
  </div>
</template>

<script lang="ts">
import Button1Demo from "../components/Button1Demo.vue";
import Button2Demo from "../components/Button2Demo.vue";
import Button3Demo from "../components/Button3Demo.vue";
import Button4Demo from "../components/Button4Demo.vue";
import Button5Demo from "../components/Button5Demo.vue";
import Button6Demo from "../components/Button6Demo.vue";
import Demo from "../components/Demo.vue";

export default {
  name: "ButtonDemo",
  components: {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo, Button6Demo,Demo},
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo, Button6Demo};
  }

};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>