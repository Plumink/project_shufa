import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/home/home.vue'
import Register from '../views/login/Register'
import OriginalCopyCalligraphy from '../views/study/OriginalCopyCalligraphy.vue'
import Show from '../views/study/Show.vue'
import ShowInfo from '../views/study/ShowInfo.vue'
import Train from '../views/study/Train.vue'
import OriginalCopy from'../views/study/OriginalCopy.vue'
import HomeLogin from '../views/home/HomeLogin'
import Font from '../views/study/Font.vue'
import Main from '../views/person/Main'
import Member from '../views/person/Member.vue'
import Follow from '../views/person/Follow.vue'
import Colluction from '../views/person/Colluction.vue'
import Follower from '../views/person/Follower.vue'
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
    path: '/show',
    component: Show
  },
  {
    path: '/show/info',
    component: ShowInfo
  },
  {
    path: '/train',
    component: Train
  },
  {
    path: '/originalcopy',
    component: OriginalCopy
  },
  {
    path:'/show',
    component:Show
  },
  {
    path: '/homelogin',
    component:HomeLogin
  },
  {
    path: '/font',
    component: Font
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/follow',
        component: Follow
      },
      {
        path: '/colluction',
        component: Colluction
      },
      {
        path: '/follower',
        component: Follower 
      }
    ]
  },
  {
    path: '/member',
    component:Member
  }
]

const router = new VueRouter({
  routes
})

export default router
