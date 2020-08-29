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

Vue.use(ElementUI);
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.prototype.html2canvas = html2canvas
Vue.config.productionTip = false
Vue.prototype.$md5 = md5

// router.beforeEach((to, from, next) => {
//   const openid = localStorage.getItem('openId');
//   if (!openid) {
//     if (to.path === '/auth') {
//       next()
//     } else {
//       if (to.path === '/') {
//         next('/auth')
//         return
//       }
//       localStorage.setItem('now_url', to.fullPath) //当前页url与参数放入缓存
//       next('/auth')
//     }
//   } else {
//     next()
//   }
// })

axios.defaults.baseURL = "https://www.mocking.space/CalligraphyService"

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
