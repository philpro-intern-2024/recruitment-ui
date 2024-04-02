import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { authentication } from "./plugins/authentication";
import setupBrowserIcons from "./utils/setupBrowserIcons";
import addIcons from "./utils/setupIcons";

import { OhVueIcon } from "oh-vue-icons";

import App from "./App.vue";
import router from "./router";

addIcons();

const app = createApp(App);

app.use(createPinia());
app.component("v-icon", OhVueIcon);

setupBrowserIcons();

authentication.install().then(() => {
  app.use(router);
  app.mount("#app");
});
