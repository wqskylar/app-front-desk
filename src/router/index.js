// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import detail from '@/pages/detail'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

// 重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}


export default new VueRouter({
    // 配置路由
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            name: 'search',
            path: '/search/:keyWord',
            component: Search,
            meta: {
                show: true
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        {
            name: 'detail',
            path: '/detail',
            component: detail,
            meta: {
                show: true
            }
        },
    ]
})