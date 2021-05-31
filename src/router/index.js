import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'../views/home/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "City" */'../views/city/City.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
