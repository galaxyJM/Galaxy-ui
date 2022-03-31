<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode" size="small" color="green">隐藏代码</Button>
      <Button v-else @click="showCode" size="small" color="green">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>

  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref,h} from 'vue';
import Markdown from "./Markdown.vue";


export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    console.log(props.component.__sourceCode);
    const Prsim = (window as any).Prism;
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const showCode = () => codeVisible.value = true;
    const hideCode = () => codeVisible.value = false;
    const codeVisible = ref(false);
    return {
      html,
      codeVisible,
      showCode,
      hideCode
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;

  > h2 {
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

    :not(pre) > code[class*="language-"], pre[class*="language-"] {
      background: white;
    }

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>