<template>
  <v-app id="inspire">
    <div class="total">
      <TopNavigation />
      <div class="head">
        <p style="z-index">yongh</p>
      </div>
      <div class="middle">
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
        <div class="mt-4 middle_m d-flex flex-row justify-sm-space-around mb-6">
          <v-select
            style="width: 10vw; height: 8vh;"
            background-color="#fff"
            class="ml-2 mr-2"
            label="字体"
            :items="ziti[0]"
            v-model="fontId"
            item-text="calligraphyName"
            item-value="calligraphyId"
            outlined
            dense
          >
            <!-- {{ziti.calligraphyName}} -->
          </v-select>
          <v-select
            style="width: 10vw; height: 8vh;"
            background-color="#fff"
            class="ml-2 mr-2"
            v-model="first"
            label="作者"
            :items="author[0]"
            item-text="authorName"
            item-value="authorId"
            outlined
            dense
          ></v-select>
          <v-select
            style="width: 10vw; height: 8vh;"
            background-color="#fff"
            class="ml-2 mr-2"
            label="次选"
            v-model="second"
            :items="author[0]"
            item-text="authorName"
            item-value="authorId"
            outlined
            dense
          ></v-select>
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
                <v-checkbox style="margin: 0; height: 5vh;" label="横排"></v-checkbox>
                <v-checkbox style="margin: 0;" label="左起"></v-checkbox>
              </div>
            </v-col>
          </template>
        </div>
        <div>
          <template>
            <div style="text-align: center;" class="my-2 mt-8">
              <v-btn small color="primary" @click="toChildren()">生成书法</v-btn>
              <v-overlay
            :value="overlay"
          >
            <v-btn
              color="#616161"
              @click="overlay = false"
            >
              {{overlayText}}
            </v-btn>
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
      <FootNavigation @fontChange="upFont" />
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
export default {
  components: {
    FootNavigation,
    TopNavigation,
  },
  data() {
    return {
      overlayText:'输入有误',
      absolute: true,
      overlay: false,
      fontId: "",
      first: "",
      second: "",
      content: "",
      font: "",
      word: "",
      row_num: "4",
      fontId: "",
      ziti: [],
      author: [],
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
    };
  },
  methods: {
    upFont(title) {
      this.font = title.calligraphyName;
    },
    toChildren() {
      if(this.content==''){
        this.overlayText='内容不为空'
        this.overlay = !this.overlay
      }
      else if(this.fontId==''){
        this.overlayText='请选择字体'
        this.overlay = !this.overlay
      }
      else if(this.first==''){
        this.overlayText='请选择作者'
        this.overlay = !this.overlay
      }
      else if(this.second==''){
        this.overlayText='请选择次选'
        this.overlay = !this.overlay
      }
       else if(this.row_num==''){
        this.overlayText='请输入竖排行数'
        this.overlay = !this.overlay
      }
      else{
      console.log(
        this.row_num,
        this.content,
        this.ziti[0][this.fontId - 1].calligraphyName,
        this.author[0][this.first - 1].authorId,
        this.author[0][this.second - 1].authorId
      );
      var message = {
        text: this.content,
        calligraphyTypeId: this.ziti[0][this.fontId - 1].calligraphyId,
        firstAuthorId: this.author[0][this.first - 1].authorId,
        secondAuthorId: this.author[0][this.second - 1].authorId,
        thirdAuthorId: "0",
        row_num: this.row_num,
      };
      this.$router.push({
        path: "/generate",
        query: {
          message: message,
        },
      });
      }
    }
  },
  mounted() {
    var that = this;
    this.$axios
      .get("/common/getInitParameter?packageName=mobileHomePage", {
        headers: {
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
      })
      .then(function (res) {
        var a = res.data.data;
        that.ziti.push(a.CalligraphyTypes);
        that.author.push(a.Authors);
        console.log(that.author[0]);
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
