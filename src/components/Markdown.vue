<template>
  <div class="markdown-body" v-html="content">
  </div>
</template>

<script lang="ts">
import 'github-markdown-css';
import {ref} from "vue";

export default {
  name: "Markdown",
  props: {
    path: {
      type: String
    }
  },
  setup(props) {
    const content = ref<string>('');
    import(props.path).then((result) => {
      content.value = result.default;
    });    //import动态引入是一个异步函数！
    return {content}
  }
};
</script>
