<demo>fffff</demo>

<template>
  <button :class="{selected:value}">
    <span :class="{selected:value}" @click="toggle"></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props:{
    value: Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('update:value',!props.value)
    }
    return {toggle}
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 200px;
  height: 100px;
  border-radius: 50px;
  border: 0;
  position: absolute;
  background: rgb(191,191,191);
  &.selected{
    background: rgb(57,143,253);
  }
  span {
    display: block;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: white;
    position: relative;
    top: 0;
    left: 5px;
    transition: left 500ms linear;

    &.selected {
      left: 99px;

    }
  }
}
</style>