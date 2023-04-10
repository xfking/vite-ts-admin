import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      eslintPlugin({
        // 配置
        cache: false, // 禁用 eslint 缓存
      }),
    ],
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        comps: path.resolve(__dirname, "src/components"),
        stores: path.resolve(__dirname, "src/stores"),
      },
    },
    server: {
      host: "0.0.0.0",
      open: true,
      proxy: {
        "/api": {
          target: "https://api.cjit.woa.com/mock/8282",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    buildModules: ["@vueuse/nuxt"],
  };
});
