<demo>
JSON展示组件
</demo>

<script lang="ts" setup>
import jsonView from "../lib/Json-view.vue";
import json from '../../public/test.json'
</script>

<template>
   <json-view :data="json"></json-view>
</template>

<style lang="scss">
</style>