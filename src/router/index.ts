import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/dashboard/HomeView.vue'
import AccountState from '@/views/dashboard/AccountState.vue'
import LearnView from '@/views/dashboard/LearnView.vue'
import ProjectView from '@/views/dashboard/ProjectView.vue'
import ProfileView from '@/views/dashboard/ProfileView.vue'
import SupportView from '@/views/dashboard/SupportView.vue'
import Login from '../views/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accountstate',
      name: 'account-state',
      component: AccountState
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
