<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img src="./images/mobile01.png" />
          </div>
          <div class="right-info">
            <p class="title">{{ name }}</p>
            <p class="attr">{{ name }}数量:{{ skuNum }}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link class="sui-btn btn-xlarge" to="/detail"
            >查看商品详情</router-link
          >
          <router-link to="/shopCart">去购物车结算 > </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddShopCar",
  data() {
    return {
      skuNum: "", // 初始值为空
      name: "Apple iPhone 14 (A2884) 128GB 紫色 支持移动联通电信5G 双卡双待手机",
      news: "【限时活动】指定iPhone14领券立减700元，加0.01元购原厂AppleCare+服务，为您的新机保驾护航！！!",
    };
  },
  created() {
    // 在组件创建时获取skuNum的值
    this.skuNum = this.$route.params.skuNum;
  },
};
</script>

<style lang="less" scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;

  .cart-complete {
    width: 1200px;
    margin: 0 auto;

    h3 {
      font-weight: 400;
      font-size: 16px;
      color: #6aaf04;
      padding-top: 15px;
      padding-bottom: 15px;
      margin: 0;

      .icon-pc-right {
        background-color: #fff;
        border: 2px solid #6aaf04;
        padding: 3px;
        margin-right: 8px;
        border-radius: 15px;
      }
    }

    .goods {
      overflow: hidden;
      padding: 10px 0;

      .left-good {
        float: left;

        .left-pic {
          border: 1px solid #dfdfdf;
          width: 60px;
          float: left;
          img {
            width: 60px;
            height: 60px;
          }
        }

        .right-info {
          color: #444;
          float: left;
          margin-left: 10px;

          .title {
            width: 100%;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
          }

          .attr {
            color: #aaa;
          }
        }
      }

      .right-gocart {
        float: right;

        a {
          padding: 7px 36px;
          font-size: 15px;
          line-height: 22px;
          color: #333;
          background-color: #eee;
          text-decoration: none;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }

        a:hover {
          background-color: #f7f7f7;
          border: 1px solid #eaeaea;
        }

        a:active {
          background-color: #e1e1e1;
          border: 1px solid #d5d5d5;
        }

        .btn-danger {
          background-color: #e1251b;
          color: #fff;
        }

        .btn-danger:hover {
          background-color: #e1251b;
        }
      }
    }
  }
}
</style>