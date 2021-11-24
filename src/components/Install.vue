<template>
  <div class="markdown-body" v-html="install">
  </div>
</template>

<script>
import 'github-markdown-css'
import install from '../markdown/install.md'
export default {
  name: "Install",
  data(){
    return {install}
  }
}
</script>

<style scoped>
.markdown-body{
  background: rgb(235, 236, 239)
}
</style>