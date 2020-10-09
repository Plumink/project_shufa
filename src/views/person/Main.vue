<template>
  <v-app>
    <div>
      <div class="all_first">
        <p class="main_title">个人中心</p>
      </div>
      <div class="all_second">
        <div style="width:100%;height:10vh;">
          <img
            :src="this.$store.state.customerImgHead||this.$store.state.custImgHead"
            alt="头像"
            id="my-img"
            @click="toChange()"
          />
          <div style="float:left;margin-left:2vw;margin-top:2vh;font-family:YouYuan;">
            <span style="color: #ebedee;font-size:4vw;">
              <span
                style="color: #ebedee;font-size:5vw;font-family:YouYuan;"
              >{{this.$store.state.custName||this.$store.state.userName}}</span>
              <br />
              <span style="color: #b8a18c;font-size:3vw;font-family:YouYuan;">升级到会员享受更多特权</span>
            </span>
          </div>
        </div>
        <div
          style="width:100%;height:38px"
          class="d-flex flex-row align-center justify-space-between"
        >
          <div class="main_little">
            <span class="jinzi">我的关注</span>
            <router-link to="/main/follow">
              <div class="shuzi" ref="guanzu">{{length}}</div>
            </router-link>
          </div>
          <div class="main_little">
            <span class="jinzi">我的收藏</span>
            <!-- <router-link to="/main/colluction"> -->
              <div class="shuzi" @click="jumpCollection()">{{collectionNum}}</div>
            <!-- </router-link> -->
          </div>
          <div class="main_little">
            <span class="jinzi">我的发布</span>
            <router-link to="/main/follower">
              <div class="shuzi">100</div>
            </router-link>
          </div>
        </div>
        <div class="pay">
          <!-- <p>充值类型</p> -->
          <div tabindex="1" class="pay_first" @click="one()">
            <p class="pay_second">1个月</p>
            <p class="pay_third">￥15</p>
          </div>
          <div tabindex="2" class="pay_first" @click="two()">
            <p class="pay_second">3个月</p>
            <p class="pay_third">￥40</p>
          </div>
          <div tabindex="3" class="pay_first" @click="three()">
            <p class="pay_second">12个月</p>
            <p class="pay_third">￥88</p>
          </div>
        </div>
        <div class="huiyuan" @click="beVip()">
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
import {Decrypt,Encrypt} from '../../api/utils.js'
import FootNavigation from "../../components/FootNavigation";
export default {
  components: {
    FootNavigation,
  },
  data() {
    return {
      data: JSON.parse(localStorage.getItem("loginMessage")),
      length:'',
      num: "",
      detail: "",
      out_trade_no: "",
      package: "",
      pwd: "",
      timeStamp: "",
      sign: "",
      selects: "",
      str1: "",
      str2: "",
      collectionNum:0,
      outTradeNo: new Date().getTime().toString() + "MS720" //收藏数量
    };
  },
  methods: {
    jumpCollection(){
      this.$router.push({
        path:"/main/colluction",
        query:{
          length:this.collectionNum
        }
      })
    },
    one() {
      this.selects = "one";
    },
    two() {
      this.selects = "two";
    },
    three() {
      this.selects = "three";
    },
    updateImage() {
      var path = $("#img-upload")[0].value;
      var arr = path.split("\\");
      console.log(arr[arr.length - 1]);
    },
    toChange() {
      this.$router.push({
        path: "/change",
      });
    },
    beVip() {
      console.log("debug this");
      console.log(this.getCookie("sign"));
      console.log(this.sign);
      console.log(this.out_trade_no);
      //获取金额和产品详细信息
      if (this.selects == "one") {
        this.str1 = "一个月会员 15元";
        this.str2 = "一个月会员";
        this.str3 = "1500";
        this.proid = "001";
        this.str4 = 30;
      } else if (this.selects == "two") {
        this.str1 = "三个月会员 40元";
        this.str2 = "三个月会员";
        this.str3 = "4000";
        this.proid = "002";
        this.str4 = 90;
      } else if (this.selects == "three") {
        this.str1 = "十二个月会员 88元";
        this.str2 = "十二个月会员";
        this.str3 = "8800";
        this.proid = "003";
        this.str4 = 360;
      }
      //生成随机字符串 pwd
      var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      var maxPos = $chars.length;
      var pwd = "";
      for (var i = 0; i < 32; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      //加密
      this.pwd = Encrypt(pwd);
      console.log(this.pwd);

      //下单的入参
      let params = {
        attach: "支付",
        body: this.str1,
        detail: this.str2,
        feeType: "CNY",
        limitPay: "no_credit",
        notifyUrl: "https://www.mocking.space/CalligraphyService/WXPay/notify",
        openid: this.$store.state.openid,
        outTradeNo: this.outTradeNo,
        productId: this.proid,
        totalFee: this.str3,
        tradeType: "JSAPI",
      };
      console.log(params);
      //调用下单接口，生成订单号
      this.$axios
        .post("/CalligraphyService/WXPay/unifiedOrder", params)
        .then((res) => {
          console.log(JSON.parse(Decrypt(res)));
          this.package = JSON.parse(Decrypt(res)).data.data;
          var time = new Date().getTime().toString();
          this.timeStamp = time;
          console.log(this.timeStamp);
          //前台调起支付入参
          let par = {
            appId: "wx284c1a8307ed35ef", // 公众号名称，由商户传入
            timeStamp: this.timeStamp, // 时间戳，自1970年以来的秒数
            nonceStr: Decrypt(this.pwd), // 随机串
            signType: "MD5", // 微信签名方式：
            package: "prepay_id=" + this.package, //
          };
          var that = this;
          this.$axios
            .post("/CalligraphyService/common/paySign", par)
            .then(function (res) {
              console.log(JSON.parse(Decrypt(res)));
              that.sign = Encrypt(JSON.parse(Decrypt(res)).data.data);
              that.setCookie("sign", Encrypt(JSON.parse(Decrypt(res)).data.data), 360);
              function onBridgeReady(that, sign) {
                window.WeixinJSBridge.invoke(
                  "getBrandWCPayRequest",
                  {
                    appId: "wx284c1a8307ed35ef", // 公众号名称，由商户传入
                    timeStamp: that.timeStamp, // 时间戳，自1970年以来的秒数
                    nonceStr: Decrypt(that.pwd), // 随机串
                    package: "prepay_id=" + that.package,
                    signType: "MD5", // 微信签名方式：
                    paySign: Decrypt(sign), // 微信签名
                  },
                  function (res) {
                    console.log("debug");
                    console.log(that);
                    console.log(JSON.parse(Decrypt(res)));
                    alert(JSON.stringify(JSON.parse(Decrypt(res))));
                    if (JSON.parse(Decrypt(res)).err_msg === "get_brand_wcpay_request:ok") {
                     
                      that.$axios.post("/CalligraphyService/user/vipRecharge",{
                        "customerId": that.$store.state.custId||that.$store.state.id,
                        "effDate": new Date().getTime(),
                        "expDate": new Date().getTime() + that.str4 * 24*60*60*1000,
                        "openId": that.$store.state.openid,
                        "outTradeNo": that.outTradeNo,
                        "prodId": that.proid,
                        "prodType": "vip",
                        "remark": that.str2
                      },
                      {
                        headers: {
                          "X-APP-ID": "1",
                          "X-APP-KEY": "1",
                          "X-Request-ID": "1",
                        },
                      }
                      ).then(
                        (res)=>{
                          console.log(JSON.parse(Decrypt(res)));
                        }
                      )
                      
                    }else if(res.err_msg === "get_brand_wcpay_request:cancel"){
                       window.location.href ='&payStatus=ok';
                      alert("订单取消！")
                    }
                  }
                );
              }
              if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                  document.addEventListener(
                    "WeixinJSBridgeReady",
                    onBridgeReady,
                    false
                  );
                } else if (document.attachEvent) {
                  document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                  document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
                }
              } else {
                onBridgeReady(that,JSON.parse(Decrypt(res)).data.data);
              }
            });
          var that = this;
          console.log(this.sign);
        });
    },
  },
  created() {
    this.$axios
      .post(
        "/CalligraphyService/user/getCatchInfo",
        {
          customerId: this.$store.state.id||this.$store.state.custId,
          customerImgHead: "string",
          customerLastTime: "2020-08-21T03:02:35.606Z",
          ifValid: 0,
          phoneNumber: "string",
          sessionId: "string",
          userName: "string",
        },
        {
          headers: {
            "X-APP-ID": "1",
            "X-APP-KEY": "1",
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        console.log(JSON.parse(Decrypt(response)))
        if(JSON.parse(Decrypt(response)).data.code=='-101'){
          this.length=0
        }
        else{
           this.length = JSON.parse(Decrypt(response)).length;
        }
      });
      //获取收藏数量
      this.$axios.post("/CalligraphyService/collection/getCollectionNumber",{custId:this.$store.state.custId||this.$store.state.id},{
        headers:{"X-Request-ID":"1"}
      })
      .then((response)=>{
        this.collectionNum=JSON.parse(Decrypt(response)).data.data
      })
  },
   //监听路由的变化
  watch:{
  $route(to,from){
    // console.log(to.query.follownum)
        this.length=(to.query.follownum+1)?to.query.follownum:this.length//获取子路由的关注人数
  }
},
  mounted() {
    $("#my-img").click(function () {
      $("#img-upload").click();
    });
  },
  updated() {
    var path = $("#img-upload").files[0];
    var arr = path.split("\\");
    console.log(arr[arr.length - 1]);
    console.log(path);
    this.$axios
      .post("/CalligraphyService/common/uploadFile", {
        headers: {
          "content-type": "multipart/form-data",
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
        params: {
          // uploadFile:arr[arr.length-1]
          uploadFile: path,
        },
      })
      .then((response) => {
        console.log(JSON.parse(Decrypt(response)));
      });
    console.log("1");
    this.$axios
      .post(
        "/CalligraphyService/user/getCatchInfo",
        {
          openid: this.getcookie(openid),
        },
        {
          headers: {
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        console.log(JSON.parse(Decrypt(response)));
        var n = JSON.parse(Decrypt(response)).data.data.length;
        for (var i = 0; i < n; i++) {
          this.follow.push(JSON.parse(Decrypt(response)).data.data[i]);
        }
      });
  },
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
  height: 22%;
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
  text-align: center;
}

.jinzi {
  font-size: 2vw;
  color: #eac994;
  margin-top: 1vh;
  font-family: YouYuan;
}
.shuzi {
  text-align: center;
  font-size: 4vw;
  color: #ebf1f5;
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

#img-upload {
  display: none;
}

.pay {
  margin-top: 10%;
  display: flex;
  width: 90vw;
  height: 30vh;
  flex-direction: row;
  justify-content: space-around;
}

.pay_first {
  border: 1px solid grey;
  border-radius: 2vw;
  width: 30%;
  height: 70%;
  background-color: #ffffff;
  float: left;
  margin-top: 4vh;
}

.pay_first:focus {
  background-color: #f9f1e4;
}

.pay_second {
  text-align: center;
  margin-top: 2vh;
}
.pay_third {
  text-align: center;
  margin-top: 3vh;
  font-size: 6vw;
  color: #e5c194;
}

// .active{
//   background-color: #f9f1e4;
// }
</style>
