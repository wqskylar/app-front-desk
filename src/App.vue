<template>
  <div id="app">
    <h1>前台电商项目</h1>
    <h2>作者：wq</h2>
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
/* app统一设置 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 定义'icomoon'字体图标 */
@font-face {
  font-family: "icomoon";
  src: url("assets/fonts/icomoon.eot?hspkx4");
  src: url("assets/fonts/icomoon.eot?hspkx4#iefix") format("embedded-opentype"),
    url("assets/fonts/icomoon.ttf?hspkx4") format("truetype"),
    url("assets/fonts/icomoon.woff?hspkx4") format("woff"),
    url("assets/fonts/icomoon.svg?hspkx4#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
</style>
