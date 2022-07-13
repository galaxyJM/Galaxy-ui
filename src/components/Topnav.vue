<template>
  <div>
    <nav class="nav">
      <svg class="icon" v-if="menuVisible" @click="toggleAside">
        <use xlink:href="#icon-mulu"></use>
      </svg>
      <router-link to="/" class="logo">
        <Icon class="icon-galaxy" id="galaxy" />
      </router-link>
      <div class="menu" v-if="asideVisible">
        <router-link to="/doc/description">开始使用</router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue";
import Icon from "./Icon.vue";
interface Props {
  menuVisible: Boolean
}
const { menuVisible = false } = defineProps<Props>() //为了定义props的默认值 根据官方文档
let asideVisible = inject<Ref<boolean>>('asideVisible');

const toggleAside = () => {
  if (asideVisible) {
    asideVisible.value = !asideVisible.value;
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: fixed;
  font-size: 15px;
  color: #102664;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 10;
  align-items: center;
  background: #F7F9FE;
  border-bottom: 1px solid #DCDFE6;
  .logo {
    margin-right: auto;
    margin-left: 10px;
  }

  .icon {
    display: none;
    font-size: 35px;
  }

  .icon-galaxy {
    display: block;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    :hover {
      color: #42b983;
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