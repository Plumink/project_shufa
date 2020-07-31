<template>
  <div id="login">
    <div id="loginBox">
      <h3>登录</h3>
      <p class="login_title">以汉字为载体,承载着传统文化和民族精神(･ω･)</p>
      <div>
      <v-form v-model="valid">
      <v-container class="login_input_box">
        <v-row>
          <v-col
            cols="12"
            md="4"
            class="login_input"
          >
            <v-text-field
                v-model='username'
              :counter="10"
              label="用户名"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
            class="login_input"
          >
            <v-text-field
              v-model='password'
              :counter="10"
              label="密码"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
            class="login_input"
          >
            <v-text-field
            v-model='phone'
              label="手机号"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    </div>
      <v-btn depressed large color="primary" class="login_btn" @click="getData()">登陆</v-btn>
      
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            phone:'',
            justify: [
      'space-around',
    ],
        }
    },
    methods:{
        getData(){
            console.log(this.username,this.phone,this.password)
        }
    }
    
}
</script>

<style lang='less' scoped>
#login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  color: #fff;
  font-family: "Source Sans Pro";
  background-image: url("../../../images/shuzhou2.jpg");
  background-size:100% 100%;
  position: relative;
}
  #loginBox {

    width: 80%;
    height: 60%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 20px 30px 20px 30px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }
 .login_title{
     font-size: 1vw;
     margin: 0%;
 }
 .login_fields{
     position: relative;
     width: 100%;
     height: 20%;
     margin-bottom: 3%;
 }
 .login_btn{
     width: 100%;
 }
 /deep/.login_input_box{
     padding: 0%;
 }
 .login_input{
     height: 12vh;
 }
 

</style>