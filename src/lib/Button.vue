<template>
  <button class="galaxy-button"
          :class="classes"
          :disabled="disabled"
          @mousedown="putdown"
          @mouseup="putdown"
          @touchstart="putdown"
          @touchend="putdown">
    <span v-if="loading" class="loadingIcon"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed, ref} from "vue";

export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const putDown = ref(false);
    const putdown = () => {
      putDown.value = !putDown.value;
    };
    const classes = computed(() => {
      return {
        [`galaxy-theme-${props.theme}`]: props.theme,
        [`galaxy-color-${props.color}`]: props.color,
        [`galaxy-size-${props.size}`]: props.size,
        'putdown': putDown.value
      };
    });
    return {putDown, putdown, classes};

  }
};
</script>

<style lang="scss">
$radius: 12px;
.galaxy-theme-button {
  font-size: 24px;
  height: 50px;
  width: 130px;
  border: none;
  border-radius: 1em;
  margin: 10px;

  &.galaxy-theme-likeObject {
    background: rgb(235, 236, 239);
    box-shadow: 5px 5px 10px #bbbbbb, -3px -3px 10px #fff;

    &.putdown {
      box-shadow: inset 5px 5px 10px #bbb, inset -3px -3px 10px #ffffff;
    }
  }

  &.galaxy-theme-button {
    color: white;

    &.galaxy-color-blue {
      background: rgb(55, 119, 253);
    }

    &.galaxy-color-red {
      background: rgb(247, 95, 51);
    }

    &.galaxy-color-yellow {
      background: rgb(251, 209, 44);
    }

    &.galaxy-color-green {
      background: rgb(45, 210, 104);
    }
  }

  &.galaxy-size-big {
    font-size: 36px;
    height: 80px;
    width: 200px;
    border-radius: 2em;
  }
  &.galaxy-size-small {
    font-size: 12px;
    height: 40px;
    width: 100px;
    border-radius: 3em;
  }

  &.galaxy-theme-button{
    &[disabled]{
      color:grey;
      background: #c8c9cc;
      cursor: not-allowed;
    }   //属性选择器，选择有这个属性的元素
  }
  .loadingIcon {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-style: solid;
    border-width: 2px;
    animation: galaxy-spin 1s infinite linear;


    @keyframes galaxy-spin {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }

    }
  }

}
</style>