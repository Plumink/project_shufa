<template>
  <v-app>
    <div id="login">
      <div id="loginBox">
        <h3>登陆</h3>
        <p class="login_title">以汉字为载体,承载着传统文化和民族精神(･ω･)</p>
        <div>
          <v-form ref="form" v-model="valid" >
            <v-col cols="12" md="4" class="login_input">
              <v-text-field
                v-model="phone"
                :rules=" [ v => !!v || '手机号不为空']"
                label="手机号"
                required
                lazy-validation="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="login_input">
              <v-text-field
                type="password"
                v-model="password"
                :rules=" [v => !!v || '密码不为空']"
                label="密码"
                required
              ></v-text-field>
            </v-col>
          </v-form>
          <v-btn depressed large color="blue lighten-1" class="login_btn" @click="getData()">登陆</v-btn>
          <span class="jump_left" @click="jumpHome()">返回首页</span>
          <span class="jump_right" @click="jumpRegister()">马上注册</span>
          <div class="text-center"></div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data: () => ({
    valid: true,
    password: "",
    phone: "",
    checkbox: "",
  }),
  methods: {
    jumpHome() {
      this.$router.push("/");
    },
    jumpRegister() {
      this.$router.push("/register");
    },
    getData() {
      if (this.$refs.form.validate() == false) {
        this.$refs.form.validate();
      } else {
        fetch("http://127.0.0.1:9003/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-APP-ID ": "1",
            "X-APP-KEY": "1",
            "X-Request-ID": new Date().getTime(),
          },
          body: JSON.stringify({
            passWord: this.password,
            userName: '测试',
            phoneNumber:this.phone
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.success == false) {
            } else {
              this.$router.push({ path: `/homelogin` });
            }
          });
      }
    },
  },
};
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
  background-image: url("../../../images/login.jpg");
  background-size: 100% 100%;
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
.login_title {
  font-size: 1vw;
  margin: 0%;
}
.login_fields {
  position: relative;
  width: 100%;
  height: 20%;
  margin-bottom: 3%;
}
.login_btn {
  width: 100%;
  margin-top: 30px;
  color: "#000";
  margin-bottom: 30px;
}
.login_input {
  height: 12vh;
}
.jump_left {
  float: left;
}
.jump_right {
  float: right;
}
</style>
