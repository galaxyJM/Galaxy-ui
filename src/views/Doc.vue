<template>
  <div class="topBox">
    <Topnav menuVisible class="Top-nav"/>
    <div class="content">
      <aside v-if="asideVisible" class="aside">
        <h2>开始使用</h2>
        <ol>
          <li>
            <router-link to="/doc/description">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/use">使用</router-link>
          </li>
        </ol>
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
          <li>
            <router-link to="/doc/carousel">走马灯组件</router-link>
          </li>
          <li>
            <router-link to="/doc/jsonview">JSON展示组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
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

<style lang="scss">
.topBox {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .router-link-active {
    color: #42b983;
  }

  a:hover {
    border-bottom: 3px solid #42b983;

  }

  .Top-nav {
    flex-shrink: 0;
    z-index: 10;
  }

  .content {
    flex-grow: 1;
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
    padding-top: 70px;
    padding-left: 20px;
    @media (max-width: 500px) {
      padding: 50px 0 0 0;
    }
    background: white;
  }
}

aside {
  background: #ffffff;
  width: 200px;
  padding: 70px 10px 10px;
  height: 100%;
  z-index: 9;
  text-align: center;


  h2 {
    margin-top: 20px;
  }

  ol {
    li {
      padding: 4px 0;
      margin-top: 5px;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    background: rgb(247, 249, 254);
  }
}

main {
  overflow: auto;
}

</style>