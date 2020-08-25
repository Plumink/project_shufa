<template>
  <v-bottom-navigation id="foot-nav" style="position:fixed">
    <v-btn value="recent" width="33vw" height="100%">
      <v-menu top :offset-y="offset" id="foot-nav-box">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" id="foot-nav-btn">{{dictionaries}}</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items_dictionaries"
            :key="index"
            @click="jump_dictionaries(item)"
          >
            <v-list-item-title>{{ item.calligraphyName }}</v-list-item-title>
          </v-list-item>
        </v-list> 
      </v-menu>
    </v-btn>
    <v-btn value="recent" width="40vw" height="100%">
      <v-menu top :offset-y="offset" id="foot-nav-box">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" id="foot-nav-btn">{{study}}</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items_study" :key="index" @click="jump_study(item)">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn value="recent" width="40vw" height="100%">
      <v-menu top :offset-y="offset" id="foot-nav-box">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" id="foot-nav-btn">{{person}}</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items_person"
            :key="index"
            @click="jump_person(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data() {
    return {
      activeBtn: 1,
      dictionaries: "集字字典",
      person: "会员中心",
      study: "书法学习",
      items_dictionaries: "",
      items_person: [
        { title: "个人中心", link: "/main" },
        { title: "微店入口", link: "https://weidian.com/?userid=932664957" },
        { title: "我的关注", link: "/main/follow" },
        { title: "我的收藏", link: "/main/colluction" },
        { title: "我的发布", link: "/main/follower" },
      ],
      items_study: [
        { title: "我的展厅", link: "/show" },
        { title: "名帖字库", link: "/font" },
        { title: "原帖书论", link: "/originalcopycalligraphy" },
        { title: "赛培资讯", link: "/train" },
        { title: "诗文查询", link: "https://www.gushiwen.org/" },
      ],
      offset: true,
    };
  },
  mounted() {
    var that = this;
    this.$axios
      .get(
        "/common/getInitParameter?packageName=mobileHomePage",
        {
          headers: {
            "X-APP-ID": "1",
            "X-APP-KEY": "1",
            "X-Request-ID": "1",
          },
          params: {},
        }
      )
      .then(function (res) {
        var a = res.data.data.CalligraphyTypes;
        that.items_dictionaries = a;
        for(var i=0;i<a.length;i++){
          a[i].link='/'
        }
      });
  },
  methods: {
    jump_dictionaries(item) {
      this.$emit("fontChange", item);
      if (this.$route.path == item.link) {
      } else {
        // this.$router.push({ path: item.link });
        if(this.$store.state.land==true){
      this.$router.push(
            {path: '/homelogin'},
            onComplete => {},
            onAbort => {}
         )
    }
    else{
      this.$router.push({ path: item.link });
    }
      }
    },
    jump_person(item) {
      if (this.$route.path == item.link) {
      } else {
        if (item.title == "微店入口") {
          window.location.href = item.link;
        } else {
          if (this.$store.state.land == null || this.$store.state.land==false ) {
            this.$message.error("尚未登陆");
          } else {
            this.$router.push({ path: item.link });
          }
        }
      }
    },
    jump_study(item) {
      if (this.$route.path == item.link) {
      } else {
        if (item.title == "诗文查询") {
          window.location.href = item.link;
        } else {
          this.$router.push({ path: item.link });
        }
      }
    },
  },
};
</script>

<style>
#foot-nav-box {
  float: left;
}
@import "../style.css";
</style>