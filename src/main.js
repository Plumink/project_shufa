import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import md5 from 'js-md5'
import '@/assets/icon/iconfont.css'
import qs from 'qs'
import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.config.productionTip = false
Vue.prototype.$md5 = md5

axios.defaults.baseURL = "http://127.0.0.1:9003"



new Vue({
  router,
  store,
  vuetify,
  data(){
    return{
       
    }
  },
  render: h => h(App)
}).$mount('#app')
