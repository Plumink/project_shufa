<template>
  <div>
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item" :key="index" @click="jump(item.release.releaseId,userMessage.custId,
    item.release.releaseTime,item.release.releaseName,userMessage.custImgHead,item.releaseFonts)">
      <div class="box-left">
        <img :src="item.releaseFonts[0].releaseFontUrl" alt />
      </div>
      <div class="d-flex flex-column justify-space-around box-right">
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:14px">{{item.release.releaseId}}号 ：</span>
          <h4 class="show_title">{{item.release.releaseTitle | title}}</h4>
        </div>
        <span style="font-size:14px;margin:0;color:#BDBDBD;">{{item.release.releaseContent | content}}</span>
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:12px;margin-right:20px">{{item.release.releaseName}}</span>
          <span style="font-size:12px">发布时间：{{item.release.releaseTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      item: [],
      userMessage:{}//用户信息
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
  created(){
    // 获取用户信息
    this.userMessage={
      custId: this.$store.state.id || this.$store.state.custId,
      custImgHead:this.$store.state.custImgHead || this.$store.state.customerImgHead
    }
    //获取用户的发布信息
    this.$axios.post('/CalligraphyService/release/getRelease',{
      beginNum:0,
      custId:this.$store.state.id || this.$store.state.custId,
      endNum:100,
      thisTime:'2020-09-17T12:14:40.607Z'
    },{
      headers:{
        "X-Request-ID":"1"
      }
    }).then((response)=>{
      this.item=response.data.data
      for(var i=0;i<this.item.length;i++){
        this.item[i].release.releaseTime=this.formatTime(this.item[i].release.releaseTime)  //格式化时间
        this.item[i].release.releaseName=this.$store.state.userName || this.$store.state.custName   //加上用户昵称，即发布者信息
      }
    })
  },
   filters: {
    title(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      }
      return value;
    },
    content(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 14) + "...";
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
  border-bottom: 1px solid #00838f;
}
.box-left {
  width: 25%;
  padding: 20px;
}
.box-right {
  width: 75%;
  padding: 10px;
}
.box-left img {
  width: 100%;
  height: 100%;
}
</style>