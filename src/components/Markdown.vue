<template>
  <div class="markdown-body" v-html="content">
  </div>
</template>

<script lang="ts">
import 'github-markdown-css';

export default {
  name: "Markdown",
  props: {
    content: {
      type: String
    }
  }
};
</script>
