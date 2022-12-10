<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        @click="handler(temp)"
        v-for="temp in imagesList"
        :key="temp.id"
      >
        <img :src="temp.url" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "ImageList",
  data() {
    return {
      cur: {},
    };
  },
  props: ["imagesList"],
  methods: {
    //小图的点击事件
    handler(cur) {
      this.$bus.$emit("image", cur);
    },
    minus() {},
    add() {},
  },
  mounted() {},
  watch: {
    imagesList(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$nextTick(() => {
          //初始化Swiper类的实例
          var mySwiper = new Swiper(this.$refs.cur, {
            //设置轮播图防线
            direction: "horizontal",
            // loop: true,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //展示区域同时展示三张图片
            slidesPerView: 3,
          });
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>