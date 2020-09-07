<template>
  <v-app>
    <div >
      <div class="all_first">
        <!-- <p class="main_title">个人中心</p> -->
      </div>
      <div class="all_second">
        <div style="width:100%;height:10vh;">
          <img :src="data.customerImgHead" alt="头像" id="my-img" />
          <div style="float:left;margin-left:2vw;margin-top:2vh;font-family:YouYuan;">
            <span style="color: #ebedee;font-size:4vw;">
              <span style="color: #ebedee;font-size:5vw;font-family:YouYuan;">{{data.userName}}</span>
              <br />
              <span style="color: #b8a18c;font-size:3vw;font-family:YouYuan;">未开通会员</span>
            </span>
          </div>
        </div>
        <div style="width:100%;height:8vh"></div>
        <p style="text-align:center;color:#b8a18c;margin:0">
          <span class="Calligraphy_icon_leftwing" />
          ~~发 布 作 品~~
          <span class="Calligraphy_icon_rightwing" />
          </p>
        <Show />
        <div style="width:100%;height:10vh"></div>
        <FootNavigation />
      </div>
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import Show from '../../components/Show'
export default {
  components: {
    FootNavigation,
    Show
  },
  data() {
    return {
      data: JSON.parse(localStorage.getItem("loginMessage")),
      follow:[]
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
    },
    JumpVip(){
      this.$router.push({
        path:"/bevip"
      })
    },

  },
  created() {
    this.$axios
      .post("/CalligraphyService/user/getCatchInfo", {
          customerId: this.$store.state.id,
          customerImgHead: "string",
          customerLastTime: "2020-08-21T03:02:35.606Z",
          ifValid: 0,
          phoneNumber: "string",
          sessionId: "string",
          userName: "string",
        },{
        headers: {
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
      })
      .then((response) => {
        var n=response.data.data.length
        for(var i=0;i<n;i++){
          this.follow.push(response.data.data[i])
          console.log(this.follow)
        }

      });
  },
  mounted(){
    $('#my-img').click(function(){
        $('#img-upload').click();
    });

    var brr = $('.pay_first');
    var tag;
    console.log(brr)
    for(var i=0;i<brr.length;i++){
      (function(i) {
            brr[i].onclick = function() {
                tag = i;
                console.log(tag);
            }
        })(i)
    }
  },
  updated(){
    var path = $('#img-upload').files[0];
    var arr = path.split("\\");
    console.log(arr[arr.length-1]);
    console.log(path);
    this.$axios.post("/CalligraphyService/common/uploadFile", {
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
  height: 15vh;
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
  // margin-top: 4vh;
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

.pay{
  margin-top:2vh;
  display:flex;
  width:90vw;
  height:30vh;
  flex-direction:row;
  justify-content:space-around;
}

.pay_first {
  border: 1px solid grey;
  border-radius: 2vw;
  width:30%;
  height:70%;
  background-color:#ffffff;
  float:left;
  margin-top:4vh
}

.pay_first:focus{
  background-color: #f9f1e4;
}

.pay_second{
  text-align: center;
  margin-top: 2vh;
}
.pay_third{
  text-align: center;
  margin-top: 3vh;
  font-size: 6vw;
  color: #e5c194;
}

// .active{
//   background-color: #f9f1e4;
// }
</style>
