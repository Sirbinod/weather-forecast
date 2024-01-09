import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import NotFound from "../views/NotFound.vue";
import { auth } from "@/firebaseConfig";

const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        next();
      } else {
        next("/signin");
      }
    },
  },
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
