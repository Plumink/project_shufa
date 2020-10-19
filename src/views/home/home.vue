<template>
  <v-app id="inspire">
    <div class="total">
      <TopNavigation />
      <div class="head"></div>
      <div class="middle">
        <div class="middle_head">
          <template>
            <v-form>
              <v-container style="width:80vw;padding:0;">
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="请输入文字" outlined background-color="#fff"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
        </div>
        <div class="mt-4 middle_m d-flex flex-row justify-sm-space-around mb-6">
          <v-select
            style="width:10vw;height:8vh"
            background-color="#fff"
            class="ml-2 mr-2"
            label="书法"
            :items="ziti[0]"
            item-text="calligraphyName"
            outlined
            dense
          ></v-select>
          <v-select
            style="width:10vw;height:8vh"
            background-color="#fff"
            class="ml-2 mr-2"
            label="作者"
            outlined
            dense
            :items="author[0]"
            item-text="authorName"
          ></v-select>
          <v-select
            style="width:10vw;height:8vh"
            background-color="#fff"
            class="ml-2 mr-2"
            label="次选"
            outlined
            dense
            :items="author[0]"
            item-text="authorName"
          ></v-select>
        </div>
        <div class="middle_l d-flex flex-row">
          <template>
            <v-col
              class="d-flex flex-row"
              style="width:20vw;padding-right:0;"
              cols="12"
              sm="6"
              md="4"
            >
              <div>
                <v-text-field
                  label="竖排行数"
                  outlined
                  dense
                  type="number"
                  background-color="#fff"
                  style="width:40vw"
                ></v-text-field>
              </div>
              <div style="margin-left:8vw" class="d-flex flex-column justify-sm-space-around">
                <v-checkbox style="margin:0;height:5vh;" label="横排"></v-checkbox>
                <v-checkbox style="margin:0" label="左起"></v-checkbox>
              </div>
            </v-col>
          </template>
        </div>
        <div>
          <template>
            <div style="text-align:center;" class="my-2 mt-8">
              <v-btn small color="primary" @click="tips()">生成书法</v-btn>
            </div>
          </template>
        </div>
      </div>
      <div class="last d-flex flex-row justify-space-around">
        <template>
          <v-btn class="mt-8" small color="primary">
            <router-link to="/login">
              <p style="color:#fff;margin:0 auto;">登录</p>
            </router-link>
          </v-btn>
          <v-btn class="mt-8" small color="primary">
            <router-link to="/register">
              <p style="color:#fff;margin:0 auto;">注册</p>
            </router-link>
          </v-btn>
        </template>
      </div>
      <div class="word">
        <template>
          <v-card class="mx-auto" max-width="344" outlined color="#F9F4E6">
            <v-card-text style="margin:0;padding:0;">
              <p style="text-align:center;margin:0;font-size:14">
                <a style="text-decoration:none" href="http://localhost:8080/#/login">免费注册，</a>可一次查更多字
              </p>
              <p style="text-align:center;margin:0;font-size:12px">可选更多的字体和背景颜色</p>
              <br />
              <p style="text-align:center;margin:0;font-size:12px;font-weight:bold">使用本字典的集字效果</p>
            </v-card-text>
          </v-card>
        </template>
      </div>
      <div style="width:90vw;text-align:center;margin: 0 auto;">
        <template>
          <v-carousel cycle height="400" width="100vw" hide-delimiters :show-arrows="false">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </template>
      </div>
      <div style="height:15vh"></div>
      <FootNavigation />
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import {Decrypt,Encrypt} from '../../api/utils.js'
export default {
  components: {
    FootNavigation,
    TopNavigation,
  },
  methods: {
    tips() {
      this.$message.error("尚未登陆");
    },
  },
  data() {
    return {
      author: [],
      ziti: [],
      items: [
        {
          src: "https://s1.ax1x.com/2020/08/01/a8fdNq.jpg",
        },
        {
          src: "https://s1.ax1x.com/2020/08/01/a8WznJ.jpg",
        },
        {
          src: "https://s1.ax1x.com/2020/08/01/a8fCA1.jpg",
        },
        {
          src: "https://s1.ax1x.com/2020/08/01/a8fVje.jpg",
        },
      ],
    };
  },
  mounted() {
    var that = this;
    this.$axios
      .get("/CalligraphyService/common/getInitParameter?packageName=mobileHomePage", {
        headers: {
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
      })
      .then(function (res) {
        var a = JSON.parse(Decrypt(res.data.data, res.data.iv));
        that.ziti.push(a.CalligraphyTypes);
        that.author.push(a.Authors);
      });
  },
};
</script>

<style scoped>
@import "./style.css";
</style>
