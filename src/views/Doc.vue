<template>
  <div class="topBox">
    <Topnav/>
    <aside v-if="asideVisible" class="aside">
      <h2>组件列表</h2>
      <ol>
        <li>Switch组件</li>
        <li>Button组件</li>
        <li>Dialog组件</li>
        <li>Tabs组件</li>
      </ol>
    </aside>
    <main>主要内容</main>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";
export default {
  name: "Doc",
  components: {Topnav},
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible}
  }
}
</script>

<style lang="scss" scoped>
.topBox{
  position: relative;
  .aside{
    position: absolute;
    background: skyblue;
    min-height: 50vh;
    ol{
      display: flex;
      flex-direction: column;
    }
  }
}

</style>