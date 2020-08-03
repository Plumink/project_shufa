<template>
<v-app id="inspire">
  <div class="total">
    <TopNavigation />
    <div class="head">
      <!-- <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt="">
      <span class="font"><i style="font-size:10vw" class="iconfont  icon-menu-line"></i></span> -->
    </div>
    <div class="middle">
      <div class="middle_head">
        <template>
          <v-form >
            <v-container style="width:80vw;padding:0;">
              <v-row >
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    label="请输入文字"
                    outlined
                    background-color="#fff"
                    light="true"
                  ></v-text-field>
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
          outlined
          dense
        >

        </v-select>
        <v-select 
          style="width:10vw;height:8vh"
          background-color="#fff"
          class="ml-2 mr-2"
          label="作者"
          outlined
          dense
        >

        </v-select>
        <v-select
          style="width:10vw;height:8vh"
          background-color="#fff"
          class="ml-2 mr-2"
          label="次选"
          outlined
          dense
        >
        </v-select>
      </div>
      <div class="middle_l d-flex flex-row">
        <template>
        <v-col class="d-flex flex-row" style="width:20vw;padding-right:0;" cols="12" sm="6" md="4">
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
            <v-checkbox style="margin:0;height:5vh;" v-model="disabled" label="横排"></v-checkbox>
            <v-checkbox style="margin:0" v-model="disabled" label="左起"></v-checkbox>
          </div>
        </v-col>
        </template>
      </div>
      <div>
        <template>
          <div style="text-align:center;" class="my-2 mt-8">
            <v-btn small color="primary">生成书法</v-btn>
          </div>
        </template>
      </div>
    </div>
    <div class="upvip">
      <template>
            <div style="text-align:center" class="my-2">
              <v-btn large color="error">升级会员</v-btn>
            </div>
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
export default {
  components: {
    FootNavigation,
    TopNavigation
  },
  data () {
    return {
     items: [
        {
          src: 'https://s1.ax1x.com/2020/08/01/a8fdNq.jpg',
        },
        {
          src: 'https://s1.ax1x.com/2020/08/01/a8WznJ.jpg',
        },
        {
          src: 'https://s1.ax1x.com/2020/08/01/a8fCA1.jpg',
        },
        {
          src: 'https://s1.ax1x.com/2020/08/01/a8fVje.jpg',
        }
      ]
    }
  }
}
</script>

<style scoped>
 @import "./style.css";
</style>
