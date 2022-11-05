<template>
  <div id="app">
    <!-- <h1>前台电商项目</h1>
    <h2>作者：wq</h2> -->
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* app统一设置 */
#app {
  font-family: Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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

/* 公共样式 */
.fl {
  float: left;
}

.fr {
  float: right;
}

.w {
  width: 1200px;
  margin: 0 auto;
}

.style-red {
  color: #c81623;
}
/* 通配设置 */
* {
  margin: 0;
  padding: 0;
}

li {
  height: 100%;
  list-style-type: none;
}

a {
  color: #999999;
  text-decoration: none;
}

i {
  font-style: normal;
}
</style>
