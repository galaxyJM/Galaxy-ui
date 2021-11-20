<template>
  <button class="hui-button"
          :class="{[`hui-theme-${theme}`]:theme,putdown:putDown}"
          @mousedown="putdown"
          @mouseup="putdown">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "Button",
  props:{
    theme: String
  },
  setup(){
    const putDown = ref(false);
    const putdown = ()=>{
      putDown.value = !putDown.value
    }
    return {putDown,putdown}

  }
};
</script>

<style lang="scss">
$radius : 12px;
.hui-button {
  &.hui-theme-button {
    font-size: 48px;
    background: rgb(235,236,239);
    border: none;
    height: 116px;
    width: 300px;
    border-radius: 2em;
    box-shadow: 5px 5px 10px #bbbbbb, -3px -3px 10px #fff;

    &.putdown {
      box-shadow: inset 5px 5px 10px #bbb, inset -3px -3px 10px #ffffff;
    }
  }
}
</style>