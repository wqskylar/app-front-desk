import Mock from 'mockjs';
import banner from './banner.json'
import './typeNav'
import './search'
import './detail'
import './shopCart'
// 轮播图图片
Mock.mock('/mock/banner', 'get', {
    code: 200,
    data: banner
})



