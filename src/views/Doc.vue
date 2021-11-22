<template>
  <div class="topBox">
    <Topnav class="Top-nav"/>
    <div class="content">
      <aside v-if="asideVisible" class="aside">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";

export default {
  name: "Doc",
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.topBox{
  display: flex;
  flex-direction: column;
  height: 100vh;
  .Top-nav {
    flex-shrink: 0;
    z-index: 10;
  }
  .content {
    flex-grow: 1;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  aside {
    flex-shrink: 0;
  }
  main {
    flex-grow: 1;
    padding: 100px;
    @media (max-width: 500px) {
      padding: 50px 0 0 0;
    }
    background: rgb(235,236,239);
  }
}

aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px 16px 16px;
  height: 100%;
  z-index: 9;
  h2 {
    margin-bottom: 4px;
  }
  ol {
    li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
main {
  overflow: auto;
}

</style>