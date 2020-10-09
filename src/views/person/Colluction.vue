<template>
  <div>
    <p style="text-align:center;color:#b8a18c;margin:0">
          <span class="Calligraphy_icon_collection2" />
           我 的 收 藏 
    </p>
    <div
      class="d-flex flex-row justify-space-around box"
      v-for="(item,index) in item"
      :key="index"
      @click="jump(item.releaseResponse.release.releaseId,item.releaseResponse.release.custId,
    item.releaseResponse.release.releaseTime,item.releaseResponse.release.custName,
    item.releaseResponse.release.custImgHead,item.releaseResponse.releaseFonts)"
    >
      <div class="box-left">
        <img :src="item.releaseResponse.releaseFonts[0].releaseFontUrl" alt />
      </div>
      <div class="d-flex flex-column justify-space-around box-right">
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:14px">{{item.releaseResponse.release.releaseId}}号 ：</span>
          <h4 class="show_title">{{item.releaseResponse.release.releaseTitle | title}}</h4>
        </div>
        <span
          style="font-size:14px;margin:0;color:#BDBDBD;"
        >{{item.releaseResponse.release.releaseContent | content}}</span>
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:12px;margin-right:20px">{{item.releaseResponse.release.custName}}</span>
          <span style="font-size:12px">发布时间：{{item.releaseResponse.release.releaseTime}}</span>
        </div>
      </div>
    </div>
    <div style="margin-bottom:60px">
      <v-pagination v-model="page" :length="pageLength" v-if="showPage"></v-pagination>
    </div>
  </div>
</template>

<script>
import {Decrypt,Encrypt} from '../../api/utils'
export default {
  data() {
    return {
      showPage: true,
      pageLength: 1,
      page: 1,
      item: [],
    };
  },
  methods: {
    jump(releaseid,custId,releaseTime,custName,custImgHead,messageInfo){
      console.log(messageInfo)
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
  watch:{
    page:function(newdata){
   this.$axios
      .post(
        "/CalligraphyService/collection/getCollectionInfo",
        {
          custId: this.$store.state.custId || this.$store.state.id,
          beginNum: (this.page-1) * 10,
          endNum: this.page  * 10,
        },
        {
          headers: {
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        if (JSON.parse(Decrypt(response)).data.data == []) {
        } else {
          this.item=JSON.parse(Decrypt(response)).data.data
           var that=this
      getGoodsList(0,JSON.parse(Decrypt(response)).data.data.length,that)
      function getGoodsList(j,length,that){
        var custId=that.item[j].releaseResponse.release.custId
        that.item[j].releaseResponse.release.releaseTime=that.formatTime(that.item[j].releaseResponse.release.releaseTime)
        that.$axios.post('/CalligraphyService/user/getUserInfo',{custId:custId},{
          headers:{
            "X-Request-ID":"1"
          }
        }).then((response)=>{
          console.log(response)
            that.item[j].releaseResponse.release.custImgHead=JSON.parse(Decrypt(response)).data.data.custImgHead
            that.item[j].releaseResponse.release.custName=JSON.parse(Decrypt(response)).data.data.custName
            that.item[j].releaseResponse.release.isVip=JSON.parse(Decrypt(response)).data.data.isVip
            console.log(that.item[j])
            if(++j < length){
              getGoodsList(j, length,that);
            }
        })
      }
        }
      });
    }
  },
  created() {
    //获取收藏数量
    //获取收藏数量
    this.$axios
      .post(
        "/CalligraphyService/collection/getCollectionNumber",
        { custId: this.$store.state.custId || this.$store.state.id },
        {
          headers: { "X-Request-ID": "1" },
        }
      )
      .then((response) => {
        this.pageLength = Math.ceil(JSON.parse(Decrypt(response)).data.data / 10);
        //判断分页页数,如果只有一页则取消分页功能
        if (this.pageLength < 2) {
          this.showPage = false;
        }
      });
    //获取发布信息
    this.$axios
      .post(
        "/CalligraphyService/collection/getCollectionInfo",
        {
          custId: this.$store.state.custId || this.$store.state.id,
          beginNum: (this.page-1) * 10,
          endNum: this.page  * 10,
        },
        {
          headers: {
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        if (JSON.parse(Decrypt(response)).data.data == []) {
        } else {
          this.item=JSON.parse(Decrypt(response)).data.data
           var that=this
      getGoodsList(0,JSON.parse(Decrypt(response)).data.data.length,that)
      function getGoodsList(j,length,that){
        var custId=that.item[j].releaseResponse.release.custId
        that.item[j].releaseResponse.release.releaseTime=that.formatTime(that.item[j].releaseResponse.release.releaseTime)
        that.$axios.post('/CalligraphyService/user/getUserInfo',{custId:custId},{
          headers:{
            "X-Request-ID":"1"
          }
        }).then((response)=>{
          console.log(response)
            that.item[j].releaseResponse.release.custImgHead=JSON.parse(Decrypt(response)).data.data.custImgHead
            that.item[j].releaseResponse.release.custName=JSON.parse(Decrypt(response)).data.data.custName
            that.item[j].releaseResponse.release.isVip=JSON.parse(Decrypt(response)).data.data.isVip
            console.log(that.item[j])
            if(++j < length){
              getGoodsList(j, length,that);
            }
        })
      }
        }
      });
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
};
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