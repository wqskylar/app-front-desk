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

