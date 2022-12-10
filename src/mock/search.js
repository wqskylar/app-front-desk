(function () {
    import('mockjs').then(Mock => {
        Mock.mock('/mock/list', 'post', (config) => {
            Mock.Random.extend({
                url: function () {
                    return this.pick([
                        "./images/search/mobile01.png",
                        "./images/search/mobile02.png",
                        "./images/search/mobile03.png",
                        "./images/search/mobile04.png",
                        "./images/search/mobile05.png",
                    ])
                }
            })
            let search = Mock.mock(template)
            let temp = JSON.parse(config.body);
            let information = '';
            if (temp.categoryname || temp.keyWord) {
                information = `${temp.categoryname}\n${temp.keyWord}\n第${temp.curPage}页相关商品信息`;
            } else {
                information = `第${temp.curPage}页默认展示的的商品`
            }
            search.information = information;
            return {
                code: 200,
                data: search,
            }
        })
    }).catch(e => {
        throw e
    })
})()

let template = {
    "attrsList": [],
    "goodsList": [
        {
            "id": "001",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "002",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "003",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "004",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "005",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "006",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "007",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "008",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "009",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        },
        {
            "id": "010",
            "img": "@URL",
            "price|2000-8000": 9,
            "title": "商品的title",
            "person|1-999": 1
        }
    ],
    "trademarkList": [],
    "pageNo": 1,
    "pageSize": 10,
    "total": 26,
    "totalpages": 3
}

