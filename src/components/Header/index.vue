<template>
  <div>
    <!-- shortcut -->
    <div class="shortcut">
      <div class="w">
        <!-- short的顶部，left1表示左边第一个，right1表示右边第一个 -->
        <ul class="ulLeft fl">
          <li>
            <i style="font-family: icomoon; font-size: 12px"></i>
            <a href="#">北京</a>
          </li>
          <li class="logAndRegister">
            <router-link class="style-red" to="/register">注册</router-link>
            <router-link class="style-red" to="/login">登录</router-link>
          </li>
        </ul>
        <ul class="ulRight fr">
          <li><a href="#">我的订单</a></li>
          <li class="spacer"></li>
          <li><a href="#">我的购物车</a></li>
          <li class="spacer"></li>
          <li>
            <a href="#">我的京东</a>
            <i style="font-family: icomoon; font-size: 16px; line-height: 26px">
              
            </i>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">商家服务</a>
            <i style="font-family: icomoon; font-size: 16px; line-height: 26px">
              
            </i>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">企业采购</a>
            <i style="font-family: icomoon; font-size: 16px; line-height: 26px">
              
            </i>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">网站导航</a>
            <i style="font-family: icomoon; font-size: 16px; line-height: 26px">
              
            </i>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">手机京东</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- header -->
    <div class="header">
      <div class="w">
        <!-- logo module -->
        <div class="logo fl">
          <!-- h1提权 -->
          <h1>
            <a href="">京东</a>
          </h1>
        </div>
        <!-- search module -->
        <div class="search">
          <input type="text" class="fl" placeholder="请输入搜索内容" />
          <button class="fl">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang='less'>
// shortcut部分
.shortcut {
  height: 31px;
  line-height: 32px;
  background-color: rgb(227, 228, 229);
  font-size: 12px;
  li {
    float: left;
  }
}

.logAndRegister {
  a {
    padding: 0 0 0 3px;
  }
}

.spacer {
  width: 1px;
  height: 12px;
  background-color: #666;
  margin: 9px 12px 0;
}

// header部分
.header {
  height: 142px;
}

.header .w {
  position: relative;
  height: 100%;
}

.logo {
  height: 100%;
  padding: 0 15px;
  h1 {
    height: 100%;
    width: 200px;
    a {
      display: block;
      height: 100%;
      background: url(./images/logo.jpg);
      background-size: contain;
      background-repeat: no-repeat;
      font-size: 0;
    }
  }
}

.search {
  position: absolute;
  top: 20px;
  left: 710px;

  input {
    width: 426px;
    height: 41px;
    outline: none;
    border: 2px solid #e2231a;
  }
  button {
    width: 58px;
    height: 45px;
    background-color: #e1251b;
    border: 0;
    line-height: 45px;
    color: #fff;
  }
}
</style>