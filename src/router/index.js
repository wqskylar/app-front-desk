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
import AddShopCar from "@/pages/addShopCar"
import ShopCart from "@/pages/ShopCart"

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


const router = new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
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
            path: '/detail/',
            component: detail,
            meta: {
                show: true
            }
        },
        {
            name: 'addShopCar',
            path: '/addShopCar',
            component: AddShopCar,
            meta: {
                show: true
            }
        },
        {
            name: 'shopCart',
            path: '/shopCart',
            component: ShopCart,
            meta: {
                show: true
            }
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        if (localStorage.getItem('token')) {
            next({ path: '/home' })
        } else {
            next()
        }
    } else {
        next() // 如果访问的不是 /login 路由，则继续访问
    }

    // if (to.path === '/') {
    //     next({ path: '/home' })
    // } else {
    //     next() // 如果访问的不是 /login 路由，则继续访问
    // }
})

// 全局后置守卫
router.afterEach((to, from) => {
    // 在这里做一些路由跳转后的操作
})


export default router