<template>
  <div>
    <div class="footer">
      <div class="w">
        <div class="mod-service">
          <ul class="mod-service-items">
            <li class="mod-service-duo">
              <div class="mod-service-unit">
                <h5></h5>
                <p>品类齐全，轻松购物</p>
              </div>
            </li>
            <li class="mod-service-kuai">
              <div class="mod-service-unit">
                <h5></h5>
                <p>多仓直发，极速配送</p>
              </div>
            </li>
            <li class="mod-service-hao">
              <div class="mod-service-unit">
                <h5></h5>
                <p>正品行货，精致服务</p>
              </div>
            </li>
            <li class="mod-service-sheng">
              <div class="mod-service-unit">
                <h5></h5>
                <p>天天低价，畅选无忧</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mod-help">
          <div class="fl">
            <h5>购物指南</h5>
            <ul>
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行</li>
              <li>常见问题</li>
              <li>大家电</li>
              <li>联系客服</li>
            </ul>
          </div>
          <div class="fl">
            <h5>配送方式</h5>
            <ul>
              <li>上门自提</li>
              <li>211限时达</li>
              <li>配送服务查询</li>
              <li>配送收费标准</li>
              <li>海外配送</li>
            </ul>
          </div>
          <div class="fl">
            <h5>支付方式</h5>
            <ul>
              <li>货到付款</li>
              <li>在线支付</li>
              <li>分期付款</li>
              <li>公司转账</li>
            </ul>
          </div>
          <div class="fl">
            <h5>售后服务</h5>
            <ul>
              <li>售后政策</li>
              <li>价格保护</li>
              <li>退款说明</li>
              <li>返修/退换货</li>
              <li>取消订单</li>
            </ul>
          </div>
          <div class="fl">
            <h5>特色服务</h5>
            <ul>
              <li>夺宝岛</li>
              <li>DIY装机</li>
              <li>延保服务</li>
              <li>京东E卡</li>
              <li>京东通信</li>
              <li>京鱼座智</li>
            </ul>
          </div>
          <div class="moreDetails fl">
            <h5>京东自营覆盖区县</h5>
            <div>
              <p>
                京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。
              </p>
              <p class="details">
                <a class="fr" href="#">查看详情</a>
                <i class="fr" style="font-family: icomoon; font-size: 16px"
                  ></i
                >
              </p>
            </div>
          </div>
        </div>
        <div class="copy-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less">
.footer {
  height: 568px;
}

.mod-service {
  height: 42px;
  padding: 30px 0;
  border-bottom: 1px solid #dedede;
  li {
    width: 300px;
    height: 42px;
    float: left;
    h5 {
      position: absolute;
      left: 0;
      top: 0;
      float: left;
      width: 36px;
      height: 42px;
      // font-size: 0;
    }
    p {
      float: left;
      font-size: 18px;
      line-height: 42px;
    }
  }
}

.mod-service-unit {
  position: relative;
}

.mod-service-duo {
  h5 {
    background: url(./images/footer_spriteGraph.png) no-repeat;
    background-position: 0 -192px;
  }
}
.mod-service-kuai {
  h5 {
    background: url(./images/footer_spriteGraph.png) no-repeat;
    background-position: -42px -192px;
  }
}
.mod-service-hao {
  h5 {
    background: url(./images/footer_spriteGraph.png) no-repeat;
    background-position: -82px -192px;
  }
}
.mod-service-sheng {
  h5 {
    background: url(./images/footer_spriteGraph.png) no-repeat;
    background-position: -123px -192px;
  }
}

.mod-service-items {
  height: 42px;
}

.mod-service-unit {
  position: relative;
  height: 42px;
  width: 180px;
  margin: 0 35px;
  padding-left: 45px;
}

.mod-help {
  height: 100%;
  div {
    width: 198px;
    margin: 0 0 0 2px;
    h5 {
      margin: 0 0 5px 0;
      color: #666;
      line-height: 19px;
      font: bold 14px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
        "\5B8B\4F53", sans-serif;
    }
    ul li {
      height: 22px;
      color: #666;
      font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
        "\5B8B\4F53", sans-serif;
    }
  }
}

.moreDetails {
  h5 {
    text-align: center;
  }
  div {
    p {
      font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
        "\5B8B\4F53", sans-serif;
    }
  }
}

.details {
  height: 18px;
  a {
    display: block;
    height: 100%;
    font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
      "\5B8B\4F53", sans-serif;
  }
  i {
    height: 18px;
  }
}
</style>