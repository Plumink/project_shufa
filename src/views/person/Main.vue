<template>
  <v-app>
    <div class="all_main">
      <div class="all_first">
        <p class="main_title">个人中心</p>
      </div>
      <div class="all_second">
        <div style="width:100%;height:10vh;">
          <img :src="data.customerImgHead" alt="头像" id="my-img" @click="toChange()"/>
          <div style="float:left;margin-left:2vw;margin-top:2vh;font-family:YouYuan;">
            <span style="color: #ebedee;font-size:4vw;">
              <span style="color: #ebedee;font-size:5vw;font-family:YouYuan;">{{data.userName}}</span>
              <br />
              <span style="color: #b8a18c;font-size:3vw;font-family:YouYuan;">升级到会员享受更多特权</span>
            </span>
          </div>
        </div>

        <div style="width:100%;height:10vh;">
          <div class="main_little">
            <span class="jinzi">我的关注</span>
            <router-link to="/main/follow">
              <div class="shuzi">0</div>
            </router-link>
          </div>
          <div class="main_little">
            <span class="jinzi">我的收藏</span>
            <router-link to="/main/colluction">
              <div class="shuzi">23</div>
            </router-link>
          </div>
          <div class="main_little">
            <span class="jinzi">我的发布</span>
            <router-link to="/main/follower">
              <div class="shuzi">100</div>
            </router-link>
          </div>
        </div>

        <div class="huiyuan">
          <span>成为会员</span>
        </div>
        <div class="show_main">
          <router-view />
        </div>
        <div style="width:100%;height:10vh"></div>
        <FootNavigation />
      </div>
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
export default {
  components: {
    FootNavigation,
  },
  data() {
    return {
      data: JSON.parse(localStorage.getItem("loginMessage")),
    };
  },
  methods:{
    updateImage(){
      var path = $('#img-upload')[0].value;
      var arr = path.split("\\");
      console.log(arr[arr.length-1]);
       
    },
    toChange(){
      this.$router.push({
        path:"/change"
      })
    }
  },
  mounted(){
    $('#my-img').click(function(){
        $('#img-upload').click();
    })
  },
  updated(){
    var path = $('#img-upload').files[0];
    var arr = path.split("\\");
    console.log(arr[arr.length-1]);
    console.log(path);
    this.$axios.post("http://127.0.0.1:9003/common/uploadFile", {
      headers: {
          "content-type": "multipart/form-data",
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
        params:{
          // uploadFile:arr[arr.length-1]
          uploadFile:path

        }
    }).then(response=>{
      console.log(response)
    })
    console.log('1')
  }
};
</script>

<style lang="scss" scoped>
.main_title {
  color: #ebedee;
  text-align: center;
  padding-top: 2vh;
  font-family: YouYuan;
}

.all_main {
  width: 100vw;
  height: 100vh;
  // background-color: #F9F4E6;
}

.all_first {
  width: 100vw;
  height: 20vh;
  background-image: linear-gradient(to right, #0f1427, #232941);
  border-radius: 0 0 5vw 5vw;
}

.all_second {
  width: 90vw;
  height: 20vh;
  background-image: linear-gradient(to right, #232a44, #474d65);
  border-radius: 5vw;
  position: absolute;
  top: 10vh;
  left: 5vw;
}

.all_second > div > img {
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  margin-left: 3vw;
  margin-top: 3vw;
  float: left;
}

.main_little {
  width: 20%;
  height: 100%;
  float: left;
  margin-left: 4vw;
}

.jinzi {
  font-size: 2vw;
  color: #eac994;
  margin-top: 1vh;
  font-family: YouYuan;
}
.shuzi {
  font-size: 4vw;
  color: #ebf1f5;
  margin-top: 2vh;
  font-family: YouYuan;
}

.huiyuan {
  width: 90vw;
  height: 10vh;
  border-radius: 10vw;
  margin-top: 4vh;
  background-image: linear-gradient(#edce9d, #e5c187);
  text-align: center;
  font-family: YouYuan;
  line-height: 10vh;
}

.show_main {
  width: 90vw;
  height: auto;
  // background-color: #F9F4E6;
  margin-top: 3vh;
  border-radius: 4vw;
}

#img-upload{
    display: none;
}
</style>
