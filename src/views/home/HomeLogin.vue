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
          <v-form >
            <v-container style="width:80vw;padding:0;" ref="in">
              <v-row >
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                  v-model="a"
                    label="请输入文字"
                    outlined
                    background-color="#fff"
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
          :label='font'
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
            <v-checkbox style="margin:0;height:5vh;"  label="横排"></v-checkbox>
            <v-checkbox style="margin:0"  label="左起"></v-checkbox>
          </div>
        </v-col>
        </template>
      </div>
      <div>
        <template>
          <div style="text-align:center;" class="my-2 mt-8">
            <v-btn small color="primary" @click="toChildren()">生成书法</v-btn>
          </div>
        </template>
      </div>
    </div>
    <div class="upvip">
      <template>
            <div style="text-align:center" class="my-2">
              <v-btn large color="error">生成书法</v-btn>
            </div>
      </template>
    </div>
    <div style="height:60vh">
      <p style="text-align:center">(会员享有<span style="color:blue;font-size:5vw;">完整名帖字库</span>)</p>
      <br/>
      <p class="word_p">通篇集字，灵活排版</p>
      <p class="word_p">置顶公众号，使用更方便</p>
      <p style="text-align:center;margin-top:2em">
        <img src="https://s1.ax1x.com/2020/08/03/aaYwUU.jpg" alt="">
      </p>
    </div>
    <FootNavigation @fontChange='upFont' />
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
      font:'书法',
      a:'',
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
  },
  methods:{
    upFont(title){
      this.font=title
    },
    toChildren() {
      this.$router.push({
        path: '/generate',
        query: {
          word: this.a
        }
      })
    }
  }
}
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
