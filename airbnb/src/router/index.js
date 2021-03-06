import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/SearchCity',
    name: 'SearchCity',
    component: () => import('../views/SearchCity')
  },
  {
    path: '/rooms/:roomId',
    name: 'rooms',
    component: () => import('../views/TheRooms')
  },
  {
    path: '/users/show/:userId',
    name: 'usersShow',
    component: () => import('../views/TheUsersShow')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
