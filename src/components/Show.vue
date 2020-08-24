<template>
  <div>
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item" :key="index" @click="jump(item.number)">
      
      <div class="d-flex flex-column justify-space-around box-right">
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:14px">{{item.number}}号 ：</span>
          <h4 class="show_title">{{item.title | title}}</h4>
        </div>
        <span style="font-size:14px;margin:0;color:#BDBDBD;">{{item.content | content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      item: [
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
      ],
    }
  },
  methods:{
    jump(id){
      this.$router.push({ path: '/show/info' });
    }
  },
   filters: {
    title(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
    content(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 16) + "...";
      }
      return value;
    },
  },
}
</script>

<style scoped>
  .follower_all {
    width: 100%;
    height: 13vh;
    background-color: #F9F4E6;
    margin-top: 2vh;
    border-radius: 2vw;
  }

  .follower_all>img {
    width: 12vw;
    height: 12vw;
    border-radius: 6vw;
    margin-left: 3vw;
    margin-top: 3vw;
    float: left;
  }

  .ziti_follower {
    font-size: 3vw;
    font-family:YouYuan;
  }
#show {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 90px;
}
.box-right {
  width: 90%;
  padding: 10px;
   border-radius: 10px;
   margin-bottom:8px;
   background-image: linear-gradient(to right, #5c636e, #cdccce);
}

</style>