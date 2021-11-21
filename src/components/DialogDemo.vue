<template>
  <div class="layout">
    <h1>用visible属性打开</h1>
    <Button @click="toggle" size="small">点击打开提示框</Button>
    <Dialog v-model:visible="visible" :closeClickOverlay="true"
            :ok="ok"
            :cancel="cancel">
      <template v-slot:title>
        标题
      </template>
      <template v-slot:content>
        <p>qqqqqq</p>
        <p>wwwwww</p>
      </template>
    </Dialog>
    <h1>用一个函数打开</h1>
    <Button @click="openD" size="small">点击打开提示框</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
import {openDialog} from "../lib/openDialog";

export default {
  name: "DialogDemo",
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      return true;
    };
    const cancel = () => {
      return false;
    };
    //这是为了可以让用户从外部设置一些条件来控制取消和确定的时机
    //只有当外部返回true时，内部组件才能将dialog关闭
    const openD = () => {
      openDialog({
        title: '标题',
        content: '这是一段提示',
        closeClickOverlay: false,
        ok: () => {
          return true;
        },
        cancel: () => {
          return false;
        }

      });
    };
    return {visible, toggle, openD, ok, cancel};
  }
};
</script>

<style scoped>

</style>