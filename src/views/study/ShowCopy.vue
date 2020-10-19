<template>
  <v-app id="show">
    <TopNavigation />
    <Search />
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item.slice(0,10)" :key="index" @click="jump(item.release.releaseId,item.release.custId,
    item.release.releaseTime,item.release.custName,item.release.custImgHead,item.releaseFonts)" >
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
          <span style="font-size:12px;margin-right:20px">{{item.release.custName}}</span>
          <span style="font-size:12px">发布时间：{{item.release.releaseTime}}</span>
        </div>
      </div>
    </div>
    <div style="margin-bottom:60px">
      <v-pagination v-model="page" :length="pageLength" v-if="showPage"></v-pagination>
    </div>
    <FootNavigation />
  </v-app>
</template>

<script>
import {Decrypt,Encrypt} from '../../api/utils'
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import Search from "../../components/Search";

export default {
  components: {
    FootNavigation,
    TopNavigation,
    Search,
  },
  data() {
    return {
      item: [],
      its:[],
      name:[],
      num:[],
      custImgHead:[],
      isVip:[],
      page: 1,
      pageLength:0,
      releaseNum:'',
      showPage:true
    };
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
    time(value) {
      if (!value) return "";
      if (value.length > 6) {
        return value.slice(0, 14) + "...";
      }
      return value;
    },
  },
  methods:{
    jump(releaseid,custId,releaseTime,custName,custImgHead,messageInfo){
      console.log(messageInfo)
      this.$router.push({
        path: 'show/info',
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
    let param = {
      "beginNum": 0,
      "custId": 0,
      "endNum": 1,
    }
    this.$axios.post('/CalligraphyService/release/getReleaseNumber',param,{ //获取发布的总数
      headers:{
        'X-Request-ID':'1'
      }
    })
    .then((response)=>{
      this.releaseNum=JSON.parse(Decrypt(response.data.data, response.data.iv))
      // this.pageLength=Math.ceil(this.releaseNum/10) //每页展示10条数据，pageLength为页数
      // if(this.pageLength==0){
      //   this.showPage=false
      // }
      console.log(this.releaseNum)
      let params={
      beginNum:0, //从数据库中获取第n页的第一条数据
      endNum:this.releaseNum //从数据库中获取第n页的第十条数据
    }
    this.$axios.post('/CalligraphyService/release/getRelease',params,{ //获取每页的发布信息
      headers:{
        'X-Request-ID':'1'
      }
    })
    .then((response)=>{ //渲染页面
      console.log(JSON.parse(Decrypt(response.data.data, response.data.iv))[0].release)
      this.item=JSON.parse(Decrypt(response.data.data, response.data.iv));
      console.log(this.item[0].release.custId);
      for(var i=0;i<this.releaseNum;i++){
        this.$axios.post('/CalligraphyService/user/getUserInfo',{custId:this.item[i].release.custId},{
          headers:{
            "X-Request-ID":"1"
          }
        }).then((response)=>{
          this.name.push(JSON.parse(Decrypt(response.data.data, response.data.iv)).custName);
          this.custImgHead.push(JSON.parse(Decrypt(response.data.data, response.data.iv)).custImgHead);
          this.isVip.push(JSON.parse(Decrypt(response.data.data, response.data.iv)).isVip);
        })
      }
      console.log(this.name)

      for(var j=0;j<this.num.length;j++){
        this.item[j].release.custImgHead=this.name[j]
        this.item[j].release.custName=this.name[j]
        this.item[j].release.isVip=this.name[j]
      }
      console.log(this.item)
    })
    })

    let params={
      beginNum:(this.page-1)*10, //从数据库中获取第n页的第一条数据
      endNum:(this.page-1)*10+10 //从数据库中获取第n页的第十条数据
    }
    this.$axios.post('/CalligraphyService/release/getRelease',params,{ //获取每页的发布信息
      headers:{
        'X-Request-ID':'1'
      }
    })
    .then((response)=>{ //渲染页面
      console.log(JSON.parse(Decrypt(response.data.data, response.data.iv)))
      this.item=JSON.parse(Decrypt(response.data.data, response.data.iv))
      var that=this;

      function getGoodsList(j,length,that){
        var custId=that.item[j].release.custId;
        that.item[j].release.releaseTime=that.formatTime(that.item[j].release.releaseTime)
        that.$axios.post('/CalligraphyService/user/getUserInfo',{custId:custId},{
          headers:{
            "X-Request-ID":"1"
          }
        }).then((response)=>{
            that.item[j].release.custImgHead=JSON.parse(Decrypt(response.data.data, response.data.iv)).custImgHead
            that.item[j].release.custName=JSON.parse(Decrypt(response.data.data, response.data.iv)).custName
            that.item[j].release.isVip=JSON.parse(Decrypt(response.data.data, response.data.iv)).isVip
            if(++j < length){
              getGoodsList(j, length,that);
            }

        })
      }
      getGoodsList(0,JSON.parse(Decrypt(response.data.data, response.data.iv)).length,that);
      console.log(that.releaseNum)
    })
  },

  watch:{
    page:function(newdata){
      console.log(this.page)       //监听当前页数，当前页数变化时，获取下一页的数据，重新渲染页面
      let params={
      beginNum:(this.page-1)*10, //从数据库中获取第n页的第一条数据
      endNum:(this.page-1)*10+10 //从数据库中获取第n页的第十条数据
    }
    console.log(params)
    this.item=[]
   this.$axios.post('/CalligraphyService/release/getRelease',params,{ //获取每页的发布信息
      headers:{
        'X-Request-ID':'1'
      }
    })
    .then((response)=>{ //渲染页面
      console.log(JSON.parse(Decrypt(response.data.data, response.data.iv)))
     this.item=JSON.parse(Decrypt(response.data.data, response.data.iv))
      var that=this
      function getGoodsList(j,length,that){
        var custId=that.item[j].release.custId
        that.item[j].release.releaseTime=that.formatTime(that.item[j].release.releaseTime)
        that.$axios.post('/CalligraphyService/user/getUserInfo',{custId:custId},{
          headers:{
            "X-Request-ID":"1"
          }
        }).then((response)=>{
            that.item[j].release.custImgHead=JSON.parse(Decrypt(response.data.data, response.data.iv)).custImgHead
            that.item[j].release.custName=JSON.parse(Decrypt(response.data.data, response.data.iv)).custName
            that.item[j].release.isVip=JSON.parse(Decrypt(response.data.data, response.data.iv)).isVip
            if(++j < length){
              getGoodsList(j, length,that);
            }
        })
      }
      getGoodsList(0,JSON.parse(Decrypt(response.data.data, response.data.iv)).length,that)
    })
    }
  },
  beforeUpdate: function () {

  },
};
</script>

<style scoped>
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
