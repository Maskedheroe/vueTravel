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
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */'../views/detail/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
