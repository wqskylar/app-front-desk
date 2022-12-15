<template>
  <div class="cart">
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-show="shopShow">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" value="xxxxx" />
          </li>
          <li class="cart-list-con2">
            <img src="./images/mobile01.png" />
            <div class="item-msg">
              Apple iPhone 14 (A2884) 128GB 紫色 支持移动联通电信5G 双卡双待手机
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ price }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="skuNum > 1 ? skuNum-- : (skuNum = 1)">-</a>
            <input
              autocomplete="off"
              type="text"
              minnum="1"
              class="itxt"
              v-model="skuNum"
              @change="changeSku"
            />
            <a class="plus" @click="skuNum++">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ totalPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteShop">删除</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="money-box" v-show="shopShow">
        <div class="sumprice">
          <em>总价（不含运费）</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqShopCart } from "@/api/index";
import "@/uuid/uuid";

export default {
  name: "ShopCart",
  data() {
    return {
      skuNum: 1,
      price: 0,
      shopShow: true,
    };
  },
  computed: {
    totalPrice() {
      return this.price * this.skuNum;
    },
  },
  methods: {
    async network() {
      return await reqShopCart(this.$route.query.skuNum);
    },
    changeSku(event) {
      const value = event.target.value;
      // 如果输入的内容不是正整数，就清空文本框
      if (!/^[1-9][0-9]*$/.test(value)) {
        this.skuNum = 1;
      }
    },
    deleteShop() {
      this.shopShow = false;
    },
  },
  mounted() {
    this.network().then((result) => {
      this.price = result.data.price;
      this.skuNum = result.data.skuNum;
    });
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;
          a {
            font-size: 16px;
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>