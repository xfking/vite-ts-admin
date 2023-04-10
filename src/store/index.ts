import { defineStore } from "pinia";
import api from "@/api";

export const appStore = defineStore({
  id: "app",
  state: () => ({
    collapsed: false,
  }),
  actions: {
    changeCollapsed(value: boolean) {
      this.collapsed = value;
    },
    // 用户列表
    getUserList(params: API.ListParams) {
      return new Promise((resolve, reject) => {
        api.user
          .getUserList(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
