<template>
  <div>
    <div style="width:100vw;height:60px;background-color:#f9f4e6;padding:10px" class="d-flex flex-row justify-space-between align-center ">
        <i class="iconfont icon-back icon-style" @click="backHome()">返回</i>
        <v-switch
          label="徽章"
          v-model="isbadges"
        ></v-switch>
      </div>
    <div style="background-color:#f9f4e6;width:100vw;height:auto" ref="box">
      <div v-if="!this.$route.query.message.horizontal"
        :class="this.$route.query.message.left?'d-flex flex-row justify-space-around':'d-flex flex-row-reverse justify-space-around'"
        style="margin:0 auto;width:80%;height:80%"
      >
        <div
          class="d-flex flex-column mb-6"
          v-for="(items,index) in show"
          :key="index"
          :style="{ width: width+ '%', height:height+'%' }"
        >
          <div v-for="(item,index) in items" :key="index">
            <v-badge
              color="green"
              :content="item.length-1"
              offset-y="18"
              offset-x="24"
              :value="badges==''?(item.length-1):0"
            >
              <img
                @click="showStore(item)"
                :src="item[0].url"
                alt
                style=" width:100%;height:auto;background-color:#f9f4e6"
              />
            </v-badge>
          </div>
        </div>
      </div>


    <div
        v-if="this.$route.query.message.horizontal"
        class="d-flex flex-column justify-space-around"
        style="margin:0 auto;width:80%;"
      >
        <div
          :class="left?'d-flex flex-row mb-6':'d-flex flex-row-reverse mb-6'"
          v-for="(items,index) in show"
          :key="index"
          style="margin:0 auto;width:80%;height:80%"
        >
          <div v-for="(item,index) in items" :key="index" :style="{ width: width+ '%', height:height+'%' }">
            <v-badge
              color="green"
              :content="item.length-1"
              offset-y="18"
              offset-x="24"
              :value="badges==''?(item.length-1):0"
            >
              <img
                @click="showStore(item)"
                :src="item[0].url"
                alt
                style=" width:100%;height:auto;background-color:#f9f4e6"
              />
            </v-badge>
          </div>
        </div>
      </div>

    </div>
    <div style="width:100%;height:10vh;text-align: center;background-color:#f9f4e6">
      <el-button type="primary" @click="save">保存作品</el-button>
    </div>
    <div class="popContainer d-flex justify-center align-center" v-if="pop">
      <div class="popbox d-flex align-center justify-center flex-column">
        <div class="d-flex align-content-space-around justify-center flex-wrap">
          <div v-for="(item,index) in otherfont" :key="index">
            <v-badge color="green" content="vip" offset-y="15" offset-x="15" :value="item.isVip">
              <img @click="replace(index)" style="width:50px;height:50px" :src="item.url" alt />
            </v-badge>
          </div>
        </div>
        <el-button type="primary" @click="pop=!pop">取消</el-button>
      </div>
    </div>

    <div class="popContainer d-flex flex-column justify-center align-center" v-if="isimage">
      
      <div class="popbox d-flex align-center justify-center flex-column">
        <span style="margin-top:100px">长按图片保存到相册</span>
        <div class="d-flex flex-column align-center justify-center">
          <img :src="img" v-if="img" class="share" style="width:90%;height:100%;margin: 0 auto" />
        </div>
        <el-button type="primary" @click="isimage=!isimage">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import domtoimage from '../Function/dom-to-image'
export default {
  data() {
    return {
      data: [],
      show: [],
      store: [],
      width: "0",
      height: "0",
      input: "",
      pop: false,
      otherfont: [],
      otherfontpop: "",
      img: "",
      badges: "",
      replacetext: "",
      isimage: false,
      left:this.$route.query.message.left,
      isbadges:true
    };
  },
  methods: {
    backHome() {
      console.log(this.$route.query.message)
       this.$router.push({
        path:'/homelogin',
        query:{
          message:this.$route.query.message
        }
      });
    },
    showStore(item) {
      this.otherfont = item;
      this.replacetext = item[0].text;
      this.otherfontpop = Math.round(100 / (item.length / 5));
      this.pop = !this.pop;
    },
    // save() {
    //   //防止HTML2canvas截图不完整
    //    window.pageYOffset = 0
    //   document.documentElement.scrollTop = 0
    //   document.body.scrollTop = 0
    //   this.html2canvas(this.$refs.box, {
    //     allowTaint: true,
    //     backgroundColor: null,
    //     tainttest: true,
    //     useCORS: true, // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题,
    //     // width: this.$refs.box.scrollWidth,
    //     height: this.$refs.box.scrollHeight,
    //     timeout:8000
    //   }).then((canvas) => {
    //     let url = canvas.toDataURL("image/png");
    //     this.isimage = true;
    //     this.img=url
    //   });
    // },
    save() {
      //截图功能
      this.isimage = true;
      this.badges = "0";
      console.log(domtoimage)
      this.one();
    },
    one() {
      var height = this.$refs.box.scrollHeight;
      var width = document.body.scrollWidth;
      console.log(height);
      console.log(width);
      domtoimage
        .toPng(this.$refs.box, { width: width, height: height })
        .then((dataUrl) => {
          this.two();
          // 在截完图后，徽章正常显示
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    two() {
      console.log("123");
      var height = this.$refs.box.scrollHeight;
      var width = document.body.scrollWidth;
      console.log(height);
      console.log(width);
      domtoimage
        .toPng(this.$refs.box, { width: width, height: height })
        .then((dataUrl) => {
          this.img = dataUrl;
          // 在截完图后，徽章正常显示
          this.badges = "";
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    // 替换字体
    replace(item) {
      // 替换字体
      // 将选中的字体和数组中现在展示的字体替换位置即可
      for (var i = 0; i < this.show.length; i++) {
        for (var n = 0; n < this.show[i].length; n++) {
          if (this.replacetext == this.show[i][n][0].text) {
            if (this.$store.state.isVip == 1) {
              //如果用户是vip，则可以随意更换字体
              var fontone = this.show[i][n][item];
              var fonttwo = this.show[i][n][0];
              this.show[i][n][0] = fontone;
              this.show[i][n][item] = fonttwo;
            } else {
              //否则，用户不是VIP
              if (this.show[i][n][item].isVip == 0) {
                //如果字体不是VIP字体，且用户不是VIP，则可以更换字体
                var fontone = this.show[i][n][item];
                var fonttwo = this.show[i][n][0];
                this.show[i][n][0] = fontone;
                this.show[i][n][item] = fonttwo;
              } else {
                //否则，字体是VIP，用户不是，则提示用户充值
                alert("您还不是Vip用户，请前往个人中心充值");
              }
            }
          }
        }
      }
      // 退出替换字体界面
      this.pop = !this.pop;
    },
  },

  watch:{
    isbadges:function(newdata){
     if(newdata==false){
       this.badges = "0";
     }
     else{
       this.badges = ""
     }
    }
  },
  created() {
    var str = this.$route.query.message.text;
    var arr = str.match(/[\u4e00-\u9fa5]/g);
    let params = this.$route.query.message;
    this.$axios
      .post("/CalligraphyService/dictionaries/query", params, {
        headers: {
          "X-APP-ID": "1",
          "X-APP-KEY": "1",
          "X-Request-ID": "1",
        },
      })
      .then((response) => {
        if (this.$route.query.message.horizontal == true) { //横排
          var item = response.data.data; //把数据库中的数据返回，所有数据，得进行分类
          for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < item.length; j++) {
              if (arr[i] === item[j].text) {  //如果输入的第i个字与数据库中返回的字相同
                this.data.push(item[j]);  //将接口返回的对象插入data数组
              }
            }
            this.store.push(this.data); //将接口返回的第i个字的所有对象传入store数组中
            this.data = []; //清空data数组
          }
          var s = Math.ceil(  //横排的总行数
              this.store.length / this.$route.query.message.row_num 
          );
          
          for (var i = 0; i < s; i++) {   //每一行
            var v=this.$route.query.message.row_num //横排的行数
            var a = [];
            for (var n = i * v; n < (i + 1) * v; n++) {  //每一排的字 i=0 v=2 i<2
              if (this.store[n] == undefined) { //如果store中没有，则拿背景图补上
                a.push([
                  {
                    url:
                      "https://www.mocking.space/zimg/ae5759b1e7d6bef4aed4a87806e739a4",
                  },
                ]);
              } else {
                a.push(this.store[n]);
              }
            }
            this.show.push(a);
          }
          console.log(this.show);
          this.width = Math.round(100 / this.show[0].length);
          this.height = Math.round(100 / this.show.length);
          console.log(this.width)
          console.log(this.height)
        } else {
          var item = response.data.data;
          for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < item.length; j++) {
              if (arr[i] === item[j].text) {
                this.data.push(item[j]);
              }
            }
            this.store.push(this.data);
            this.data = [];
          }
          console.log(this.store);
          for (var i = 0; i < this.$route.query.message.row_num; i++) {
            var j = Math.ceil(
              this.store.length / this.$route.query.message.row_num
            );
            console.log(j);
            var a = [];
            for (var n = i * j; n < (i + 1) * j; n++) {
              if (this.store[n] == undefined) {
                a.push([
                  {
                    url:
                      "https://www.mocking.space/zimg/ae5759b1e7d6bef4aed4a87806e739a4",
                  },
                ]);
              } else {
                a.push(this.store[n]);
              }
            }
            this.show.push(a);
          }
          console.log(this.show);
          this.width = Math.round(100 / this.show.length);
          this.height = Math.round(100 / this.show[0].length);
        }
      });
  },
};
</script>

<style scoped>
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.popbox {
  width: 100%;
  height: 100%;
  background-color: #f9f4e6;
  overflow: scroll;
  padding-top: 10px;
}
.icon-style {
  font-size: 16px;
  color: grey;
}

</style>