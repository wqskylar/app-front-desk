// 统一管理api接口
import request from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList,get,无参数

export const reqCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
});
