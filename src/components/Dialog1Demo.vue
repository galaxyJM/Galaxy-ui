<demo>
1、ok函数和cancel函数用来控制确定和取消的逻辑，您可自行添加，只有返回值为True才能关闭Dialog
2、closeClickOverlay用来控制点击外部灰色区域是否关闭组件，false为不可关闭
</demo>

<template>
  <Button @click="openD" size="small">点击打开提示框</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";

export default {
  components: {Button, Dialog},
  setup() {
    const openD = () => {
      openDialog({
        title: '请填写您想要填写的标题内容',
        content: '请填写您想要填写的提醒内容',
        closeClickOverlay: false,
        ok: () => {
          return true;
        },
        cancel: () => {
          return false;
        }
      });
    };
    return {openD};
  }
};
</script>