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
          <p style="font-size:8px;margin:0px" @click="release()">发布</p>
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
          <span class="Calligraphy_icon_email" style="font-size:25px"></span>
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
        <div class="filebox d-flex flex-column align-center justify-center">
          <span class="Calligraphy_icon_push" style="font-size:30px" />
           <div class="file">
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>1">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F" @click="num--"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>2">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F" @click="num--"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>3">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F" @click="num--"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>4">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F" @click="num--"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>5">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F" @click="num--"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>6" @click="num--">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div class="file" v-if="num>7" @click="num--">
            <span class="Calligraphy_icon_delete" style="font-size:15px;color:#D32F2F"></span>
            <v-file-input v-model="image" multiple label="上传图片"></v-file-input>
            <v-textarea style="margin:0px;paddinf:0px" v-model="bio" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div style="margin-top:10px">
            <v-btn color="primary" dark @click="num=num+1" :disabled='num==8?true:false'>继续发布</v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      title: "",
      email: "",
      emailRules: [
        (v) => !!v || "邮箱不为空",
        (v) => /.+@.+/.test(v) || "电子邮箱必须有效",
      ],
      image: [],
      bio: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    release() {
      let params = {
        "release": {
          "custId": this.$store.state.id || this.$store.state.custId,
          "isShow": 0,
          "releaseContent": this.bio,
          "releaseId": new Date().getTime().toString(),
          "releaseTime": new Date().getTime().toString(),
          "releaseTitle": this.title
        },
        "releaseFonts": [
          {
            "releaseFontContent": "河北测试",
            // "releaseFontId": 2,
            "releaseFontUrl": "https://s1.ax1x.com/2020/07/31/alrgsK.th.png",
            "releaseId": 0
          }
        ]
      }
      this.$axios.post("/CalligraphyService/release/uploadRelease",
        params,
        {
          headers: {
            "X-Request-ID": "1"
          }
        }
      ).then(
        (res) => {
          console.log(res);
        }
      )
    }
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
  padding: 8px;
}
.sec_input {
  width: 100vw;
  margin: 0 auto;
  text-align: center;
}
.emailbox {
  width: 80%;
  background-color: #1296db;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
.filebox {
  width: 100%;
  text-align: center;
}
.file{
  width: 80%;
  background-color: #1296db;
  text-align: center;
  border-radius: 8px;
  margin-top: 15px;
}
</style>