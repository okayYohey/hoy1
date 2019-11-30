import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path: '/letter',
    name: 'letter',    
    component: function () {
      return import( '../views/Letters.vue')
    },
  },
  {
    path: '/photos',
    name: 'photos',    
    component: function () {
      return import(/* webpackChunkName: "photos" */ '../views/Photos.vue')
    },
  },
  {
    path: '/keyword',
    name: 'keyword',    
    component: function () {
      return import('../views/Keywords.vue')
    },
  }
]
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})

export default router
