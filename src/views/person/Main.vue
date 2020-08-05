<template>
  <div class="all">
    <div class="all_first">
      <p class="main_title">个人中心</p>
    </div>
    <div class="all_second">
      <div style="width:100%;height:10vh;">
        <img src="https://s1.ax1x.com/2020/08/04/aDBQL8.jpg" alt="">
        <div style="float:left;margin-left:2vw;margin-top:2vh;font-family:YouYuan;">
          <span style="color: #ebedee;font-size:4vw;">
            <span style="color: #ebedee;font-size:5vw;font-family:YouYuan;">刘翠花</span>
            <br/>
            <span style="color: #b8a18c;font-size:3vw;font-family:YouYuan;">升级到会员享受更多特权</span>
          </span>
        </div>
      </div>
      <div style="width:100%;height:10vh;">
        <div class="d-flex justify-lg-space-around" style="height:5vh;width:100%;">
          <span class="jinzi">我的关注</span>
          <span class="jinzi">我的收藏</span>
          <span class="jinzi">我的发布</span>
        </div>
        <div class="d-flex justify-lg-space-around" style="height:5vh;width:100%;">
          <div class="shuzi" style="margin-left:6vw">0</div>
          <div class="shuzi" style="margin-left:12vw">0</div>
          <div class="shuzi" style="margin-left:12vw">30</div>
        </div>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .main_title {
    color: #ebedee;
    text-align: center;
    padding-top: 2vh;
    font-family:YouYuan;
  }

  .all {
    width: 100vw;
    height: 100vh;
    background-color: #F9F4E6;
  }
  
  .all_first {
    width: 100vw;
    height: 20vh;
    background-image: linear-gradient(to right, #0f1427 , #232941);
    border-radius: 0 0 5vw 5vw;
  }

  .all_second {
    width: 90vw;
    height: 20vh;
    background-image: linear-gradient(to right, #232a44 , #474d65);
    border-radius: 5vw;
    position: absolute;
    top: 10vh;
    left: 5vw;
  }

  .all_second>div>img{
    width: 12vw;
    height: 12vw;
    border-radius: 6vw;
    margin-left: 3vw;
    margin-top: 3vw;
    float: left;
  }

  .jinzi {
    font-size: 2vw;
    color: #eac994;
    margin-left:6vw;
    font-family:YouYuan;
  }

  .shuzi {
    width: 6vw;
    font-size: 4vw;
    color: #ebf1f5;
    float: left;
    font-family:YouYuan;
  }
</style>
