<template>
  <div>
    <Tabs v-model:selected="selected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {ref} from "vue";

export default {
  name: "TabsDemo",
  components: {Tab, Tabs},
  setup() {
    const selected = ref('导航1');
    return {selected};
  }
};
</script>

<style scoped>

</style>