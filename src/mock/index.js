import Mock from 'mockjs';
import banner from './banner.json'
import './typeNav'
import './search'
// 轮播图图片
Mock.mock('/mock/banner', 'get', {
    code: 200,
    data: banner
})


