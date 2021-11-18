<template>
  <div>
    <nav class="nav">
      <div class="wrapper">

          <svg class="icon" aria-hidden="true" @click="toggleAside">
            <use xlink:href="#icon-mulu"></use>
          </svg>

        <div class="logo">logo</div>
      </div>
      <div class="menu">
        <span>主页</span>
        <span>文档</span>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "Topnav",
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: rgb(243, 243, 243);

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      margin-left: 10px;
    }

    .icon {
      display: none;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    span {
      margin-right: 10px;
    }
  }
}

@media (max-width: 500px) {
  .nav {
    justify-content: center;
    .menu {display: none;}
    .icon{display: block!important;}
  }
}

</style>