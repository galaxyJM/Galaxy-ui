<template>
  <div>
    <nav class="nav">
      <svg class="icon" @click="toggleAside">
        <use xlink:href="#icon-mulu"></use>
      </svg>
      <div class="logo">
        <Icon class="icon-galaxy" id="galaxy"/>
      </div>
      <div class="menu">
        <span>文档</span>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
import Icon from "./Icon.vue";

export default {
  name: "Topnav",
  components: {Icon},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  },


};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: fixed;
  font-size: 20px;
  color: #102664;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 10;
  align-items: center;
  background: #F7F9FE;
  .logo {
    margin-right: auto;
    margin-left: 10px;
  }

  .icon {
    display: none;
    font-size: 30px;
  }
  .icon-galaxy{
    display: block;
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

    .menu {
      display: none;
    }

    .logo {
      margin: 0 auto;
    }

    .icon {
      display: block !important;
      margin-left: 10px;
    }
  }
}

</style>