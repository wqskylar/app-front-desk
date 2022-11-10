import Vue from 'vue';
import App from './App.vue';

//引入路由器
import router from '@/router';

// 全局组件
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
