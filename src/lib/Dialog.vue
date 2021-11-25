<template>
  <div class="galaxy-dialog" v-if="visible">
    <div class="galaxy-mask" @click="oncloseClickOverlay"></div>
    <div class="galaxy-wrapper">
      <div class="galaxy-wrapper-dialog">
        <header class="galaxy-wrapper-header">
          <button class="galaxy-wrapper-close" @click="close">
            <div class="galaxy-wrapper-icon">×</div>
          </button>
          <div class="galaxy-wrapper-title">
            <slot name="title"></slot>
          </div>
        </header>
        <main class="galaxy-wrapper-main">
          <div class="galaxy-wrapper-content">
            <slot name="content"></slot>
          </div>
        </main>
        <footer class="galaxy-wrapper-footer">
          <div class="galaxy-wrapper-footer-button">
            <Button size="small" @click="cancel">取消</Button>
            <Button size="small" @click="ok">确定</Button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Dialog",
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', !props.visible);
    };
    const oncloseClickOverlay = () => {
      if (props.closeClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.()) {
        close();
      }   //表示ok存在且返回值为true
    };
    const cancel = () => {
      if (props.cancel?.()) {
        close();
      }   //表示ok存在且返回值为true
    };
    return {close, oncloseClickOverlay,ok,cancel};
  }

};
</script>

<style lang="scss">
.galaxy-dialog {
  .galaxy-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .65);
    z-index: 10;
  }

  .galaxy-wrapper {
    position: fixed;
    left: 35%;
    top: 25%;
    z-index: 11;

    .galaxy-wrapper-dialog {
      width: 520px;
      @media (max-width: 500px) {
        width: 300px;
      }
      border-radius: 5px;
      position: relative;
      margin: 0 auto;
      background: white;

      .galaxy-wrapper-header {
        border-bottom: 1px solid #e8e8e8;

        .galaxy-wrapper-close {
          position: absolute;
          top: 0;
          right: 0;
          border: 0;
          background: #fff;

          .galaxy-wrapper-icon {
            width: 70px;
            height: 70px;
            font-size: 30px;
            line-height: 72px;
            font-style: normal;
            text-align: center;
          }

        }

        .galaxy-wrapper-title {
          padding: 25px 30px;
        }

      }

      .galaxy-wrapper-main {
        min-height: 10vh;
        border-bottom: 1px solid #e8e8e8;

        .galaxy-wrapper-content {
          line-height: 1.5;
          font-size: 14px;
          padding: 25px 30px;
        }
      }

      .galaxy-wrapper-footer {
        padding: 10px 15px;

        .galaxy-wrapper-footer-button {
          display: flex;
          justify-content: flex-end;
        }


      }
    }
  }
}
</style>