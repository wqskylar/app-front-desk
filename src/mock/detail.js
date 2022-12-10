import detail from '@/store/detail';

(function () {
    import('mockjs').then(({ default: Mock }) => {
        let detail = Mock.mock(template)
        Mock.mock('/mock/detail', 'get', (config) => {
            return detail
        })
    }).catch(e => {
        throw e
    })
})()

let template = {
    "name": "Apple iPhone 14 (A2884) 128GB 紫色 支持移动联通电信5G 双卡双待手机",
    "news": "【限时活动】指定iPhone14领券立减700元，加0.01元购原厂AppleCare+服务，为您的新机保驾护航！！!",
    "price|1000-8000": 8,
    "choice": [{
        "title": "选择版本",
        "content": [
            {
                "attr": "256G",
                "isChecked": 0
            },
            {
                "attr": "128G",
                "isChecked": 0
            },
            {
                "attr": "64G",
                "isChecked": 0
            },
        ],
    },
    {
        "title": "购买方式",
        "content": [
            {
                "attr": "公开版",
                "isChecked": 0
            },
            {
                "attr": "快充",
                "isChecked": 0
            },
            {
                "attr": "A+会员版",
                "isChecked": 0
            },
        ]
    }],
    "imagesList": [
        {
            "id": "001",
            "url": "/images/search/mobile01.png"
        },
        {
            "id": "002",
            "url": "/images/search/mobile02.png"
        },
        {
            "id": "003",
            "url": "/images/search/mobile03.png"
        },
        {
            "id": "004",
            "url": "/images/search/mobile04.png"
        },
        {
            "id": "005",
            "url": "/images/search/mobile05.png"
        },
    ]

}

