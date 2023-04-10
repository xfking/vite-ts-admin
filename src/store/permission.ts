import { defineStore } from "pinia";
import router from "@/router";
import { RouteRecordRaw } from "vue-router";

export const permissionStore = defineStore({
  id: "permission",
  state: () => ({
    routes: [
      {
        path: "/",
        name: "Home",
        meta: { title: "展示中心" },
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/user",
        name: "User",
        component: () => import("../views/User/index.vue"),
        meta: { title: "用户管理", icon: "user" },
        children: [
          {
            path: "/user/userList",
            name: "UserList",
            component: () => import("../views/User/userList.vue"),
            meta: { title: "用户列表" },
          },
        ],
      },
      {
        path: "/business",
        name: "Business",
        component: () => import("../views/Business/index.vue"),
        meta: { title: "事务管理", icon: "mail" },
        children: [
          {
            path: "/business/processingList",
            name: "ProcessingList",
            component: () => import("../views/Business/processingList.vue"),
            meta: { title: "待办列表" },
          },
          {
            path: "/business/unProcessingList",
            name: "UnProcessingList",
            component: () => import("../views/Business/unProcessingList.vue"),
            meta: { title: "已办列表" },
          },
        ],
      },
    ],
  }),
  actions: {
    getRoutes() {
      console.log(router);
    },
    addRoutes() {
      this.routes.forEach((route: RouteRecordRaw) => {
        router.addRoute(route);
      });
    },
  },
});
