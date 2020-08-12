<template>
  <div class="head">
    <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt />
    <span class="font">
      <i style="font-size:10vw" class="iconfont icon-menu-line" @click.stop="dialog = true"></i>
    </span>
    <div>
      <router-link to="/main">
        <p style="color:blue;text-align:center;margin-top:4vh">{{username}}</p>
      </router-link>
    </div>

    <v-dialog v-model="dialog" max-width="290">
      <v-card d-flex align-center mb-6 style="padding:10px">
        <div class="d-flex justify-space-around mb-6" v-for="(item,index) in jump" :key="index">
          <span
            v-for="(item,index) in item.line"
            :key="index"
            @click="topJump(item.link)"
          >{{item.name}}</span>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data() {
    return {
      username: this.$store.state.phone,
      dialog: false,
      jump: [
        {
          line: [
            { name: "字典首页", link: "/homelogin" },
            { name: "个人首页", link: "/main" },
            { name: "开通辨析", link: "" },
          ],
        },
        {
          line: [
            { name: "我的保存", link: "" },
            { name: "退出登陆", link: "/" },
            { name: "免费晒", link: "/show" },
          ],
        },
      ],
    };
  },
  methods: {
    topJump(url) {
      if (url == "/") {
        var signOut={
          isLogin:false,
          phone:''
        }
        this.$store.commit('islogin',signOut);
        this.$router.push(url);
      } else {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.total {
  width: 100vw;
  height: 100vh;
  background-color: #f9f4e6;
}

.head {
  width: 100vw;
  height: 10vh;
  background-color: #f9f4e6;
  position: fixed;
  z-index: 1000;
}

.head img {
  width: 15vw;
  height: 15vw;
  position: absolute;
  left: 2vw;
  top: 2vw;
}

.font {
  width: 10vw;
  height: 10vw;
  position: absolute;
  right: 2vw;
  line-height: 10vh;
}
</style>