<template>
  <v-app id="show">
    <TopNavigation />
    <div class="box">
      <span style="font-size:14px" @click="goBack()"><span class="Calligraphy_icon_fanhui"></span>返回</span>
      <div class="d-flex flex-column content">
        <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt />
        <br />
        <p class="poem">
          故人西辞黄鹤楼，
          烟花三月下扬州。
          孤帆远影碧空尽，
          不见长江滚滚来
        </p>
      </div>
      <div class="publisher_box">
        <div class="d-flex flex-row publisher">
          <h4>发布者：</h4>
          <p style="color:#0277BD;">墨玉</p>
        </div>
        <div class="d-flex flex-row align-center justify-space-between" style="width:60%">
          <p style="font-size:12px;color:#ECEFF1;">阅读：123</p>
          <p style="font-size:12px;color:#ECEFF1;">
            <span class="Calligraphy_icon_good"></span>
            点赞：123</p>
        </div>
      </div>
      <comment :comments="commentData" />
      <div style="margin-bottom:60px">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </div>
    <FootNavigation />
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import * as CommentData from "./mockdata";
import comment from "../../components/Comment";
export default {
  data() {
    return {
      commentData: [],
      page: 1,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {
    FootNavigation,
    TopNavigation,
    comment,
  },
  created() {
    this.commentData = CommentData.comment.data;
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
  margin-top: 10vh;
  height: 100%;
}
.content {
  width: 100%;
  padding: 5% 20% 5% 20%;
  border-bottom: 1px dashed #bdbdbd;
}
.poem {
  font-size: 12px;
  font-weight: bold;
  margin: 10px;
}
.publisher_box {
  width: 90%;
  height: 80px;
  background-color: #4DD0E1;
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
}
.publisher{

}
</style>