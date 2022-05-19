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
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Divider,
  Sticky,
  Lazyload,
  PullRefresh,
  List,
  Cell,
} from 'vant';

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
Vue.use(Sticky);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Cell);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')