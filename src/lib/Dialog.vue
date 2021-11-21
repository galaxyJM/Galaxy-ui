<template>
  <div class="hui-dialog" v-if="visible">
    <div class="hui-mask"></div>
    <div class="hui-wrapper" @click="oncloseClickOverlay">
      <div class="hui-wrapper-dialog">
        <header class="hui-wrapper-header">
          <button class="hui-wrapper-close" @click="close">
            <div class="hui-wrapper-icon">×</div>
          </button>
          <div class="hui-wrapper-title">标题</div>
        </header>
        <main class="hui-wrapper-main">
          <div class="hui-wrapper-content">
            <p>这是一个提示框</p>
          </div>
        </main>
        <footer class="hui-wrapper-footer">
          <div class="hui-wrapper-footer-button">
            <Button size="small">取消</Button>
            <Button size="small">确定</Button>
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
    closeClickOverlay:{
      type: Boolean,
      default: true
    }
  },
  setup(props,context){
    const close = ()=>{
      context.emit('update:visible',!props.visible)
    }
    const oncloseClickOverlay = () =>{
      if(props.closeClickOverlay){
        close()
      }
    }

    return {close,oncloseClickOverlay}
  }

};
</script>

<style lang="scss">
.hui-dialog {
  .hui-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .65);
  }

  .hui-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;

    .hui-wrapper-dialog {
      width: 520px;
      @media (max-width: 500px) {
        width: 300px;
      }
      border-radius: 5px;
      position: relative;
      top: 25vh;
      margin: 0 auto;
      background: white;

      .hui-wrapper-header {
        border-bottom: 1px solid #e8e8e8;

        .hui-wrapper-close {
          position: absolute;
          top: 0;
          right: 0;
          border: 0;
          background: #fff;

          .hui-wrapper-icon {
            width: 70px;
            height: 70px;
            font-size: 30px;
            line-height: 72px;
            font-style: normal;
            text-align: center;
          }

        }

        .hui-wrapper-title {
          padding: 25px 30px;
        }

      }

      .hui-wrapper-main {
        min-height: 10vh;
        border-bottom: 1px solid #e8e8e8;

        .hui-wrapper-content {
          line-height: 1.5;
          font-size: 14px;
          padding: 25px 30px;
        }
      }

      .hui-wrapper-footer {
        padding: 10px 15px;

        .hui-wrapper-footer-button {
          display: flex;
          justify-content: flex-end;
        }


      }
    }
  }
}
</style>