<template>
  <div class="head">
    <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt />
    <span class="font">
      <i style="font-size:10vw" class="iconfont icon-menu-line" @click.stop="dialog = true"></i>
    </span>
      <div @click="jumpmain()">
        <p style="color:blue;text-align:center;margin-top:4vh">{{username}}</p>
    </div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card d-flex align-center mb-6 style="padding:10px">
        <div class="d-flex justify-space-around mb-6" v-for="(item,index) in jump" :key="index">
          <span
            v-for="(item,index) in item.line"
            :key="index"
            @click="topJump(item.name,item.link,item.login)"
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
      username: this.$store.state.userName,
      dialog: false,
      jump: [
        {
          line: [
            {
              name: "字典首页",
              link: this.$store.state.land ? "/homelogin" : "/",
              login: this.$store.state.land,
            },
            { name: "个人首页", link: "/main", login: this.$store.state.land },
            { name: "我的展厅", link: "/show", login: this.$store.state.land },
          ],
        },
        {
          line: [
            { name: "名帖字库", link: "/font", login: this.$store.state.land },
            {
              name: "诗文查询",
              link: "https://m.gushiwen.org/default_1.aspx",
              login: this.$store.state.land,
            },
            {
              name: "原帖书论",
              link: "/originalcopycalligraphy",
              login: this.$store.state.land,
            },
          ],
        },
        {
          line: [
            {
              name: "微店入口",
              link: "https://weidian.com/?userid=932664957",
              login: this.$store.state.land,
            },
            { name: "赛培资讯", link: "/train", login: this.$store.state.land },
            { name: "退出登陆", link: "/", login: this.$store.state.land },
          ],
        },
      ],
    };
  },
  methods: {
    jumpmain(){
      this.$router.push('./main')
    },
    topJump(name, url, login) {
      if (name == "字典首页") {
        if (this.$route.path == url) {
        } else {
          this.$router.push(url);
        }
      } 
      else if (name == "个人首页") {
        if (this.$route.path == url) {
        } else {
          if (login == false || login == null) {
            this.$message.error("尚未登陆,请登录");
          } else {
            this.$router.push(url);
          }
        }
      }
      else if (name == "诗文查询") {
        window.location.href = url;
      }
      else if (name == "微店入口") {
        window.location.href = url;
      }
      else if (name == "退出登陆") {
        if (this.$route.path == url) {
        } else {
          if (login == false || login == null) {
            this.$message.error("尚未登陆,请登录");
          } else {
            var signOut = {
              login: false,
              phone: "",
              userName: "",
              customerImgHead: "",
              id: "",
            };
            this.$store.commit("islogin", signOut);
            this.$router.push(url);
          }
        }
      }
      else {
        if (this.$route.path == url) {
        } else {
          this.$router.push(url);
        }
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