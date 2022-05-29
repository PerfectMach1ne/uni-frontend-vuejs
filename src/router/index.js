import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import UserPageView from '@/views/UserPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePageView
  },
  {
    // Dynamic route matching
    path: '/user-page/:id',
    name: 'user-page',
    component: UserPageView,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
