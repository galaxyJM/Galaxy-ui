<template>
  <div class="home">
    <Topnav/>
    <div class="actions">
      <h1>银河UI</h1>
      <h2>一个小而美的UI框架</h2>
      <div class="links">
        <a class="a">Github</a>
        <router-link class="b" to="/doc">开始</router-link>
      </div>
    </div>
  </div>
  <div class="description">
    <ul>
      <li>
        <Icon id="vue"/>
        <h3>基于Vue 3.0</h3>
        <p>全新又快速</p>
      </li>
      <li>
        <Icon id="ts"/>
        <h3>基于TypeScript</h3>
        <p>稳定又安全</p>
      </li>
      <li>
        <Icon id="light"/>
        <h3>代码简洁</h3>
        <p>好看又好用</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
import Icon from "../components/Icon.vue";

export default {
  name: "Home",
  components: {Icon, Topnav}
}
</script>

<style lang="scss" scoped>
$all-color: #102664;

.home {
  background: #F7F9FE;

  .actions {
    color: $all-color;
    padding: 100px 0;
    font-size: 24px;
    @media (min-width: 800px) {
      font-size: 36px;
    }
    @media (min-width: 1200px) {
      font-size: 48px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .links {
      margin: 50px;
      font-size: 20px;
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        border-radius: 4px;
        background: #1D4194;
        color: white;
        padding: 10px 15px;
        margin: 20px 20px;
      }

      .b {
        padding: 10px 29px;
      }
    }
  }
}

.description {
  width: 400px;
  position: fixed;
  top: 450px;
  left: calc(50vw - 200px);
  margin: 0 auto;
  background: white;
  box-shadow: 5px 5px 10px #F5F8FE,
  -5px -5px 10px #F5F8FE;
  @media (min-width: 800px) {
    width: 800px;
    top: 500px;
    left: calc(50vw - 400px);
  }
  @media (min-width: 1200px) {
    width: 1200px;
    top: 550px;
    left: calc(50vw - 600px);
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px 150px;
      grid-template-rows: 1fr auto;
      .icon {
        width: 64px;
        height: 64px;
        grid-area: icon;
      }
      .h3 {
        grid-area: title;
        font-size: 28px;
      }
      .p {
        grid-area: text;
      }
    }
  }


}
</style>