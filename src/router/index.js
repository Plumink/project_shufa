import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/home/home.vue'
import Register from '../views/login/Register'
import OriginalCopyCalligraphy from '../views/study/OriginalCopyCalligraphy.vue'
import Show from '../views/study/Show.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
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
  },
  {
    path:'/show',
    component:Show
  }
]

const router = new VueRouter({
  routes
})

export default router
