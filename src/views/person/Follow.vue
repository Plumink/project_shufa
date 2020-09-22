<template>
  <div>
    <p style="text-align:center;color:#b8a18c;margin:0">
          <span class="Calligraphy_icon_eyes" />
           我 的 关 注 
    </p>
    <div class="follow_all" v-for="(item,index) in follow" :key="index">
      <img :src="item.customerImgHead" alt />
      <div style="padding-top:2vh;">
        <span class="ziti_follow" style="margin-left:2vw;">用户名：{{item.userName}}</span>
        <br />
        <div style="width:50vw;float:left;"> 
          <span
            class="ziti_follow"
            style="margin-left:2vw;"
          >手机号：{{item.phoneNumber.substr(0, 3) + '****' + item.phoneNumber.substr(7)}}</span>
        </div>
        <div style="float:left">
          <span @click="unfollow(item)" class="ziti_follow" style="margin-left:8vw;">取消关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      follow: [],
    };
  },
  methods: {
    unfollow(item) {
      this.$axios
        .post(
          "/CalligraphyService/user/unfollow",
          {
            custId: this.$store.state.id || this.$store.state.custId,
            followCatchId: item.customerId,
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
          this.$emit("deleteFans");
          console.log(response);
          if (response.data.code == "0") {
            for (var i = 0; i < this.follow.length; i++) {
              if (this.follow[i].customerId == item.customerId) {
                this.follow.splice(i, 1);
                this.$router.push({
                  path: "/main/follow",
                  query: {
                    follownum: this.follow.length, //将路由参数传给mian，即关注人数少一
                  },
                });
              } else {
              }
            }
          } else {
            alert("删除失败");
          }
        });
      // console.log(item.customerId)
    },
  },
  created() {
    this.$axios
      .post(
        "/CalligraphyService/user/getCatchInfo",
        {
          customerId: this.$store.state.id || this.$store.state.custId,
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
        if (response.data.code == "-101") {
        } else {
          var n = response.data.data.length;
          for (var i = 0; i < n; i++) {
            this.follow.push(response.data.data[i]);
          }
        }
        console.log(this.follow)
      });
  },
};
</script>

<style>
.follow_all {
  width: 100%;
  height: 11vh;
  background-color: #f9f4e6;
  margin-top: 2vh;
  border-radius: 2vw;
}

.follow_all > img {
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  margin-left: 3vw;
  margin-top: 3vw;
  float: left;
}

.ziti_follow {
  font-size: 3vw;
  font-family: YouYuan;
}
</style>