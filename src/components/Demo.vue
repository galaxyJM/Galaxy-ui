<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" theme="likeObject" size="small" @click="hideCode">隐藏代码</Button>
      <Button v-else theme="likeObject" size="small" @click="showCode">查看代码</Button>
    </div>
    <div v-if="codeVisible" class="demo-code">
      <highlightjs :code="props.component.__sourceCode" language="js" />
    </div>

  </div>
</template>

<script lang="ts">
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  components: {
    highlightjs: hljsVuePlugin.component
  }
};
</script>

<script lang="ts" setup>
import Button from '../lib/Button.vue';
import { ref } from 'vue';

const props = defineProps({
  component: Object
});
const showCode = () => codeVisible.value = true;
const hideCode = () => codeVisible.value = false;
const codeVisible = ref(false);
</script>

<style lang="scss">
$border-color: #d9d9d9;

.demo {
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid black;
  }

  &-component {
    padding: 10px;
  }

  &-actions {
    padding: 10px 10px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    pre {
      code.hljs {
        font-family: Consolas, 'Courier New', monospace;
      }
    }

    font-size: 20px;
  }
}
</style>