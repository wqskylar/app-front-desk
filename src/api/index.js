// 统一管理api接口
import request from "./request";

// 三级接口
export const reqCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
});
// 轮播图
export const reqGetBannerList = () => request({
    url: '/banner',
    method: 'get'
});

// search模块数据
export const reqGetSearchInfo = (params) => request({
    url: '/list',
    method: 'post',
    data: params,
})

// 商品详情
export const reqGetDetail = (id) => request({
    url: '/detail',
    method: 'get',
    id
})

// 购物车模块
export const reqShopCart = (params) => request({
    url: '/shopCart',
    method: 'post',
    data: params,
})

export const reqToken = (params) => request({
    url: '/token',
    method: 'get',
    data: params,
})

export const reqUserName = (token) => request({
    url: '/username',
    method: 'get',
    data: token
})



