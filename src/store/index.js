import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: JSON.parse(localStorage.getItem("loginMessage")).isLogin || {},
    phone:JSON.parse(localStorage.getItem("loginMessage")).phone || {},
  },
  mutations: {
    login(state,message){
      localStorage.setItem('loginMessage', JSON.stringify(message));
      state.islogin=message.isLogin
      state.phone=message.phone
    }
  },
  actions: {
  },
  modules: {
  }
})
