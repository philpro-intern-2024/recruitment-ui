import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/accountstate',
    //   name: 'account-state',
    //   component: AccountState
    // },
    // {
    //   path: '/learn',
    //   name: 'learn',
    //   component: LearnView
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: ProjectView
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: ProfileView
    // },
    // {
    //   path: '/support',
    //   name: 'support',
    //   component: SupportView
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
  ],
});

export default router;
