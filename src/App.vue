<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    openid:''
  }),
  created: function () {
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
        console.log(res.data.data.openid);
        that.openid = res.data.data.openid;
        var id = res.data.data.openid;
        that.setCookie("openid", id, 360);
        console.log('以获取openid，并写入cookie')
        that.$axios
          .post(
            "/CalligraphyService/user/getUserInfo",
            {
              openId: id,
            },
            {
              headers: { "X-Request-ID": "1" },
            }
          )
          .then((response) => {
            console.log('通过openid获取信息并打印')
            console.log(response);
            var userData = {
              custId: response.data.data.custId,
              custTel: response.data.data.custTel,
              custName: response.data.data.custName,
              custPass: response.data.data.custPass,
              custImgHead: response.data.data.custPass,
              tag: response.data.data.tag,
              custLastTime: response.data.data.custLastTime,
              vipEffDate: response.data.data.vipEffDate,
              openid: response.data.data.openId,
              isVip: response.data.data.isVip,
              vipExpDate: response.data.data.vipExpDate,
              invalidTime: response.data.data.invalidTime,
              ifValid: response.data.data.ifValid,
            };
            that.$store.commit("wechatLogin", userData);
          });
      });
    console.log("从本地获取用户信息")
    console.log(JSON.parse(localStorage.getItem("wechatLogin")).custName)

    if (this.$store.state.land == true || this.$store.state.openid != "") {
      if (this.$route.path == "/main") {
        this.$router.push(
          { path: "/main" },
          (onComplete) => {},
          (onAbort) => {}
        );
      } else if (this.$route.path == "/main/follow") {
        this.$router.push(
          { path: "/main/follow" },
          (onComplete) => {},
          (onAbort) => {}
        );
      } else if (this.$route.path == "/main/follower") {
        this.$router.push(
          { path: "/main/follower" },
          (onComplete) => {},
          (onAbort) => {}
        );
      } else {
        this.$router.push(
          { path: "/homelogin" },
          (onComplete) => {},
          (onAbort) => {}
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
          { path: "/" },
          (onComplete) => {},
          (onAbort) => {}
        );
      }
    }
  },
};
</script>
