<template>
  <div>
    我是{{ categoryList }}
    <div class="nav-top">
      <div class="nav w">
        <div class="nav-left fl" @mouseover="showList">
          <div class="dt">全部商品分类</div>
          <div class="dd" v-show="true">
            <ul>
              <li>
                <a href="">家用电器</a>
                <span>/</span>
                <a href="">数码</a>
                <span>/</span>
                <a href="">运营商</a>
              </li>
              <li>
                <a href="">电脑</a>
                <span>/</span>
                <a href="">运营商</a>
                <span>/</span>
                <a href="">数码</a>
              </li>
              <li>
                <a href="">电脑</a>
                <span>/</span>
                <a href="">办公</a>
                <span>/</span>
              </li>
              <li>
                <a href="">家居</a>
                <span>/</span>
                <a href="">家具</a>
                <span>/</span>
                <a href="">家装</a>
                <span>/</span>
                <a href="">厨具</a>
              </li>
              <li>
                <a href="">男装</a>
                <span>/</span>
                <a href="">女装</a>
                <span>/</span>
                <a href="">童装</a>
                <span>/</span>
                <a href="">内衣</a>
              </li>
              <li>
                <a href="">美妆</a>
                <span>/</span>
                <a href="">个户清洁</a>
                <span>/</span>
                <a href="">宠物</a>
              </li>
              <li>
                <a href="">女鞋</a>
                <span>/</span>
                <a href="">箱包</a>
                <span>/</span>
                <a href="">钟表</a>
                <span>/</span>
                <a href="">珠宝</a>
              </li>
              <li>
                <a href="">男鞋</a>
                <span>/</span>
                <a href="">运动</a>
                <span>/</span>
                <a href="">户外</a>
              </li>
              <li>
                <a href="">房产</a>
                <span>/</span>
                <a href="">汽车</a>
                <span>/</span>
                <a href="">汽车用品</a>
              </li>
              <li>
                <a href="">母婴</a>
                <span>/</span>
                <a href="">玩具乐器</a>
              </li>
              <li>
                <a href="">食品</a>
                <span>/</span>
                <a href="">酒类</a>
                <span>/</span>
                <a href="">生鲜</a>
                <span>/</span>
                <a href="">特产</a>
              </li>
              <li>
                <a href="">艺术</a>
                <span>/</span>
                <a href="">鲜花</a>
                <span>/</span>
                <a href="">农资绿植</a>
              </li>
              <li>
                <a href="">医药保健</a>
                <span>/</span>
                <a href="">计生情趣</a>
              </li>
              <li>
                <a href="">图书</a>
                <span>/</span>
                <a href="">文娱</a>
                <span>/</span>
                <a href="">教育</a>
                <span>/</span>
                <a href="">电子书</a>
              </li>
              <li>
                <a href="">机票</a>
                <span>/</span>
                <a href="">酒店</a>
                <span>/</span>
                <a href="">旅游</a>
                <span>/</span>
                <a href="">生活</a>
              </li>
              <li>
                <a href="">众筹</a>
                <span>/</span>
                <a href="">白条</a>
                <span>/</span>
                <a href="">保险</a>
                <span>/</span>
                <a href="">企业金融</a>
              </li>
              <li>
                <a href="">安装</a>
                <span>/</span>
                <a href="">维修</a>
                <span>/</span>
                <a href="">清洗</a>
                <span>/</span>
                <a href="">二手</a>
              </li>
              <li>
                <a href="">工业品</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-right fl">
          <ul class="container">
            <li><a href="#">京东超市</a></li>
            <li><a href="#">京东生鲜</a></li>
            <li><a href="#">秒杀</a></li>
            <li><a href="#">优惠券</a></li>
            <li><a href="#">京东家电</a></li>
            <li><a href="#">plus会员</a></li>
            <li><a href="#">品牌闪购</a></li>
            <li><a href="#">进口好物</a></li>
            <li><a href="#">拍卖</a></li>
            <li><a href="#">京东云</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {};
  },
  computed: {
    ...mapState(["home", "categoryList"]),
    // ...mapState({
    //   cateoryList:state => state.home.cateoryList
    // })
  },
  methods: {
    showList(e) {},
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scoped lang ='less'>
.nav-top {
  border-bottom: 2px solid #b1191a;
}

.nav {
  height: 40px;

  padding: 20px 0 0 0;
}

.nav-left {
  width: 210px;
  height: 40px;
  .dt {
    width: 100%;
    height: 100%;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
}

.dd {
  height: 450px;
  width: 100%;
  /* margin-top: 2px; */
  ul {
    background-color: #fefefe;
    margin: 12px 0 10px 0;
    padding: 10px 0;
  }
  li {
    height: 25px;
    line-height: 25px;
    padding: 0 0 0 18px;

    a {
      font: 500 14px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial,
        Hiragino Sans GB, "\5B8B\4F53", sans-serif;
      color: #333;
    }
    &:hover {
      background-color: rgb(217, 217, 217);
    }
  }
}

.nav-right {
  /* left: 240px; */
  li {
    float: left;
    a {
      display: block;
      height: 40px;
      line-height: 40px;
      margin: 0 11px;
      color: #333;
      font-size: 15px;
    }
  }
}

/* 清除浮动 */
.container::after {
  content: "";
  display: block;
  clear: both;
}
</style>