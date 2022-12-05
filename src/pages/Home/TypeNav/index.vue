<template>
  <div>
    <div class="nav-top">
      <div class="nav w">
        <div
          class="nav-left fl"
          @mouseenter="enterShow"
          @mouseleave="leaveShow"
        >
          <div class="dt">全部商品分类</div>

          <div class="dd" @click="goSearch" v-show="show">
            <transition name="dd">
              <ul>
                <li v-for="c1 in categoryList" :key="c1.id">
                  <div class="c2">
                    <div class="c2Left">
                      <div class="c2LeftTop"></div>
                      <div class="c3" v-for="c2 in c1.child" :key="c2.id">
                        <div class="c3Left fl">
                          <i class="iconmoon"></i>
                          <a
                            class="c3Name"
                            :data-categoryName="c2.name"
                            :data-c2id="c2.id"
                            >{{ c2.name }}</a
                          >
                        </div>
                        <div class="c3Right fl">
                          <a
                            class="c3List"
                            v-for="c3 in c2.child"
                            :key="c3.id"
                            :data-categoryName="c3.name"
                            :data-c3id="c3.id"
                          >
                            {{ c3.name }}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="c2Right"></div>
                  </div>
                  <a
                    v-for="(item, index) in c1.name"
                    :key="index"
                    :data-categoryName="c1.name"
                    :data-c1id="c1.id"
                  >
                    {{ item }}
                  </a>
                </li>
              </ul>
            </transition>
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
    return {
      show: true,
    };
  },
  computed: {
    ...mapState("home", ["categoryList"]),
  },
  methods: {
    // 点击三级菜单
    goSearch(e) {
      let current = e.target;
      let { categoryname, c1id, c2id, c3id } = current.dataset;
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryname: categoryname };
        if (c1id) {
          query.category1id = c1id;
        } else if (c2id) {
          query.category2id = c2id;
        } else {
          query.category3id = c3id;
        }
        location.query = query;
        if (this.$route.params) {
          location.params = this.$route.params;

          this.$router.push(location);
        } else {
          this.$router.push(location);
        }
      }
    },
    enterShow() {
      this.show = true;
    },
    leaveShow() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
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
  height: 470px;
  padding: 12px 0 10px 0;

  ul {
    position: relative;
    background-color: #fefefe;
    /* margin: 12px 0 10px 0; */
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
      cursor: pointer;
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

/* 过渡动画 dd */
.dd-enter {
  height: 0px;
}

.dd-enter-to {
  height: 470px;
}

.dd-enter-active {
  transition: all 0.3s linear;
}
</style>