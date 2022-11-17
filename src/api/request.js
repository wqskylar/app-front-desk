import axios from 'axios';
import Mock from 'mockjs';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css'


// 1。创建axios
const request = axios.create({
    baseURL: '/api',
    timeout: '5000',
})

// 请求拦截器
request.interceptors.request.use(config => {
    nprogress.start()
    return config;
})

// 响应拦截器
request.interceptors.response.use(res => {
    nprogress.done()
    return res

}, (err) => {
    return Promise.reject(new Error('faile'))
})

export default request;

// mock 拦截 ajax 
// 三级菜单数据
Mock.mock('/api/product/getBaseCategoryList', 'get', {
    typeNav: [{
        name: ['家用电器'],
        id: '001',
        child: [
            {
                name: '电视',
                id: '101',
                child: ['全面屏电视', '教育电视', 'OLED电视', '智慧屏', '4k超清电视', '55英寸', '65英寸', '电视配件']
            },
            {
                name: '空调',
                id: '102',
                child: ['新风空调', '以旧换新']
            }
        ]
    }, {
        name: ['手机', '运营商', '数码'],
        id: '002',
        child: [
            {
                name: [],
                id: '102',
                child: []
            }
        ]
    }, {
        name: ['电脑', '办公'],
        id: '003',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['家居', '家具', '家装', '厨具'],
        id: '004',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['男装', '女装', '童装', '内衣'],
        id: '005',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['美妆', '个户清洁', '宠物'],
        id: '006',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['女鞋', '箱包', '钟表', '珠宝'],
        id: '007',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['男鞋', '运动', '户外'],
        id: '008',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['房产', '汽车', '汽车用品'],
        id: '009',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['母婴', '玩具乐器'],
        id: '010',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['食品', '酒类', '生鲜', '特产'],
        id: '011',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['艺术', '礼品鲜花', '农资绿植'],
        id: '012',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['医药保健', '计生情趣'],
        id: '013',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['图书', '文娱', '教育', '电子书'],
        id: '014',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['机票', '酒店', '旅游', '生活'],
        id: '015',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['众筹', '白条', '保险', '企业金融'],
        id: '016',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['安装', '维修', '清洁', '二手'],
        id: '017',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }, {
        name: ['工业品'],
        id: '018',
        child: [
            {
                name: [],
                id: '',
                child: []
            }
        ]
    }]
})