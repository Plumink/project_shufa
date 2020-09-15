<template>
  <v-app id="show">
    <div class="box">
      <div class="top d-flex justify-space-between align-center mb-6">
        <span style="font-size:14px" @click="goBack()">
          <span class="Calligraphy_icon_fanhui"></span>返回
        </span>
        <span>
          <h3>作品详情</h3>
        </span>
        <div style="width:40px;height:20px"></div>
      </div>
      <div class="container">
        <div class="info_a">
          <img class="avatar" src="../../../images/bac2.jpg" width="36" height="36" />
          <div class="left">
            <div class="name">用户</div>
            <div class="date">发布时间</div>
          </div>
          <div class="right">
            <span class="Calligraphy_icon_follow"></span>
            关注
          </div>
        </div>
        <!-- <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <span class="Calligraphy_icon_good"></span>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        </div>-->
      </div>
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
      <div class="pinglun">
        <div style="width:90%;height:18vh;margin:0 auto;border-radius: 2vw;">
          <i class="iconfont icon-talk-line">
            <span style="color:grey">我来说两句</span>
          </i>
          <span style="float:right;margin-right: 2vw;margin-top: 1vh;">
            <span style="color:blues">{{number}}</span>条评论
          </span>
          <el-input type="textarea" style="height:10vh" placeholder="写下你的评论" v-model="textarea1"></el-input>
          <el-button
            type="primary"
            size="mini"
            style="float:right;margin-top:0.5vh;margin-right:2vw;width:30vw"
          >评论</el-button>
        </div>
      </div>
      <div style="margin-top:4vh">
        <comment :comments="commentData" />
      </div>
      <div style="margin-bottom:80px;border-radius:4vw">
        <v-pagination v-model="page" :length="3"></v-pagination>
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
      textarea1: "",
      number: "3",
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

<style scoped lang="scss">
@import "../../../public/scss/index";
#show {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 6%;
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
  background-color: #4dd0e1;
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
}
.pinglun {
  width: 100%;
  height: 24vh;
  border-bottom: 1px dashed #bdbdbd;
}
.iconfont {
  font-size: 8vw;
  text-align: center;
  float: left;
  margin-left: 2vw;
}
.iconfont span {
  font-size: 4vw;
  margin-bottom: 2vh;
  line-height: 20%;
  position: relative;
  bottom: 1vh;
}

.info_a {
  display: flex;
  align-items: center;
  .avatar {
    border-radius: 50%;
  }
  .left {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .name {
      font-size: 16px;
      color: $text-main;
      margin-bottom: 5px;
      font-weight: 500;
    }
    .date {
      font-size: 12px;
      color: $text-minor;
    }
  }
  .right{
    width: 70%;
    text-align: right;
  }
}
</style>