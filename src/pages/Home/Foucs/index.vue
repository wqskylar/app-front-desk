<template>
  <div class="w">
    <div class="foucs">
      <div class="banner fl">
        <a href="#" class="arrow-l">
          <i style="font-family: icomoon; font-size: 12px"></i>
        </a>
        <a href="#" class="arrow-r">
          <i style="font-family: icomoon; font-size: 12px"></i>
        </a>
        <ul>
          <li>
            <a href="#"><img src="./images/q1.jpg" alt="" /></a>
          </li>
          <!-- <li>
            <a href="#"><img src="./images/q2.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/q3.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/q4.jpg" alt="" /></a>
          </li> -->
        </ul>
      </div>
      <div class="news-flash fr"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Focus",
};
</script>

<style scoped lang='less'>
.foucs {
  width: 980px;
  height: 470px;
  margin: 10px 0 0 220px;
}

.banner {
  position: relative;
  width: 720px;
  height: 470px;
  background-color: orange;
}

.news-flash {
  height: 470px;
  width: 250px;
  background-color: purple;
}

.arrow-l,
.arrow-r {
  position: absolute;
  width: 25px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.3);
  top: 50%;
  margin-top: -17.5px;
  text-align: center;
  line-height: 35px;
  color: #fff;
}
.arrow-r {
  left: 565px;
}
</style>