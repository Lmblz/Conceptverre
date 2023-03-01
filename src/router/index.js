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
  },
  {
    path: '/sur-mesure',
    name: 'custom',
    component: () => import('../views/CustomView.vue')
  },
  {
    path: '/galerie',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/boutique',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/boutique/:idproduct',
    name: 'shop-product',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
