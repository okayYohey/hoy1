import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '../components/firebase.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/letter',
    name: 'letter',    
    component: function () {
      return import( '../views/Letters.vue')
    },
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/photos',
    name: 'photos',    
    component: function () {
      return import(/* webpackChunkName: "photos" */ '../views/Photos.vue')
    },
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/keyword',
    name: 'keyword',    
    component: function () {
      return import('../views/Keywords.vue')
    },
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'signup',    
    component: function () {
      return import('../views/Signup.vue')
    },
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/signin',
    name: 'signin',    
    component: function () {
      return import('../views/Signin.vue')
    },
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/mypage',
    name: 'mypage',
    component:function(){
      return import('../views/Mypage.vue')
    },
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component:function(){
      return import('../views/Edit.vue')
    },
    meta:{
      requiresAuth: true
    }
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
  scrollBehavior,
  navguards
})

let firebaseAppDefined = false
setInterval(() => {
  if (!firebaseAppDefined) {
    if (firebase.app()) {
      firebase.name = 'FirebaseYohei'
      firebaseAppDefined = true
    }
  }
}, 2000)

const navguards = router.beforeEach((to, from, next)=>{
  // Check for requireedAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    // Check if NOT Logged in
    if( ! firebase.auth().currentUser ){
      // Go to login
      next({
        path:'/signin',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route 
      next();
    }
  }else if (to.matched.some(record => record.meta.requiresGuest)){
    // Check if Logged in
    if(firebase.auth().currentUser){
      // Go to login
      next({
        path:'/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route 
      next();
    }
  } else {
    next()
  }
})


export default router
