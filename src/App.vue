<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Decrypt, Encrypt} from '../src/api/utils'

export default {
  name: "app",
  data: () => ({
    openid: ''
  }),
  created: function () {
    console.log('123')
    var code;
    var url = document.URL;
    var that = this;
    code = url.match(/=(\S*)&/)[1];
    console.log(code);
    this.code = code;
    this.$axios
      .get("/CalligraphyService/user/getOpenId", {
        params: {
          "X-Request-ID": "1",
          code: this.code,
        },
      })
      .then(function (res) {
        console.log(JSON.parse(Decrypt(res.data.data, res.data.iv)).openid);
        that.openid = JSON.parse(Decrypt(res.data.data, res.data.iv)).openid;
        var id = JSON.parse(Decrypt(res.data.data, res.data.iv)).openid;
        that.setCookie("openid", id, 360);
        console.log('以获取openid，并写入cookie')
        that.$axios
          .post(
            "/CalligraphyService/user/getUserInfo",
            {
              openId: id,
            },
            {
              headers: {"X-Request-ID": "1"},
            }
          )
          .then((response) => {
            var userData = {
              custId: JSON.parse(Decrypt(response.data.data, response.data.iv)).custId,
              custTel: JSON.parse(Decrypt(response.data.data, response.data.iv)).custTel,
              custName: JSON.parse(Decrypt(response.data.data, response.data.iv)).custName,
              custPass: JSON.parse(Decrypt(response.data.data, response.data.iv)).custPass,
              custImgHead: JSON.parse(Decrypt(response.data.data, response.data.iv)).custImgHead,
              tag: JSON.parse(Decrypt(response.data.data, response.data.iv)).tag,
              custLastTime: JSON.parse(Decrypt(response.data.data, response.data.iv)).custLastTime,
              vipEffDate: JSON.parse(Decrypt(response.data.data, response.data.iv)).vipEffDate,
              openid: JSON.parse(Decrypt(response.data.data, response.data.iv)).openId,
              isVip: JSON.parse(Decrypt(response.data.data, response.data.iv)).isVip,
              vipExpDate: JSON.parse(Decrypt(response.data.data, response.data.iv)).vipExpDate,
              invalidTime: JSON.parse(Decrypt(response.data.data, response.data.iv)).invalidTime,
              ifValid: JSON.parse(Decrypt(response.data.data, response.data.iv)).ifValid,
            };
            console.log('调试由openid获取用户信息接口')
            console.log(userData)
            that.$store.commit("wechatLogin", userData);
          });
      });

    if (this.$store.state.land == true || this.$store.state.openid != "") {
      if (this.$route.path == "/main") {
        this.$router.push(
          {path: "/main"},
          (onComplete) => {
          },
          (onAbort) => {
          }
        );
      } else if (this.$route.path == "/main/follow") {
        this.$router.push(
          {path: "/main/follow"},
          (onComplete) => {
          },
          (onAbort) => {
          }
        );
      } else if (this.$route.path == "/main/follower") {
        this.$router.push(
          {path: "/main/follower"},
          (onComplete) => {
          },
          (onAbort) => {
          }
        );
      } else {
        this.$router.push(
          {path: "/homelogin"},
          (onComplete) => {
          },
          (onAbort) => {
          }
        );
      }
    } else {
      if (
        this.$route.path == "/main" ||
        this.$route.path == "/main/follow" ||
        this.$route.path == "/main/follower"
      ) {
        this.$message.error("尚未登陆");
        this.$router.push(
          {path: "/"},
          (onComplete) => {
          },
          (onAbort) => {
          }
        );
      }
    }
  },
};
</script>
