import Vue from 'vue';
import App from './App.vue';

//引入路由器
import router from '@/router';
//引入mock
import '@/mock'
// swiper样式
import 'swiper/css/swiper.css'
// element-ui
import { Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 全局组件
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false
// 引入仓库
import store from '@/store'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
