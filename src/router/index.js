import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePageView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
