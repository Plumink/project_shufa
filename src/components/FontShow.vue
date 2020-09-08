<template>
  <div style="background-color:#f9f4e6;width:100vw;height:auto" ref="box">
    <img :src="img" v-if="img" class="share"/>
    <div
      class="d-flex flex-row-reverse justify-space-around"
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
            offset-y="15"
            offset-x="15"
            :value="item.length-1"
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
    
    <div style="width:100%;height:10vh;text-align: center;">
      <el-button type="primary" @click="a()">保存作品</el-button>
    </div>
    
    <div class="popContainer d-flex justify-center align-center" v-if="pop">
      <div class="popbox d-flex align-center justify-center flex-column">
        <div class="d-flex align-content-space-around justify-center flex-wrap">
          <div v-for="(item,index) in otherfont" :key="index">
            <v-badge color="green" content="vip" offset-y="15" offset-x="15" :value="item.isVip">
              <img style="width:50px;height:50px" :src="item.url" alt />
            </v-badge>
          </div>
        </div>
        <el-button type="primary" @click="pop=!pop">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
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
      img:''
    };
  },
  methods: {
    backHome() {
      this.$router.push("/homelogin");
    },
    showStore(item) {
      this.otherfont = item;
      console.log(item[0].isVip);
      this.otherfontpop = Math.round(100 / (item.length / 5));
      this.pop = !this.pop;
    },
    // a() {
    //   //防止HTML2canvas截图不完整
    //    window.pageYOffset = 0
    //   document.documentElement.scrollTop = 0
    //   document.body.scrollTop = 0
    //   this.html2canvas(this.$refs.box, {
    //     allowTaint: true,
    //     backgroundColor: null,
    //     tainttest: true,
    //     useCORS: true, // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题,
    //     windowWidth: this.$refs.box.scrollWidth,
    //     windowHeight: this.$refs.box.scrollHeight
    //   }).then((canvas) => {
    //     let url = canvas.toDataURL("image/png");
    //     this.img=url
    //   });
    // },
    a(){
       var height = this.$refs.box.scrollHeight;
       var width = document.body.scrollWidth;
       console.log(height)
       console.log(width)
      this.domtoimage.toPng(this.$refs.box,{width: width,height: height})
        .then((dataUrl) => {
          this.img=dataUrl
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
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
  position: absolute;
  background-color: #f9f4e6;
  overflow: scroll;
  padding-top: 60px;
}
</style>