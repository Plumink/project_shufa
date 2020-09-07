<template>
  <v-app>
    <div class="all_change">
      <div style="width:80%;height:10vh;margin-left:2vw">
        <el-page-header @back="goBack" content="修改信息" style="line-height:10vh;font-size:4vw">
        </el-page-header>
        <div class="demo-input-suffix" style="text-align: center">
          <div style="width:95vw;height:10vh;background-color:#fff;border-radius:2vw;">
            <span style="float:left;line-height:10vh;font-size:4vw;margin-left:4vw">头像</span>
            <img style="float:right;width:14vw;height:14vw;border-radius:2vw;line-height:10vh;margin-top:1vh;margin-right:5vw" :src="this.$store.state.customerImgHead" alt="">
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
              clearable><div style="width:95vw;height:10vh;background-color:#fff;border-radius:2vw;margin-top:3vh">
            <span style="float:left;line-height:10vh;font-size:4vw;margin-left:4vw">用户名：</span>
            <el-input
              style="float：left;width:70vw;line-height:10vh"
              v-model="username"
              placeholder="请输入内容"
              clearable>
            </el-input>
          </div>
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
      userId:this.$store.state.id,
      username:'',
      userImageHead:''
    }
  },
  methods: {
    goBack() {
      this.$router.push('/main')
    },
    submit() {
      var file = document.getElementById("upload_file").files[0];
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
        this.userImageHead = response.data.data;
        if(response.data.data != ''){
          let params = {
            "customerId": this.userId,
            "customerImgHead": this.userImageHead,
            "userName": this.username
          }
          this.$axios.post("/CalligraphyService/user/updateUserInfo",params,{
            header:{
              'X-APP-ID':'1',
              'X-APP-KEY':'1',
              'X-Request-ID':'1'
            }
          }).then(response =>{
            console.log("修改成功");
          })
        }
      })
    }
  },
  updated(){
    console.log(this.$store.state.id)
    console.log(data.userImageHead)
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