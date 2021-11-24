<template>
   <div class="markdown-body" v-html="description">
   </div>
</template>

<script>
import 'github-markdown-css'
import description from '../markdown/description.md'
export default {
  name: "Description",
  data(){
    return {description}
  }
}
</script>

<style scoped>
    .markdown-body{
  background: rgb(235, 236, 239)
    }
</style>