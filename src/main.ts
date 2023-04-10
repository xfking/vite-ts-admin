import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementUI from "element-plus";
import "./style/index.less";
import "./permission";

import "element-plus/dist/index.css"

createApp(App).use(router).use(ElementUI).use(createPinia()).mount("#app");
