<template>
  <div class="layout">
    <Button @click="toggle" size="small">点击打开提示框</Button>
    <Dialog v-model:visible="visible" :closeClickOverlay="true">
      <template v-slot:title>
        标题
      </template>
      <template v-slot:content>
        <p>qqqqqq</p>
        <p>wwwwww</p>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import {ref} from "vue";
import Button from "../lib/Button.vue";
export default {
  name: "DialogDemo",
  components: {Button, Dialog},
  setup(){
    const visible = ref(false);
    const toggle = ()=>{
      visible.value = !visible.value
    }
    return {visible,toggle}
  }
}
</script>

<style scoped>

</style>