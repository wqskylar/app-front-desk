<template>
  <div>
    <div class="nav-top">
      <div class="nav w">
        <div class="nav-left fl" @mouseover="showList">
          <div class="dt">全部商品分类</div>
          <div class="dd" v-show="true">
            <ul>
              <li v-for="c1 in categoryList" :key="c1.id">
                <div class="c2">
                  <div class="c2Left">
                    <div class="c2LeftTop"></div>
                    <div class="c3" v-for="c2 in c1.child" :key="c2.id">
                      <div class="c3Left fl">
                        <i class="iconmoon"></i>
                        <a href="#" class="c3Name">{{ c2.name }}</a>
                      </div>
                      <div class="c3Right fl">
                        <a
                          class="c3List"
                          href="#"
                          v-for="(c3, index) in c2.child"
                          :key="index"
                        >
                          {{ c3 }}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="c2Right"></div>
                </div>
                <a href="#" v-for="(item, index) in c1.name" :key="index">
                  {{ item }}
                </a>
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
    ...mapState("home", ["categoryList"]),
  },
  methods: {
    showList(e) {},
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
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
  ul {
    position: relative;
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
      .c2 {
        display: block;
      }
    }
  }
}

.c2 {
  position: absolute;
  left: 210px;
  top: 0px;
  width: 990px;
  height: 470px;
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 100;
  .c2Left {
    width: 800px;
    height: 470px;
    float: left;
  }

  .c2Right {
    width: 190px;
    height: 470px;
    float: right;
  }
}

.c2LeftTop {
  height: 40px;
}

.c3 {
  height: 25px;
  .c3Name,
  i {
    float: right;
    display: block;
    height: 25px;
    font-size: 12px;
    font-weight: bold;
    line-height: 25px;
  }
  .c3Left {
    height: 100%;
    width: 70px;
    padding-right: 10px;
  }
  .c3Right {
    height: 100%;
    padding-left: 10px;
    a {
      margin-right: 10px;
      color: rgb(102, 102, 102);
      font-size: 12px;
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