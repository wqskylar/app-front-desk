(function () {
    import('mockjs')
        .then(Mock => {
            Mock.mock('/mock/shopCart', "post", function (options) {
                var params = options.body;
                return {
                    "items": [
                        {
                            "id": 1,
                            "name": "item1"
                        },
                        {
                            "id": 2,
                            "name": "item2"
                        }
                    ]
                };
            });
        })
        .catch((err) => {
            throw err
        });
})()



