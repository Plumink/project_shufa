<template>
  <v-app>
    <div class="total_gen">
      
      <div style="width:100vw;height:10vh;position: fixed;z-index: 1000;background-color:#f9f4e6">
        <i class="iconfont icon-back icon-style" @click="backHome()"></i>
      </div>
      <div style="height:10vh;width:100vw"></div>
      <!-- 生成也不发布，取消标题，放入发布页——release 张鑫涛 -->
      <!-- <div class="sec_input">
        <span>标题</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:60%;margin-left:2vw"></el-input>
      </div> -->
      <FontShow />
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import FontShow from '../../components/FontShow'
export default {
  components: {
    FootNavigation,
    TopNavigation,
    FontShow
  },
  data() {
    return {
      data: [],
      show: [],
      width: "0",
      height: "0",
      input: "",
      ddd: "",
    };
  },
  methods: {
    backHome() {
      this.$router.push("/homelogin");
    },
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
