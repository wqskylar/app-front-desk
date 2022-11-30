<template>
  <div class="specialOffer fl">
    <div class="hd">
      <a href="#">
        <h3>每日特价</h3>
        <i class="p"></i>
      </a>
    </div>
    <div class="special-inner">
      <div class="special-item-left fl"></div>
      <div class="special-item-right fl">
        <div class="fl">1</div>
        <div class="fl">2</div>
        <div class="fl">3</div>
        <div class="fl">4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialOffer",
};
</script>

<style scoped lang='less'>
.specialOffer {
  width: 590px;
  height: 340px;
  /* background-color: orange; */
  margin-right: 10px;
}

.hd {
  width: 550px;
  height: 60px;
  padding: 0 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 60px;
  a {
    h3,
    i {
      display: block;
      float: left;
    }
    i {
      position: relative;
      top: 23px;
      left: 10px;
      height: 16px;
      width: 16px;

      background: url(./images/sprite.png) no-repeat;
      background-position: -16px 0;
    }
    h3 {
      color: #333;
    }
  }
}

.special-inner {
  width: 590px;
  height: 285px;
  padding: 0 15px 15px;
}

.special-item-left {
  background-color: rgba(109, 126, 146, 0.05);
  width: 170px;
  height: 265px;
}

.special-item-right {
  width: 390px;
  height: 265px;
}
</style>