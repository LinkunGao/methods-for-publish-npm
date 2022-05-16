import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import PigUI from "pig-ui-demo-vue";
import "pig-ui-demo-vue/pig-ui.css";

// Vue.use(PigUi);
createApp(App).use(PigUI).mount("#app");
