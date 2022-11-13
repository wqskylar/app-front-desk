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
        <ol class="circle">
          <li></li>
          <li class="current"></li>
          <li></li>
          <li></li>
        </ol>
        <ul class="fl">
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
        <div class="recommend fr">
          <ul>
            <a><img src="./images/w1.avif" alt="" /></a>
            <a><img src="./images/w2.avif" alt="" /></a>
            <a><img src="./images/w3.avif" alt="" /></a>
          </ul>
        </div>
      </div>
      <div class="news-flash fr">
        <div class="bargain">
          <a href="#" class="user-picture fl"
            ><img src="./images/jd.png" alt=""
          /></a>
          <div class="fl">
            <a href="#">hi~欢迎逛京东</a>
            <p>
              <a href="#">登录</a>
              &nbsp;|&nbsp;
              <a href="#">注册</a>
            </p>
          </div>
        </div>
        <div class="new">
          <div>
            <h5 class="fl">京东快报</h5>
            <i
              class="fr"
              style="
                font-family: icomoon;
                font-size: 12px;
                color: #999;
                line-height: 18px;
              "
            >
              
            </i>
            <a href="#" class="fr">更多</a>
          </div>
          <ul class="news-list">
            <li>
              <a href="#">
                <span class="news-tag">最新</span>
                康巴赫全新升级六代炒锅震撼来袭
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-tag">最新</span>
                家中灰尘全面清洁，小米无线吸尘器2 Pro拒绝死角
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-tag">热评</span>
                解密拯救者刃9000K，高端玩家不舍得错过的主机
              </a>
            </li>
            <li>
              <a href="#">
                <span class="news-tag">热评</span>
                体验一轮告诉你，升级12代酷睿i9小新Pro14值得选
              </a>
            </li>
          </ul>
        </div>
        <div class="lifes">
          <ul>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life1.png" alt="" />
                </i>
                <span>礼品卡</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life2.png" alt="" />
                </i>
                <span>企业购</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life3.png" alt="" />
                </i>
                <span>话费</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life4.png" alt="" />
                </i>
                <span>游戏</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life5.png" alt="" />
                </i>
                <span>加油卡</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life6.png" alt="" />
                </i>
                <span>机票</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life7.png" alt="" />
                </i>
                <span>白条</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life8.png" alt="" />
                </i>
                <span>众筹</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life9.png" alt="" />
                </i>
                <span>火车票</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life10.png" alt="" />
                </i>
                <span>酒店</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life11.png" alt="" />
                </i>
                <span>五金城</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="./images/life12.png" alt="" />
                </i>
                <span>电影票</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
  width: 790px;
  height: 470px;
}

.recommend {
  width: 190px;
  height: 470px;
  margin: 0 5px;
  a {
    display: block;
    height: 150px;
    margin-bottom: 10px;
    overflow: hidden;
    img {
      height: 150px;
      cursor: pointer;
    }
  }
}

.news-flash {
  height: 470px;
  width: 190px;
  background-color: #fff;
}
.new {
  width: 190px;
  height: 130px;
  margin-top: 10px;
  border-bottom: 1px dotted #ccc;
  div {
    height: 20px;
    padding: 10px 0 0 0;
    margin-bottom: 8px;
    h5 {
      font-size: 14px;
      margin-left: 15px;
      color: #333;
    }
  }
}

.news-list {
  height: 88px;
  margin: 0 15px;
  li {
    height: 16px;
    line-height: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.news-tag {
  display: inline-block;
  font-size: 12px;
  height: 16px;
  width: 35px;
  line-height: 16px;
  text-align: center;
  color: #e1251b;
  background-color: rgba(225, 37, 27, 0.08);
  margin-right: 6px;
}

.circle {
  position: absolute;
  bottom: 20px;
  left: 50px;
  li {
    width: 8px;
    height: 8px;
    float: left;
    margin: 0 3px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
  }
}

.current {
  background-color: rgba(255, 255, 255, 0.4);
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

.lifes {
  height: 230px;
  margin-top: 10px;
  li {
    width: 63px;
    height: 55px;
    float: left;
    text-align: center;
    a {
      display: block;
      height: 100%;
      span {
        display: block;
        height: 25px;
        line-height: 25px;
        border-bottom: 2px solid #fff;
        color: #333;
      }
    }
  }
  i {
    display: block;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }
  img {
    width: 28px;
    height: 28px;
  }
}

.bargain {
  position: relative;
  height: 89px;
  border-bottom: 1px dotted #ccc;
  .user-picture {
    position: absolute;
    top: 25px;
    left: 30px;
    display: block;
    height: 40px;
    width: 40px;
    img {
      height: 100%;
    }
  }
  div {
    position: absolute;
    top: 26px;
    left: 80px;
    width: 106px;
    height: 38px;
  }
}
</style>