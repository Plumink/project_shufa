import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import md5 from 'js-md5'
import '@/assets/icon/iconfont.css'
import qs from 'qs'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import html2canvas from 'html2canvas'
import cookie from 'vue-cookie'

Vue.prototype.$cookie = cookie;
Vue.use(ElementUI);
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.prototype.html2canvas = html2canvas
Vue.config.productionTip = false
Vue.prototype.$md5 = md5

axios.defaults.baseURL ="https://www.mocking.space"

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
