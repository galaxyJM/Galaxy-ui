<demo>
这是一个Tabs组件
</demo>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
//请更换为 import {Tabs} from 'galaxy-ui-j'
import Tab from "../lib/Tab.vue";
//请更换为 import {Tab} from 'galaxy-ui-j'
import {ref} from "vue";

export default {
  components: {Tab, Tabs},
  setup() {
    const selected = ref('导航1');
    return {selected};
  }
};
</script>