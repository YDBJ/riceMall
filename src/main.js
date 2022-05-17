import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'vant/lib/index.css';

// 导入路由模块
import router from "./router/index.js"

Vue.use(Vuex);

import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar
} from 'vant';

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')