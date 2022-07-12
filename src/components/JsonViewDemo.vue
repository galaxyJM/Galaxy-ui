<template>
  <div>
    <h1>jsonview组件示例</h1>
    <Demo :component="Jsonview"/>
  </div>
</template>

<script lang="ts" setup>
import Jsonview from "../examples/Jsonview.vue";
import Demo from "../components/Demo.vue";
</script>