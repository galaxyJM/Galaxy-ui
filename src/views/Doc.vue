<template>
  <div>
    <Topnav/>
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>Switch</li>
        <li>Button</li>
        <li>Dialog</li>
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

<style scoped>

</style>