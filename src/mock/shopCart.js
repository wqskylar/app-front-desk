(function () {
    import('mockjs')
        .then(Mock => {
            let data = Mock.mock({
                "price|1000-8000": 4
            })
            Mock.mock('/mock/shopCart', "post", function (options) {
                var params = options.body;
                data.skuNum = params
                return data
            });
        })
        .catch((err) => {
            throw err
        });
})()



