import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/blogadmin", name:'login', component: () => import("../views/Login.vue") },
  { path: "/detail", component: () => import("../views/Detail.vue") },
  { path: "/letsgetstarted", component: () => import("../views/LoginQuestionare.vue") },
  { path: "/questionnaire", component: () => import("../views/LetsGetStarted.vue") },
  {
    path: "/dashboard", component: () => import("../views/Dashboard.vue"),
    children: [
      { path: "/dashboard/article", component: () => import("../views/Article.vue") },
      { path: "/dashboard/category", component: () => import("../views/Category.vue") },
      { path: "/dashboard/changepassword", component: () => import("../views/ChangePassword.vue") },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
