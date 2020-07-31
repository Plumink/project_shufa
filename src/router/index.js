import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../App.vue'
import Register from '../views/login/Register'
import OriginalCopyCalligraphy from '../views/study/OriginalCopyCalligraphy.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
   {
     path: '/register',
     component: Register
   },
   {
    path: '/originalcopycalligraphy',
    component: OriginalCopyCalligraphy
  }
]

const router = new VueRouter({
  routes
})

export default router
