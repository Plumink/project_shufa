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
          <p style="font-size:8px;margin:0px">发布</p>
        </span>
      </div>
      <!-- 内容 -->
      <div class="content d-flex flex-column justify-center align-center">
        <!-- 标题 -->
        <div class="sec_input">
          <span>标题</span>
          <el-input v-model="title" placeholder="请输入内容" style="width:60%;margin-left:2vw"></el-input>
        </div>
        <!-- 电子邮箱 -->
        <div class="emailbox d-flex flex-column align-center">
          <!-- <i style="font-size: 20px;" class="Calligraphy_icon_email"></i> -->
          <i class="iconfont icon-youxiang "></i>
          <v-text-field
            class="sec_input"
            style="margin:0 auto;width:100%"
            v-model="email"
            :rules="emailRules"
            label="电子邮箱"
            required
          ></v-text-field>
          <p style="font-size:6px;margin:0px">(电子邮件不对外显示，用于信息审核通过后，及时收到通知。建议使用QQ邮箱，微信会及时通知)</p>
        </div>
        <!-- 文件上传 -->
        <div class="filebox">
          <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
           <v-textarea
           style="margin:0px;paddinf:0px"
              v-model="bio"
              color="teal"
            >
              <template v-slot:label>
                <div> 
                  配文 <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      email: "",
      emailRules: [
        (v) => !!v || "邮箱不为空",
        (v) => /.+@.+/.test(v) || "电子邮箱必须有效",
      ],
      image: "",
      boi:''
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
.emailbox{
  width: 80%;
}
.filebox {
  width: 80%;
  height: 100px;
}
</style>