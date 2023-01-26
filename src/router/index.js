import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomepageView
  },
  {
    path: '/panier',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/notre-histoire',
    name: 'history',
    component: () => import('../views/HistoryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
