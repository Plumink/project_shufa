<template>
  <v-app id="show">
    <div class="box">
      <div class="top d-flex justify-space-between align-center">
        <span style="font-size:14px" @click="goBack()">
          <span class="Calligraphy_icon_fanhui"></span>返回
        </span>
        <span>
          <h3>作品详情</h3>
        </span>
        <span style="font-size:14px" v-if="!isCollection">
          <span class="Calligraphy_icon_uncollection" style="color:#BDBDBD" @click="collection()">收藏</span>
        </span>
        <span style="font-size:14px" v-if="isCollection">
          <span class="Calligraphy_icon_collection" style="color:#F4511E" @click="unCollection()">取消收藏</span>
        </span>
      </div>
      <div class="d-flex align-center justify-space-between info_a">
        <div class="d-flex flex-row align-center justify-center">
          <img class="avatar" :src="this.$route.query.custImgHead" width="36" height="36" @click="jumpOther()" />
          <div class="left">
            <div class="name">{{this.$route.query.custName}}</div>
            <div class="date">{{this.$route.query.releaseTime}}</div>
          </div>
        </div>
        <div class="right" @click="follow()" v-if="!isfollow">
          <span class="Calligraphy_icon_follow" style="color:#BDBDBD">关注</span>
        </div>
        <div class="right" @click="unfollow()" v-if="isfollow">
          <span class="Calligraphy_icon_follow" style="color:#F4511E">取消关注</span>
        </div>

        <!-- <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <span class="Calligraphy_icon_good"></span>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        </div>-->
      </div>
      <div class="d-flex flex-column content" v-for="(item,index) in this.$route.query.messageInfo" :key="index">
        <img :src="item.releaseFontUrl" style="max-width:100%;max-height:100%" alt />
        <br />
        <p class="poem">
          {{item.releaseFontContent}}
        </p>
      </div>
      <div class="pinglun">
        <div style="width:90%;height:18vh;margin:0 auto;border-radius: 2vw;">
          <i class="iconfont icon-talk-line"></i>
          <span style="float:right;margin-right: 2vw;margin-top: 1vh;">
            <span style="color:blues">{{commentData.length}}</span>条评论
          </span>
          <el-input type="textarea" style="height:10vh" placeholder="写下你的评论" v-model="textarea1"></el-input>
          <div style="float:left;margin-top:0.5vh;margin-left:2vw;">
            <span
              class="Calligraphy_icon_good"
              :style="isgood?'color:#FFEE58':'color:#BDBDBD'"
              @click="good()"
            >{{likesNumber}}</span>
          </div>
          <el-button
            type="primary"
            size="mini"
            style="float:right;margin-top:0.5vh;margin-right:2vw;width:30vw"
            @click="comment()"
          >评论</el-button>
        </div>
      </div>
      <div style="margin-top:4vh">
        <comment :comments="commentData" />
      </div>
      <div style="width:100%;height:60px"></div>
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
  components: {
    FootNavigation,
    TopNavigation,
    comment,
  },
  data() {
    return {
      commentData: [], //传入评论展示组件的信息
      page: 1,
      textarea1: "",
      number: "3",
      isfollow: false, //判断是否关注
      obj: {}, //辅助存储对象
      index: "", //辅助下标
      time: "", //发布时间
      cust: {}, //用户信息
      likesNumber: "",
      isgood: false, //是否点赞
      isCollection: false //是否收藏
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 跳转他人首页
    jumpOther(){ 
      console.log()
      this.$router.push({
        path:'/otherhome',
        query:{
          custId:this.$route.query.custId,
          custImgHead:this.$route.query.custImgHead,
          custName:this.$route.query.custName
        }
      })
    },
    //点赞或取消点赞接口
    good() {
      if (this.isgood == true) {
        this.$axios
          .post(
            "/CalligraphyService/user/cancelLikes",
            {
              custId: this.$store.state.id || this.$store.state.custId,
              releaseId: this.$route.query.releaseid,
            },
            {
              headers: {
                "X-Request-ID": "1",
              },
            }
          )
          .then((response) => {
            if (response.data.code == "0") {
              this.isgood = false;
              --this.likesNumber;
            }
          });
      } else {
        this.$axios
          .post(
            "/CalligraphyService/user/good",
            {
              custId: this.$store.state.id || this.$store.state.custId,
              releaseId: this.$route.query.releaseid,
            },
            {
              headers: {
                "X-Request-ID": "1",
              },
            }
          )
          .then((response) => {
            if (response.data.code == "0") {
              this.isgood = true;
              ++this.likesNumber;
            }
          });
      }
    },
    follow() {
      //关注接口
      let params = {
        custId: this.$store.state.id || this.$store.state.custId, //用户ID
        followCatchId: this.$route.query.custId, //被关注者Id——待替换
      };
      this.$axios
        .post("/CalligraphyService/user/follow", params, {
          headers: {
            "X-Request-ID": "1",
          },
        })
        .then((response) => {
          if (response.data.code == "0") {
            this.isfollow = !this.isfollow;
          } else {
            alert("关注失败");
          }
        });
    },
    unfollow(item) {
      //取消关注
      this.$axios
        .post(
          "/CalligraphyService/user/unfollow",
          {
            custId: this.$store.state.id || this.$store.state.custId,
            followCatchId: this.$route.query.custId, //被关注者Id——待替换
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
          if ((response.data.code = "0")) {
            this.isfollow = !this.isfollow;
          } else {
            alert("关注关注失败");
          }
        });
      // console.log(item.customerId)
    },
    //添加收藏
    collection(){
      this.$axios.post('/CalligraphyService/collection/doCollection',{
        custId: this.$store.state.id || this.$store.state.custId,
        releaseId: this.$route.query.releaseid,
      },{
        headers:{
        "X-Request-ID":"1"
      }
      })
      .then((response)=>{
        this.isCollection=true
      })
    },
    //取消收藏
    unCollection(){
      this.$axios.post('/CalligraphyService/collection/unCollection',{
        custId: this.$store.state.id || this.$store.state.custId,
        releaseId: this.$route.query.releaseid,
      },{
        headers:{
        "X-Request-ID":"1"
      }
      })
      .then((response)=>{
        this.isCollection=false
      })
    },
    comment() {
      //发布评论功能
      let params = {
        //传参
        commentContent: this.textarea1, //获取评论内容
        commentId: "0",
        commentTime: new Date().getTime(), //时间戳
        custId: this.$store.state.id || this.$store.state.custId, //用户ID
        isShow: 0, //是否展示
        releaseId: this.$route.query.releaseid, //发布Id
      };
      this.time = params.time;
      this.$axios
        .post("/CalligraphyService/user/comment", params, {
          headers: {
            "X-Request-ID": "1",
          },
        })
        .then((response) => {
          if (response.data.code == "0") {
            alert("评论成功");
            //如果评论成功，则调用获取评论内容接口，将新评论传入评论数组
            this.obj = {
              custId: this.$store.state.id || this.$store.state.custId, //发布者Id
              commentContent: this.textarea1, //发布内容
              commentTime: this.time, //发布时间
              isShow: 0, //是否展示
              custName: this.$store.state.custName, //发布者姓名
              custImgHead:
                this.$store.state.customerImgHead ||
                this.$store.state.custImgHead, //发布者头像
              isVip: this.$store.state.isVip, //发布者是否是VIP
            };
            this.commentData.push(this.obj);
            this.textarea1 = "";
          } else {
            alert("评论失败");
          }
        });
    },
  },
  created() {
    // this.commentData = CommentData.comment.data;
    let commentParams = {
      releaseId: this.$route.query.releaseid,
      commentContent: "string",
      commentId: 0,
      commentTime: "2020-09-17T01:41:42.232Z",
      custId: 0,
      isShow: 0,
    };
    this.$axios
      .post("/CalligraphyService/user/getComment", commentParams, {
        //请求评论的数据
        headers: {
          "X-Request-ID": "1",
        },
      })
      .then((response) => {
        console.log(response.data.data); //返回的评论数据，不包含用户信息
        for (var i = 0; i < response.data.data.length; i++) {
          //通过查询用户信息接口，将每个用户信息查询到
          this.obj = {
            custId: response.data.data[i].custId, //发布者Id
            commentContent: response.data.data[i].commentContent, //发布内容
            commentTime: this.formatTime(response.data.data[i].commentTime), //发布时间
            isShow: response.data.data[i].isShow, //是否展示
            custName: "", //发布者姓名
            custImgHead: "", //发布者头像
            isVip: "", //发布者是否是VIP
          };
          this.commentData.push(this.obj);
        }
        if (response.data.data.length != 0) {
          var that = this;
          getGoodsList(0, this.commentData.length, that);
        } //递归发送请求
        function getGoodsList(j, length, that) {
          console.log(that.commentData[j]);
          var custId = that.commentData[j].custId;
          console.log(custId);
          that.$axios
            .post(
              "/CalligraphyService/user/getUserInfo",
              { custId: custId },
              {
                headers: {
                  "X-Request-ID": "1",
                },
              }
            )
            .then((response) => {
              console.log(that.commentData);
              that.commentData[j].custName = response.data.data.custName;
              that.commentData[j].custImgHead = response.data.data.custImgHead;
              that.commentData[j].isVip = response.data.data.isVip;

              if (++j < length) {
                getGoodsList(j, length, that);
              }
            });
        }
      });
    console.log(this.commentData);
    let params = {
      custId: this.$store.state.id || this.$store.state.custId,
      followCatchId: this.$route.query.custId, //被关注者Id——待替换
    };
    // 获取用户是否关注信息
    this.$axios
      .post("/CalligraphyService/user/checkFollow", params, {
        headers: {
          "X-Request-ID": "1",
        },
      })
      .then((response) => {
        if (response.data.data.ifFollow == "1") {
          this.isfollow = true;
        }
      });
    //获取点赞数量
    this.$axios
      .post(
        "/CalligraphyService/user/getLikesNumber",
        { releaseId: this.$route.query.releaseid },
        {
          headers: {
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        this.likesNumber = response.data.data.likesNumber;
      });
    //判断是否点赞
    this.$axios
      .post(
        "/CalligraphyService/user/checkGood",
        {
          custId: this.$store.state.id || this.$store.state.custId,
          releaseId: this.$route.query.releaseid,
        },
        {
          headers: {
            "X-Request-ID": "1",
          },
        }
      )
      .then((response) => {
        if (response.data.data.isGood == "1") {
          this.isgood = true;
        }
      });

      //判断是否收藏
      this.$axios.post('/CalligraphyService/collection/isCollection',{
        custId: this.$store.state.id || this.$store.state.custId,
          releaseId: this.$route.query.releaseid,
      },{
        headers:{
          "X-Request-ID":"1"
        }
      })
      .then((response)=>{
        console.log(response)
        this.isCollection=response.data.data.isCollection
      })
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
  height: 60px;
  padding: 6px;
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
  padding: 10px;
}
.avatar {
  border-radius: 50%;
}
.left {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
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
.right {
  text-align: right;
}
</style>