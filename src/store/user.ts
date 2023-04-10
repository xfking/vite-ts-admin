import { defineStore } from "pinia";
import { getToken, removeToken, setToken } from "@/utils/auth";
import api from "@/api";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    token: getToken(),
    userInfo: {},
  }),
  actions: {
    // 用户登录
    login(value: API.InterData) {
      const { account, password } = value;
      return new Promise((resolve, reject) => {
        api.user
          .login({ account, password })
          .then((res) => {
            const { token } = res.data;
            setToken(token);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 登出
    logout() {
      return new Promise((resolve) => {
        removeToken();
        resolve(true);
      });
    },
  },
});
