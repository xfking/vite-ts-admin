// 通过扩展RouteMeta接口来输入元字段
import "vue-router";
import "vite";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
  }
}
declare module "vite" {
  interface env {
    VITE_BASE_API: string;
  }
}
