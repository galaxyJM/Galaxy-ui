<template>
  <div class="markdown-body" v-html="use">
  </div>
</template>

<script>
import 'github-markdown-css'
import use from '../markdown/use.md'
export default {
  name: "Use",
  data(){
    return {use}
  }
}
</script>

<style scoped>
.markdown-body{
  background: rgb(235, 236, 239)
}
</style>