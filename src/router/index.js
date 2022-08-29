import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/articles/:id',
    name: "article-detail",
    component: ArticleDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
