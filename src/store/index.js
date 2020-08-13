import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    land:JSON.parse(localStorage.getItem("loginMessage"))==null?false:JSON.parse(localStorage.getItem("loginMessage")).login,
    phone:JSON.parse(localStorage.getItem("loginMessage"))==null?'':JSON.parse(localStorage.getItem("loginMessage")).phone,
  },
  mutations: {
    islogin(state,message){
      localStorage.setItem('loginMessage', JSON.stringify(message));
      state.land=message.login
      state.phone=message.phone
    }
  },
  actions: {
  },
  modules: {
  }
})
