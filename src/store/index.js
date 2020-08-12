import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    land:JSON.parse(localStorage.getItem("loginState"))==null?false:JSON.parse(localStorage.getItem("loginState")).login,
    phone:JSON.parse(localStorage.getItem("loginState"))==null?'':JSON.parse(localStorage.getItem("loginState")).phone,
  },
  mutations: {
    islogin(state,message){
      localStorage.setItem('loginState', JSON.stringify(message));
      state.land=message.login
      state.phone=message.phone
    }
  },
  actions: {
  },
  modules: {
  }
})
