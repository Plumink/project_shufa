<template>
  <v-app id="show">
    <TopNavigation />
    <Search />
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item" :key="index" @click="jump(item.release.releaseId)" >
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
          <span style="font-size:12px;margin-right:20px">{{'发布者'}}</span>
          <span style="font-size:12px">发布时间：{{item.release.releaseTime | time}}</span>
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
      item: [
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        }
      ],
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
    jump(id){
      this.$router.push({ 
        path: 'show/info',
        query:{
          releaseid:id
        }
     });
    },
  },
  created(){
    this.$axios.post('/CalligraphyService/release/getReleaseNumber',{ //获取发布的总数
      headers:{
        'X-Request-ID':'1'
      }
    })
    .then((response)=>{
      this.releaseNum=response.data.data
      this.pageLength=Math.ceil(this.releaseNum/10) //每页展示10条数据，pageLength为页数
      if(this.pageLength==0){
        this.showPage=false
      }
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
      console.log(response.data.data)
      this.item=response.data.data
    })
  },
  watch:{
    page:function(newdata){       //监听当前页数，当前页数变化时，获取下一页的数据，重新渲染页面
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
      console.log(response.data.data)
      this.item=response.data.data
    })
    }
  }
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