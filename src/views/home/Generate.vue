<template>
  <v-app>
    <div class="total_gen">
      <TopNavigation />
      <div class="d-flex flex-row-reverse justify-space-around mb-6" style="margin-top:100px;width:100%;height:80%">
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
      data: [],
      show: [],
      width:'0',
      height:'0'
    };
  },
  methods: {},
  created() {
    var str = this.$route.query.message.text;
    var arr = str.match(/[\u4e00-\u9fa5]/g);
    let params = this.$route.query.message;
    this.$axios
      .post("https://www.mocking.space/CalligraphyService/dictionaries/query", params, {
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
</style>
