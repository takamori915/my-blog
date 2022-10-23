import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/articles/:id',
    name: "article-detail",
    component: ArticleDetail
  },
  {
    path: '/onsen',
    name: "onsen",
    component: () => import('../components/Onsen.vue')
  },
  {
    path: '/trip',
    name: "trip",
    component: () => import('../components/Trip.vue')
  },
  {
    path: '/noodle',
    name: "noodle",
    component: () => import('../components/Noodle.vue')
  },
  {
    path: '/food',
    name: "food",
    component: () => import('../components/Food.vue')
  },
  {
    path: '/map',
    name: "map",
    component: () => import('../components/Map.vue')
  },
  {
    path: '/purchase',
    name: "purchase",
    component: () => import('../components/Purchase.vue')
  },
  {
    path: '/ranking',
    name: "ranking",
    component: () => import('../components/Ranking.vue')
  },
  {
    path: '/search',
    name: "search",
    component: () => import('../components/Search.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
