<demo>
点一下试试看？
</demo>

<template>
  <Button @click="openD" size="small">点击打开提示框</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib";
//请更换为 import {Dialog} from 'galaxy-ui-j' 其余同理

export default {
  components: {Button, Dialog},
  setup() {
    const openD = () => {
      openDialog({
        title: '请填写您想要填写的标题内容',
        content: '请填写您想要填写的提醒内容',
        closeClickOverlay: false,
        //closeClickOverlay用来控制点击外部灰色区域是否关闭组件，false为不可关闭
        ok: () => {
          return true;
        },
        cancel: () => {
          return false;
        }
        //ok函数和cancel函数用来控制确定和取消的逻辑，您可自行添加，只有返回值为True才能关闭
      });
    };
    return {openD};
  }
};
</script>