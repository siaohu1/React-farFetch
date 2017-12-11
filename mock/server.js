let fs = require('fs');
let express = require('express');
let bodyParse = require('body-parser');
let app = express();
app.use('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    next();
});
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(express.static(__dirname));

/**
 * @param p 需要读取的数据文件路径
 * @param fn   回调函数,返回读取的数据
 */
let read = (p, fn) => {
    fs.readFile(p, 'utf-8', (err, data) => {
        if (err) {
            return {code: 0, err: 'file does not exist!'}
        } else {
            fn(JSON.parse(data))
        }
    })
};

/**
 * 写入文件内容
 * @param p  需要写入文件的路径
 * @param d  需要写入文件的数据
 * @param cb  回调函数
 */
let write = (p, d, cb) => {
    fs.writeFile(p, JSON.stringify(d), cb)
};

/**
 * 造id price数据
 */
/*
function getPrice() {
    let price = '';
    let a = Math.round(Math.random() * (5 - 4) + 4);
    for (var i = 0; i < a; i++) {
        price += Math.round(Math.random() * (9 - 1) + 1);
    }
    return price
}

read('./data/prdList.json', (data) => {
    for (let i = 1; i < data.length; i++) {
        data.forEach((item) => {
            let price = getPrice();
            item.price = parseFloat(price);
        });
        write('./data/prdList.json', data, () => {
            console.log('su');
        })
    }
});

*/


/**
 * 轮播图  返回六张轮播图图片地址
 */
app.get('/swiper', (req, res) => {
    read('./data/swiper.json', (s) => {
        res.send(s)
    });
});

/**
 * 推荐  返回四件推荐商品
 */
app.get('/recommend', (req, res) => {
    read('./data/recommend.json', (s) => {
        let recommend = s.reverse().slice(0, 4);
        res.send(recommend)
    })
});

/***
 * 返回分类列表数据
 * 需要参数 classification 的分类
 */
app.post('/recommlist', (req, res) => {
    console.log(req.body.data);
    res.send('hu2323hu')
});

/**
 * 返回所有商品数据
 */

app.get('/prdList', (req, res) => {
    read('./data/prdList.json', (data) => {
        res.send(data)
    })
});

app.listen(6066, () => {
    console.log('server success!');
});
