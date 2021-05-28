import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "Home" */'../views/home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
