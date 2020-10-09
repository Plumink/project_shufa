<template>
  <v-app id="show">
    <TopNavigation />
    <Search />
    <div class="d-flex flex-row justify-space-around box" v-for="(item,index) in item" :key="index">
      <div class="box-left">
        <img src="../../../images/train.jpg" alt />
      </div>
      <div class="d-flex flex-column justify-space-around box-right">
        <p style="font-size:12px;margin:0px;color:#757575;">陶然书苑书法培训火热报名中</p>
        <h4>{{'培训老师：'+'高新月，中书协会' | title}}</h4>
        <div class="d-flex flex-row justify-start align-center">
          <span style="font-size:12px;margin-right:20px">书法</span>
          <span style="font-size:12px">阅读 {{item.read}}</span>
        </div>
        <span style="font-size:12px;margin:0;color:#BDBDBD;">{{'①厦门市思明区后语录143号1309室' | content}}</span>
      </div>
    </div>
    <div style="margin-bottom:60px">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
    <FootNavigation />
  </v-app>
</template>

<script>
import {Decrypt,Encrypt} from '../../api/utils'
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import Search from "../../components/Search";
export default {
  components: {
    FootNavigation,
    TopNavigation,
    Search,
  },
  data() {
    return {
      item: [
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
        {
          image: "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
          number: "70162",
          title: "李商隐《锦瑟》草书版",
          name: "吕峰",
          read: "0",
          content:
            "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃",
        },
      ],
      page: 1,
    };
  },
  filters: {
    title(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 12) + "...";
      }
      return value;
    },
    content(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 14) + "...";
      }
      return value;
    },
  },
};
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #00838f;
}
.box-left {
  width: 25%;
  padding: 20px;
}
.box-right {
  width: 75%;
  padding: 10px;
}
.box-left img {
  width: 100%;
  height: 100%;
}
</style>