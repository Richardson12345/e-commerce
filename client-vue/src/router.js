import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checkout from './views/Checkout.vue'
import Login from './views/login.vue'
import SignUp from './views/signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      naem: 'signup',
      component: SignUp
    }
  ]
})
