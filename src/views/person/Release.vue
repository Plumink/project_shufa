<template>
  <v-app id="show">
    <div class="box">
      <!-- 头部 -->
      <div class="top d-flex justify-space-between align-center mb-6">
        <span style="font-size:14px" @click="goBack()">
          <span class="Calligraphy_icon_fanhui" />返回
        </span>
        <span>
          <h3>发布作品</h3>
        </span>
        <span class="d-flex flex-column">
          <i style="font-size: 20px;" class="Calligraphy_icon_release"></i>
          <p style="font-size:8px;margin:0px">分享</p>
        </span>
      </div>
      <!-- 内容 -->
      <div class="content d-flex flex-column justify-center " >
        <!-- 标题 -->
        <div class="sec_input">
        <span>标题</span>
        <el-input v-model="title" placeholder="请输入内容" style="width:60%;margin-left:2vw"></el-input>
      </div>
      <!-- 电子邮箱 -->
        <v-text-field
        class='sec_input'
        style="margin:0 auto;width:70%"
              v-model="email"
              :rules="emailRules"
              label="电子邮箱"
              required
            ></v-text-field>
        <!-- 文件上传 -->
        
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      title:'',
      email: '',
    emailRules: [
      v => !!v || '邮箱不为空',
      v => /.+@.+/.test(v) || '电子邮箱必须有效',
    ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 10%;
  padding: 8px;
}
.sec_input {
  width: 100vw;
  margin: 0 auto;
  text-align: center;
}
</style>