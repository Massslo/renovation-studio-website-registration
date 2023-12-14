import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Register from '@/views/Register.vue'
import HomeView from '@/views/Main.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'home',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/PageNotFound',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
