<demo>
不同颜色的按钮
</demo>

<template>
  <Button color="red">开始</Button>
  <Button color="yellow">开始</Button>
  <Button color="green">开始</Button>
</template>

<script>
import Button from "../lib/Button.vue";
//请更换为 import {Button} from 'galaxy-ui-j'
export default {
  components: {Button}
}
</script>