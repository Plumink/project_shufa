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
        <span class="d-flex flex-column" @click="release()">
          <i style="font-size: 20px;" class="Calligraphy_icon_release"></i>
          <p style="font-size:8px;margin:0px" >发布</p>
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input1" @change="upload('input1')">
            <!-- <v-file-input class="img" v-model="image[0]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[0]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input2" @change="upload('input2')">
            <!-- <v-file-input class="img" v-model="image[1]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[1]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input3" @change="upload('input3')">
            <!-- <v-file-input class="img" v-model="image[2]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[2]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input4" @change="upload('input4')">
            <!-- <v-file-input class="img" v-model="image[3]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[3]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input5" @change="upload('input5')">
            <!-- <v-file-input class="img" v-model="image[4]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[4]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input6" @change="upload('input6')">
            <!-- <v-file-input class="img" v-model="image[5]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[5]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input7" @change="upload('input7')">
            <!-- <v-file-input class="img" v-model="image[6]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[6]" color="teal">
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
            <input accept="image/*" name="img" class="upload_file" type="file" id="input8" @change="upload('input8')">
            <!-- <v-file-input class="img" v-model="image[7]" multiple label="上传图片"></v-file-input> -->
            <v-textarea class="text" style="margin:0px;paddinf:0px" v-model="bio[7]" color="teal">
              <template v-slot:label>
                <div>
                  配文
                  <small>(不得超过1200字)</small>
                </div>
              </template>
            </v-textarea>
          </div>
          <div style="margin-top:10px">
            <v-btn color="primary" dark @click="num=num+1" :disabled='num==8?true:false'>添加图片</v-btn>
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
      releaseId: this.$store.state.custId || this.$store.state.id + new Date().getTime(),
      data:[]
    };
  },
  methods: {
    goBack(){
      this.$router.push({
        path:'/homelogin'
      })
    },
    upload(str) {
      var file = document.getElementById(str).files[0];
      var formdata1=new FormData();
      formdata1.append('uploadFile',file);
      this.$axios.post("https://www.mocking.space/CalligraphyService/common/uploadFile",formdata1,{
        headers:{
          'Content-Type':'multipart/form-data',
          'X-APP-ID':'1',
          'X-APP-KEY':'1',
          'X-Request-ID':'1'
        }
      }).then(response =>{
        console.log(response.data.data);
        this.image.push(response.data.data);
      })
    },
    release() {
      for(var i=0;i<this.image.length;i++){
        this.data.push({
          "releaseFontContent": this.bio[i],
          "releaseFontUrl": this.image[i],
          "releaseId": 0
        })
      }
      console.log(this.image[0])
      console.log(this.bio)
      var params = {
        "release": {
          "custId": this.$store.state.custId || this.$store.state.id,
          "isShow": 0,
          "releaseId": 0,
          "releaseContent": this.bio[0],
          "releaseTime": new Date().getTime(),
          "releaseTitle": this.title
        },
        "releaseFonts":this.data
      }
      this.$axios.post("/CalligraphyService/release/uploadRelease",params,{
        'X-Request-ID':'1'
      })
      .then((response)=>{
          if(response.data.code=='0'){
            console.log(this)
            this.$router.push({ path: '/show' });
          }
          else{
            alert('发布失败，请重新发布')
          }
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