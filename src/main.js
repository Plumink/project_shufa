import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import md5 from 'js-md5'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
