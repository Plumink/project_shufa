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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  </v-bottom-navigation>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data() {
    return {
      activeBtn: 1,
      dictionaries: "草书",
      person: "个人中心",
      study: "书法学习",
      items_dictionaries: [
        { title: "草书" },
        { title: "行书" },
        { title: "楷书" },
        { title: "隶书" },
        { title: "篆书" },
      ],
      items_person: [
        { title: "个人中心" },
        { title: "微店入口" },
        { title: "我要分享" },
        { title: "我的保存" },
        { title: "成为会员" },
      ],
      items_study: [
        { title: "免费晒", link: "/show" },
        { title: "名帖字库", link: "/font" },
        { title: "原帖书论", link: "/originalcopycalligraphy" },
        { title: "各地培训", link: "/train" },
        { title: "诗文查询", link: "https://www.gushiwen.org/" },
      ],
      offset: true,
    };
  },
  methods: {
    jump_dictionaries(item) {
      this.dictionaries = item.title;
    },
    jump_person(item) {
      this.person = item.title;
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