<template>
  <v-app>
    <div class="all_change">
      <div style="width:80%;height:10vh;margin-left:2vw">
        <el-page-header @back="goBack" content="修改信息" style="line-height:10vh;font-size:4vw">
        </el-page-header>
        <div class="demo-input-suffix" style="text-align: center">
          <div style="width:95vw;height:10vh;background-color:#fff;border-radius:2vw;">
            <span style="float:left;line-height:10vh;font-size:4vw;margin-left:4vw">头像</span>
            <img style="float:right;width:14vw;height:14vw;border-radius:2vw;line-height:10vh;margin-top:1vh;margin-right:5vw" src="https://s1.ax1x.com/2020/08/15/dkCcef.jpg" alt="">
          </div>
          <div style="margin">
            <input accept="image/*" name="img" id="upload_file" type="file">
          </div>
          <div style="width:95vw;height:10vh;background-color:#fff;border-radius:2vw;margin-top:3vh">
            <span style="float:left;line-height:10vh;font-size:4vw;margin-left:4vw">用户名：</span>
            <el-input
              style="float：left;width:70vw;line-height:10vh"
              v-model="username"
              placeholder="请输入内容"
              clearable>
            </el-input>
          </div>
          <div>
            <el-row>
              <el-button type="primary" @click="submit">提交修改</el-button>
            </el-row>
          </div>
          
        </div>
      </div>
      
    </div>
  </v-app>
</template>
<script>
import TopNavigation from '../../components/TopNavigation'
export default {
  data() {
    return {
      username:''
    }
  },
  methods: {
    goBack() {
      this.$router.push('/main')
    },
    submit() {
      var file = document.getElementById("upload_file").files[0];
      var formdata1=new FormData();
      formdata1.append('uploadFile',file,file.name);
      let config = {
        headers:{
          'Content-Type':'multipart/form-data',
          'X-APP-ID':'1',
          'X-APP-KEY':'1',
          'X-Request-ID':'1'
        }
      };
      this.$axios.post("http://www.mocking.space:9003/v2/api-docs/CalligraphyService/common/uploadFile",formdata1,config).then(response =>{
        console.log(reponse);
      })
    }
  }
}
</script>

<style scoped>
  .all_change{
    width: 100%;
    height: 100%;
    background-color: #f9f4e6;
  }
</style>