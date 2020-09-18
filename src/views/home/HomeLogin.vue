<template>
  <v-app id="inspire">
    <div class="total">
      <TopNavigation />
      <div class="head"></div>
      <div class="middle_head">
        <template>
          <v-form>
            <v-container style="width: 80vw; padding: 0;" ref="in">
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field v-model="content" label="请输入文字" outlined background-color="#fff"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </template>
      </div>
      <div style="margin-top:15px">
        <div class="d-flex flex-row justify-space-around align-center" >
          <div style="width:30%">
             <v-select
              background-color="#fff"
              label="字体"
              class="ml-2 mr-2"
              outlined
              :items="zitiSelect"
              v-model="initialZiti"
              dense
            ></v-select>
          </div>
           <div style="width:30%">
              <v-autocomplete v-model="first" :items="author" dense filled label="作者"> </v-autocomplete>
            </div>
            <div style="width:30%;margin-right:10px">
              <v-autocomplete v-model="second" :items="author" dense filled label="次选"> </v-autocomplete>
            </div>
        </div>  
        </div>
      <div class="middle_l d-flex flex-row">
        <template>
          <v-col 
            class="d-flex flex-row"
            style="width: 20vw; padding-right: 0;" 
            cols="12"
            sm="6"
            md="4"
          >
            <div>
              <v-text-field
                v-model="row_num"
                label="竖排行数"
                outlined
                dense
                type="number"
                background-color="#fff"
                style="width: 40vw;"
              ></v-text-field>
            </div>
            <div style="margin-left: 8vw;" class="d-flex flex-column justify-sm-space-around">
              <v-checkbox style="margin: 0; height: 5vh;" label="横排" v-model="horizontal"></v-checkbox>
              <v-checkbox style="margin: 0;" label="左起" v-model="left"></v-checkbox>
            </div>
          </v-col>
        </template>
      </div>
      <div>
        <template>
          <div style="text-align: center;" class="my-2 mt-8">
            <v-btn small color="primary" @click="toChildren()">生成书法</v-btn>
            <v-btn class="ml-8" small color="primary" @click="toRelease()">发布作品</v-btn>
            <v-overlay :value="overlay">
              <v-btn color="#616161" @click="overlay = false">{{overlayText}}</v-btn>
            </v-overlay>
          </div>
        </template>
      </div>
    </div>
    <div class="upvip">
      <template>
        <div style="text-align: center;" class="my-2">
          <v-btn large color="error" @click="imperfect()">成为会员</v-btn>
        </div>
      </template>
    </div>
    <div style="height: 60vh;">
      <p style="text-align: center;">
        (会员享有
        <span style="color: blue; font-size: 5vw;">完整名帖字库</span>
        )
      </p>
      <br />
      <p class="word_p">通篇集字，灵活排版</p>
      <p class="word_p">置顶公众号，使用更方便</p>
      <p style="text-align: center; margin-top: 2em;">
        <img
          src="https://www.mocking.space/zimg/f8606a167fc4cd430b725a4489cfb719?p=0&w=200&h=250"
          alt
        />
      </p>
    </div>
    <FootNavigation/>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import Cookies from "js-cookie";

export default {
  components: {
    FootNavigation,
    TopNavigation,
  },
  data() {
    return {
      initialZiti:'',//初始化ziti，如果路由有传值的话，即字体双向数据绑定，默认选中字体
      zitiSelect:[],//字体下拉选择
      overlayText: "输入有误",
      absolute: true,
      overlay: false,
      openid: "",
      fontId: "",//字体Id
      first: "",
      second: "",
      content: "",
      dataAuthor:[],
      word: "",
      row_num: "4",
      ziti: [],//字体所有对象属性的数组
      author: [],
      code: "",
      left:false,
      horizontal:false,
      items: [
        {
          src:
            "https://www.mocking.space/zimg/fa91d3c069b6377c2771b696f21d955f?p=0",
        },
        {
          src:
            "https://www.mocking.space/zimg/cb7789e8d73d2654f4e055d54a8d0136?p=0",
        },
        {
          src:
            "https://www.mocking.space/zimg/48372f575e542e87ebe3f1a3eb0cb407?p=0",
        },
        {
          src:
            "https://www.mocking.space/zimg/f8606a167fc4cd430b725a4489cfb719?p=0",
        },
      ],
      value: "",
    };
  },
  methods: {
    imperfect(){//跳转到个人中心充值
      this.$router.push({
        path:'/main'
      })
    },
    toRelease() {
      this.$router.push({
        path:'/release'
      })
    },
    toChildren() {
      console.log(this.left);
      if (this.content == "") {
        this.overlayText = "内容不为空";
        this.overlay = !this.overlay;
      } else if (this.initialZiti == "") {
        this.overlayText = "请选择字体";
        this.overlay = !this.overlay;
      } else if (this.first == "") {
        this.overlayText = "请选择作者";
        this.overlay = !this.overlay;
      } else if (this.second == "") {
        this.overlayText = "请选择次选";
        this.overlay = !this.overlay;
      } else if (this.row_num == "") {
        this.overlayText = "请输入竖排行数";
        this.overlay = !this.overlay;
      } else {
        var firstAuthorId
        var secondAuthorId
        for(var i=0;i<this.dataAuthor[0].length;i++){
          if(this.first==this.dataAuthor[0][i].authorName){
            firstAuthorId=this.dataAuthor[0][i].authorId
            break;
          }
        }
        for(var i=0;i<this.dataAuthor[0].length;i++){
          if(this.second==this.dataAuthor[0][i].authorName){
            console.log(this.dataAuthor[0][i].authorId)
            secondAuthorId=this.dataAuthor[0][i].authorId
            break;
          }
        }
        // 通过initalZiti寻找ziti（字体数组）中对应的字体Id
        for(var i=0;i<this.ziti[0].length;i++){
          if(this.initialZiti==this.ziti[0][i].calligraphyName){
            this.fontId=this.ziti[0][i].calligraphyId
          }
        }
        var message = {
          text: this.content,
          calligraphyTypeId: this.fontId,
          firstAuthorId: firstAuthorId,
          secondAuthorId: secondAuthorId,
          thirdAuthorId: "0",
          row_num: this.row_num,
          left:this.left,
          horizontal:this.horizontal
        };
        this.$router.push({
          path: "/generate",
          query: {
            message: message,
          },
        });
      }
    },
  },
  //监听路由的变化
  watch:{
  $route(to,from){
        this.initialZiti=to.query.font
        // 对路由变化作出响应...
  }
},
  mounted() {
    this.initialZiti=this.$route.query.font
    var that = this;
    this.$axios.get(
        "/CalligraphyService/common/getInitParameter?packageName=mobileHomePage",
        {
          headers: {
            "X-APP-ID": "1",
            "X-APP-KEY": "1",
            "X-Request-ID": "1",
          },
        }
      )
      .then(function (res) {
        
        var a = res.data.data;
        that.ziti.push(a.CalligraphyTypes);
        console.log(that.ziti)
        for(var i=0;i<that.ziti[0].length;i++){
          that.zitiSelect.push(that.ziti[0][i].calligraphyName);
        }
        that.dataAuthor.push(a.Authors)
        for(var i=0;i<a.Authors.length;i++){
          that.author.push(a.Authors[i].authorName);
        }
      });
  },
};
</script>

<style scoped>
@import "./style.css";

.word_p {
  text-align: center;
  font-weight: 800;
  font-size: 1em;
  margin: 0;
  padding: 0;
}
</style>
