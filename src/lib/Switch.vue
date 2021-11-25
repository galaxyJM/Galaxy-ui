<template>
  <button class="galaxy-button" :class="{selected:value}">
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

<style lang="scss">
.galaxy-button {
  width: 100px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  background: rgb(191,191,191);
  &.selected{
    background: rgb(57,143,253);
  }
  span {
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: white;
    position: relative;
    top: 0;
    left: 2px;
    transition: left 500ms linear;

    &.selected {
      left: 50px;

    }
  }
}
</style>