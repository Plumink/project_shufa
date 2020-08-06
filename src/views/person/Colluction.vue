<template>
  <div>
    <div class="colluction_all" v-for="(item,index) in items" :key="index">
      <img src="https://s1.ax1x.com/2020/08/04/aDBQL8.jpg" alt="">
      <div style="padding-top:2vh;">
        <span class="ziti_colluction" style="margin-left:2vw;">用户名：</span>
        <br/>
        <div style="width:20vw;float:left;">
          <span class="ziti_colluction" style="margin-left:2vw;">关注数：</span>
        </div>
        <div style="float:left">
          <span class="ziti_colluction" style="margin-left:8vw;">粉丝数：</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: [1,2,3,4,5,6]
    }
  },
  methods:{

  }
}
</script>

<style>
  .colluction_all {
    width: 100%;
    height: 13vh;
    background-color: #F9F4E6;
    margin-top: 2vh;
    border-radius: 2vw;
  }

  .colluction_all>img {
    width: 12vw;
    height: 12vw;
    border-radius: 6vw;
    margin-left: 3vw;
    margin-top: 3vw;
    float: left;
  }

  .ziti_colluction {
    font-size: 3vw;
    font-family:YouYuan;
  }
</style>