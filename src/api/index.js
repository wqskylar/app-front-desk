// 统一管理api接口
import request from "./request";

export const reqCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
});

export const reqGetBannerList = () => request({
    url: '/banner',
    method: 'get'
});

