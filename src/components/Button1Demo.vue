<demo>
各类button组件
</demo>

<template>
  <ul class="buttons">
    <li>
      <Button theme="likeObject">开始</Button>
      <Button theme="button">开始</Button>
    </li>
    <li><Button color="red">开始</Button>
      <Button color="yellow">开始</Button>
      <Button color="green">开始</Button>
    </li>
    <li>
      <Button size="big">开始</Button>
      <Button size="normal">开始</Button>
      <Button size="small">开始</Button>
    </li>
    <li><Button disabled>禁止</Button>
      <Button loading>加载中</Button>
    </li>
  </ul>
</template>

<script setup>
import Button from "../lib/Button.vue";
</script>