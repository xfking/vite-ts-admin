import router from "@/router";
import { getPageTitle, getToken } from "@/utils/auth";

const whiteList = ["/login"]; // 重定向白名单

router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = getPageTitle(to.meta.title);

  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/") {
      next();
    } else {
      next();
      // route.addRoutes();
      // next({ ...to, replace: true });
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
