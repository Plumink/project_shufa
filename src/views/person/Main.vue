<template>
  <v-app>
    <div >
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
              <div class="shuzi" ref='guanzu'>{{follow.length}}</div>
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
        <div class="pay" >
          <!-- <p>充值类型</p> -->
          <div tabindex="1" class="pay_first">
            <p class="pay_second">12个月</p>
            <p class="pay_third">￥88</p>
          </div>
          <div tabindex="2" class="pay_first">
            <p class="pay_second">1个 月</p>
            <p class="pay_third">￥15</p>
          </div>
          <div tabindex="3" class="pay_first">
            <p class="pay_second">连续包月</p>
            <p class="pay_third">￥10</p>
          </div>
        </div>
        <div class="huiyuan">
          <span @click="beVip()">成为会员</span>
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
      follow:[],
      num: '',
      detail: ''
    };
  },
  methods:{
    getCookie: function (cname) {
      let name = cname + '='
      let ca = document.cookie.split(';')
      // console.log("获取cookie,现在循环")
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        // console.log(c)
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) !== -1) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    clearCookie: function (cname) {
      this.setCookie(cname, '', -1)
    },
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
    beVip(){
      let str1 = this.detail + this.num + '元';
      let str2 = this.detail + "会员";
      let oid = this.getCookie(openid);
      let params={
        "attach": "支付",
        "body": str1,
        "detail": str2,
        "feeType": "CNY",
        "limitPay": "no_credit",
        "notifyUrl": "https://www.mocking.space/CalligraphyService/WXPay/notify",
        "openid": oid,
        "outTradeNo": "string",
        "productId": "001",
        "totalFee": this.num,
        "tradeType": "JSAPI"
      }
      this.$axios.post("/CalligraphyService/WXPay/unifiedOrder",params)
      .then((res)=>{
        console.log(res)
      })
    },
    // 在你需要的地方复制下面代码
 // 这里需要的签名等字段，前端开发者只需要调用后端指定的接口返回即可。
// 如果你全干，那也是OK的。 
// 你是大佬。
onBridgeReady(){
 window.WeixinJSBridge.invoke(
   'getBrandWCPayRequest', {
     'appId': wx284c1a8307ed35ef, // 公众号名称，由商户传入
     'timeStamp': new Date().getTime(), // 时间戳，自1970年以来的秒数
     'nonceStr': res.data.nonceStr, // 随机串
     'package': res.data.package,
     'signType': res.data.signType, // 微信签名方式：
     'paySign': res.data.paySign // 微信签名
   },
   function (res) {
     alert(JSON.stringify(res))
     if (res.err_msg === 'get_brand_wcpay_request:ok') {
       // 使用以上方式判断前端返回,微信团队郑重提示：
       // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
       console.log('success');
    }
 })
}










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
        // console.log(response)
        var n=response.data.data.length
        for(var i=0;i<n;i++){
          this.follow.push(response.data.data[i])
        }

      });
  },
  mounted(){
    $('.pay_first').on('click', function(e) {
          this.num = $(this)[0].innerText.substring(7,9);
          this.detail = $(this)[0].innerText.substring(0,4);
          console.log(this.num);
          console.log(this.detail);
      });
    $('#my-img').click(function(){
        $('#img-upload').click();
    });
    
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
        // console.log(response)
        var n=response.data.data.length
        for(var i=0;i<n;i++){
          this.follow.push(response.data.data[i])
        }

      });
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
  // width: 20vw;
  height: 100%;
  float: left;
  // margin-left: 4vw;
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
