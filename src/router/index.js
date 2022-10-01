import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/vue",
      name: "vue",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/VueTestPage.vue"),
    },
    {
      path: "/three-js",
      name: "three-js",
      component: () => import("../views/ThreeJsPage.vue"),
    },
  ],
});

export default router;
