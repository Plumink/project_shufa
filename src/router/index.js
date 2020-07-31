import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../App.vue'
import Register from '../views/login/Register'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
   {
     path: '/register',
     component: Register
   }
]

const router = new VueRouter({
  routes
})

export default router
