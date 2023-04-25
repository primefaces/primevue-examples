import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "../store/auth.store";
import { useClientStore } from "../store/client.store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../components/HelloWorld.vue"),
    meta: {
      anonymous: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/src/views/user/sign-up.vue"),
    meta: {
      anonymous: true,
    },
  },
  {
    path: "/user",
    component: () => import("@/src/views/user/index.vue"),

    children: [
      {
        path: "",
        name: "menu",
        component: () => import("@/src/views/user/home.vue"),
        meta: {
          requireUser: true,
        },
      },
      {
        path: "/me",
        name: "user-me",
        component: () => import("@/src/views/user/client.vue"),
        meta: {
          requireUser: true,
        },
      },
      {
        path: "/commands",
        name: "user-commands",
        component: () => import("@/src/views/user/command.vue"),
        meta: {
          requireUser: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const clientStore = useClientStore();
  if (to.meta.requireUser && clientStore.isFirstVist) {
    next({ name: "signup" });
  }
  
  // if (!to.meta.anomymous) {
  //   if (to.meta.requireUser) {
  //     if (clientStore.isFirstVist) {
  //       next({ name: "user-me" });
  //     }else{
  //          next({ name: "menu" });
  //     }

  //   }
  // }
  // const auth = useAuthStore();
  next();
});

export default router;
