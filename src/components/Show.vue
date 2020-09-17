<template>
  <div>
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item" :key="index" @click="jump(item.release.releaseId,item.release.custId,
    item.release.releaseTime,item.release.releaseName,item.release.custImgHead,item.releaseFonts)">
      <div class="d-flex flex-column justify-space-around box-right">
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:14px">{{item.release.releaseId}}号 ：</span>
          <h4 class="show_title">{{item.release.releaseTitle | title}}</h4>
        </div>
        <span style="font-size:14px;margin:0;color:#BDBDBD;">{{item.release.releaseContent | content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    item: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
    }
  },
  methods:{
   jump(releaseid,custId,releaseTime,custName,custImgHead,messageInfo){
      this.$router.push({ 
        path: '/show/info',
        query:{
          releaseid:releaseid,  //传给子页面发布id
          custId:custId,  //发布者ID
          releaseTime:releaseTime,  //发布时间
          custName:custName,  //发布者昵称
          custImgHead:custImgHead, //发布者头像
          messageInfo:messageInfo
        }
     });
    },
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