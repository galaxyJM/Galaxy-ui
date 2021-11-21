<template>
  <div class="layout">
    <h1>拟物风格按钮</h1>
    <Button theme="likeObject">开始</Button>
    <h1>普通按钮</h1>
    <Button theme="button">开始</Button>
    <div class="color">
      <h1>不同颜色</h1>
      <div class="content">
        <Button color="red">开始</Button>
        <Button color="yellow">开始</Button>
        <Button color="green">开始</Button>
      </div>
      <div class="size">
        <h1>不同大小</h1>
        <div class="content">
          <Button size="big">开始</Button>
          <Button size="small">开始</Button>
        </div>
      </div>
    </div>
    <div>
      <h1>按钮禁用效果</h1>
      <Button disabled>禁止</Button>
    </div>
    <div>
      <h1>加载中效果</h1>
      <Button loading>加载中</Button>
    </div>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  name: "ButtonDemo",
  components: {Button}
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 20px;
}
.layout{
  display: flex;
  flex-direction: column;
  .color{
    display: flex;
    flex-direction: column;
  }
  .size{
    .content{
      display: flex;
      flex-direction: column;
    }
  }
}
</style>