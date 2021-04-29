import Vue from "vue";

import Layout from "./components/Layout.vue";
import "./styles/main.scss";

new Vue({
  el: "#app",
  render: h => h(Layout)
});
