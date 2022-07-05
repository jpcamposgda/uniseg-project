import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/register-user.vue')
  },

  {
    path: '/consulta',
    name: 'consulta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/consulta-uni.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/login-uni.vue')
  },

  {
    path: '/principal',
    name: 'principal',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/pgPrincipal-uni.vue'
      )
  },
  {
    path: '/form',
    name: 'form',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/form-uni.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
