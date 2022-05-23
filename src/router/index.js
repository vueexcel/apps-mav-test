import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/DetailPage.vue'),
    props: {userDetails: {}}
  },
  {
    path: '/addEdit',
    name: 'AddEdit',
    component: () => import('../views/AddEdit.vue'),
    props: {editUserDetail: {}}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
