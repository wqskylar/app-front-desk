import Mock from 'mockjs';
console.log('mock');

// mock 拦截 ajax 
// 三级菜单数据
Mock.mock('/api/product/getBaseCategoryList', 'get', {
    typeNav: [{
        name: ['家用电器'],
        id: '01',
        child: [
            {
                name: '电视',
                id: '0101',
                child: [
                    {
                        name: '全面屏电视',
                        id: '010101'
                    },
                    {
                        name: '教育电视',
                        id: '010102'
                    },
                    {
                        name: 'OLED电视',
                        id: '010103'
                    },
                    {
                        name: '智慧屏',
                        id: '010104'
                    },
                    {
                        name: '55英寸',
                        id: '010105'
                    },
                    {
                        name: '65英寸',
                        id: '010106'
                    },
                    {
                        name: '电视配件',
                        id: '010107'
                    },

                ]

            },
            {
                name: '空调',
                id: '0102',
                child: [
                    {
                        name: '新风空调',
                        id: '010201'
                    },
                    {
                        name: '以旧换新',
                        id: '010202',
                    },
                    {
                        name: '空调柜机',
                        id: '010203'
                    },
                    {
                        name: '空调套装',
                        id: '010204'
                    },
                    {
                        name: '新一级能效',
                        id: '010205'
                    },
                    {
                        name: '挂机1.5匹',
                        id: '010206'
                    },
                    {
                        name: '柜机3匹',
                        id: '010207'
                    },
                    {
                        name: '变频空调',
                        id: '010208'
                    }
                ]
                // child: ['新风空调', '以旧换新', '空调柜机', '空调套装', '新一级能效', '挂机1.5匹', '柜机三匹', '变频空调']
            },
            {
                name: '洗衣机',
                id: '0103',
                child: [
                    {
                        name: '滚筒洗衣机',
                        id: '010301'
                    },
                    {
                        name: '洗烘一体机',
                        id: '010302'
                    },
                    {
                        name: '波轮洗衣机',
                        id: '010303'
                    },
                    {
                        name: '洗烘套装',
                        id: '010304'
                    },
                    {
                        name: '迷你洗衣机',
                        id: '010305'
                    },
                    {
                        name: '洗衣机配件',
                        id: '010306'
                    },
                    {
                        name: '烘干机',
                        id: '010307'
                    },
                ]
            }
        ]
    }, {
        name: ['手机', '运营商', '数码'],
        id: '02',
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