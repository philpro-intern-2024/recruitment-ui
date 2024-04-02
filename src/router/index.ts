import LoginView from "@/views/auth/login/LoginView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import RegisterView from "@/views/auth/registration/RegisterView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresGuest: true },
    },
    {
      path: "/auth",
      name: "auth-root",
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
          meta: { requiresGuest: true },
        },
        {
          path: "register",
          name: "register",
          component: RegisterView,
          meta: { requiresGuest: true },
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeResolve(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next({ name: "login", query: { redirect: to.fullPath } });
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return next({ name: "dashboard" });
  } else {
    return next();
  }
});

export default router;
