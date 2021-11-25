<demo>
不同大小的按钮
</demo>

<template>
  <Button size="big">开始</Button>
  <Button size="normal">开始</Button>
  <Button size="small">开始</Button>
</template>

<script>
import Button from "../lib/Button.vue";
//请更换为 import {Button} from 'galaxy-ui-j'
export default {
  components: {Button}
}
</script>