<template>
  <v-app>
    <div class="total_gen">
      <div style="width:100vw;height:10vh;position: fixed;z-index: 1000;background-color:#f9f4e6">
        <i class="iconfont icon-back icon-style" @click="backHome()"></i>
      </div>
      <div style="height:10vh;width:100vw"></div>
      <div class="sec_input">
        <span>标题</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:60%;margin-left:2vw"></el-input>
      </div>
      <div style="background-color:#f9f4e6;width:100vw;height:auto">
        <div class="d-flex flex-row-reverse justify-space-around" style="margin:0 auto;width:80%;height:80%"  ref='box' >
          <div class="d-flex flex-column mb-6" v-for="(items,index) in show" :key="index" :style="{ width: width+ '%', height:height+'%' }">
            <img
              :src="item.url"
              alt
              style=" width:100%;height:auto;background-color:#f9f4e6"
              v-for="(item,index) in items"
              :key="index"
            />
          </div>
        </div>
      </div>
      <div style="width:100%;height:10vh;text-align: center;">
        <el-button type="primary" @click="a()" >分享作品</el-button>
      </div>
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
  data() {
    return {
      data: [],
      show: [],
      width:'0',
      height:'0',
      input:'',
      ddd:''
    };
  },
  methods: {
    backHome() {
      this.$router.push('/homelogin')
    },
    a(){
      
var scrollY = $(document).scrollTop();
var scrollX = $(document).scrollLeft();

      this.html2canvas(this.$refs.box, {
      backgroundColor: null,
      useCORS: true, // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题,
      scrollY: -300, 
    scrollX: 0,
    }).then(canvas => {
    
      let url = canvas.toDataURL("image/png");
      // this.htmlUrl = url;
      // 把生成的base64位图片上传到服务器,生成在线图片地址
      console.log(url)
    });
    }
  },
  created() {
    var str = this.$route.query.message.text;
    var arr = str.match(/[\u4e00-\u9fa5]/g);
    let params = this.$route.query.message;
    this.$axios
      .post("/dictionaries/query", params, {
        headers: {
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
      })
      .then((response) => {
        var item = response.data.data;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < item.length; j++) {
            if (arr[i] === item[j].text) {
              this.data.push(item[j]);
              break;
            }
          }
        }
        for (var i = 0; i < this.$route.query.message.row_num; i++) {
          var j = Math.ceil(
            this.data.length / this.$route.query.message.row_num
          );
          console.log(j);
          var a = [];
          for (var n = i * j; n < (i + 1) * j; n++) {
            if (this.data[n] == undefined) {
              a.push({url:'https://www.mocking.space/zimg/ae5759b1e7d6bef4aed4a87806e739a4'})
            } else {
              a.push(this.data[n]);
            }
          }
          this.show.push(a);
        }
        console.log(this.show);
        this.width=Math.round(100/this.show.length)
        this.height=Math.round(100/this.show[0].length)

      });
    
  },
};
</script>

<style scoped>
/* @import "./style.css"; */
.total_gen {
  width: 100vw;
  height: 100vh;
  background-color: #f9f4e6;
}

.icon-style {
  font-size: 7vw;
  color: grey;
  line-height: 10vh;
  margin-left: 4vw;
}

.sec_input {
  width: 100vw;
  height: 10vh;
  margin: 0 auto;
  text-align: center;
}
</style>
