import Vue from "vue";
import "./styles/base.scss";
import App from "./app.vue";
import "ant-design-vue/dist/antd.css";
import { Button, Layout, Menu, Icon } from "ant-design-vue";

Vue.use(
  Button,
  Layout,
  Layout.Footer,
  Layout.Content,
  Layout.Header,
  Menu,
  Icon
);
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
});
