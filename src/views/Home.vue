<template>
    <div>
      <Topnav/>
      <h1>徽UI</h1>
      <h2>一个美丽的UI框架</h2>
      <div class="actions">
        <a>github</a>
        <router-link to="/doc">开始</router-link>
      </div>
    </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: {Topnav}
}
</script>

<style lang="scss" scoped>

</style>