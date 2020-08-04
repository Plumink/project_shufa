<template>
  <div id="register">
    <div id="registerBox">
      <h3>注册</h3>
      <p class="register_title">快来加入我们吧(･ω･)</p>
      <div>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-col cols="12" md="4" class="register_input">
            <v-text-field
              v-model="username"
              :counter="10"
              :rules="userNameRules"
              label="用户名"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="register_input">
            <v-text-field type="password" v-model="password" :rules="passwordRules" label="密码" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="register_input">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="手机号"
              required
              lazy-validation="true"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="register_input">
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || '请同意!']"
              label="同意赛大家书法网服务条款"
              required
            ></v-checkbox>
          </v-col>
        </v-form>
        <v-btn depressed large color="blue lighten-1" class="register_btn" @click="getData()">注册</v-btn>
        <span class="jump_right">
          <router-link to="/login">返回登陆</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data: () => ({
    valid: true,
    username: "",
    userNameRules: [
      (v) => !!v || "用户名不为空",
      (v) => (v && v.length <= 10) || "用户名过长",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "密码不为空",
      (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(v) ||
        "8-16个字符，至少1个大写字母，1个小写字母和1个数字，",
    ],
    phone: "",
    phoneRules: [
      (v) => !!v || "手机号不为空",
      (v) => /^1(3|4|5|6|7|8|9)\d{9}$/.test(v) || "手机号必须是有效的",
    ],
    checkbox: "",
    lazy: false,
  }),
  methods: {
    getData() {
      if (this.valid == false) {
        this.$refs.form.validate();
      } else {
        fetch("http://175.24.100.139:8088/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: this.$md5(this.password),
            phone: this.phone,  
            username:this.username
          }),
        })
          .then((res) => res.json())
          .then((res) => {
              this.$router.push({ path: `/login` });
          });
      }
      // console.log(this.username, this.phone, this.password, this.checkbox);
    },
  },
};
</script>

<style lang='less' scoped>
#register {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  color: #fff;
  font-family: "Source Sans Pro";
  // background-image: url("../../../images/shuzhou2.jpg");
  background-size: 100% 100%;
  position: relative;
}
#registerBox {
  width: 80%;
  height: 75%;
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
.register_title {
  font-size: 1vw;
  margin: 0%;
}
.register_fields {
  position: relative;
  width: 100%;
  height: 20%;
  margin-bottom: 3%;
}
.register_btn {
  width: 100%;
  margin-top: 30px;
}
.register_input {
  height: 12vh;
}
.jump_right {
  float: right;
}
</style>
