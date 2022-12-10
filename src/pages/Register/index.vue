<template>
  <div class="w">
    <!-- 登录页面 -->
    <div v-if="showLogin">
      <label>请输入手机号码：</label>
      <input type="text" v-model="phone" />
      <label>请输入密码：</label>
      <input type="password" v-model="password" />
      <button @click="login">登录</button>
    </div>

    <!-- 注册页面 -->
    <div v-else>
      <label>请输入手机号码：</label>
      <input type="text" v-model="phone" />
      <label>请输入密码：</label>
      <input type="password" v-model="password" />
      <label>请再次输入密码：</label>
      <input type="password" v-model="password2" />
      <button @click="register">注册</button>
    </div>

    <!-- 切换登录/注册页面的按钮 -->
    <button @click="showLogin = true">登录</button>
    <button @click="showLogin = false">注册</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      password: "",
      password2: "",
      showLogin: true,
    };
  },
  methods: {
    login() {
      // 在这里处理登录逻辑
    },
    register() {
      // 在这里处理注册逻辑
    },
  },
};
</script>

<style lang="less">
</style>
