<template>
  <div>
    <h1>jsonview组件示例</h1>
    <Demo :component="jsonView"/>
  </div>
</template>

<script lang="ts" setup>
import jsonView from "../examples/jsonView.vue";
import Demo from "../components/Demo.vue";
</script>