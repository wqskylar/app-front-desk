<template>
  <div class="register-container">
    <div class="register">
      <h3>
        注册新用户
        <span class="go"><a>登陆</a></span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone" />
        <span class="error-msg" v-show="checkObj.phoneCheck"
          >请输入正确的手机号</span
        >
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="verification" />
        <button
          style="height: 38px; margin-left: 10px"
          @click="getVerification"
        >
          获取验证码
        </button>
        <span class="error-msg" v-show="checkObj.verificationCheck"
          >请获取验证码</span
        >
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          type="text"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="error-msg" v-show="checkObj.passwordCheck"
          >请输入密码</span
        >
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" v-model="password1" />
        <span class="error-msg" v-show="checkObj.password1Check"
          >两次密码不一致</span
        >
      </div>
      <div class="controls">
        <div class="agree">
          <input name="m1" type="checkbox" v-model="isCheck" />
          <span>同意协议</span>
        </div>
        <span class="error-msg" v-show="checkObj.agreeCheck">请勾选协议</span>
      </div>
      <div class="btn">
        <button @click="registerDone">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      verification: "",
      password: "",
      password1: "",
      isCheck: false,
      checkObj: {
        phoneCheck: false,
        verificationCheck: false,
        passwordCheck: false,
        password1Check: false,
        agreeCheck: false,
      },
    };
  },
  methods: {
    registerDone() {
      this.checkable();
      let checkArr = Object.values(this.checkObj);
      if (checkArr.every((v) => !v)) {
        this.$router.push({
          name: "login",
        });

        // await reqRegister()
        //   .then((res) => {
        //     this.$router.push({
        //       name: "login",
        //       params: {
        //         data: res.data,
        //       },
        //     });
        //   })
        //   .catch((e) => {
        //     throw e;
        //   });
      }
    },
    checkable() {
      // 手机号
      if (
        /^(13[0-9]|14[5-9]|15[0-35-9]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
          this.phone
        )
      ) {
        this.checkObj.phoneCheck = false;
      } else {
        this.checkObj.phoneCheck = true;
      }
      // 验证码
      if (this.verification) {
        this.checkObj.verificationCheck = false;
      } else {
        this.checkObj.verificationCheck = true;
      }
      // 密码
      if (this.password) {
        this.checkObj.passwordCheck = false;
      } else {
        this.checkObj.passwordCheck = true;
      }

      // 确认密码
      if (this.password === this.password1) {
        this.checkObj.password1Check = false;
      } else {
        this.checkObj.password1Check = true;
      }
      // 勾选协议
      if (this.isCheck) {
        this.checkObj.agreeCheck = false;
      } else {
        this.checkObj.agreeCheck = true;
      }
    },
    getVerification() {
      const min = 0;
      const max = 999999;
      const code = Math.floor(Math.random() * (max - min + 1)) + min;
      const codeStr = code.toString().padStart(6, "0");
      this.verification = codeStr;
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      .agree {
        margin-top: 0;
        transform: translateX(-75px);
      }

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }
}
</style>