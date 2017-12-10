let fs = require('fs');
let express = require('express');
let app = express();
app.use('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    next();
});

/**
 * @param file 需要读取的数据文件路径
 * @param fn   回调函数,返回读取的数据
 */
function read(file, fn) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            return {code: 0, err: 'file does not exist!'}
        } else {
            fn(JSON.parse(data))
        }
    })
}

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
    read('./data/prdList.json', (s) => {
        let recommend = s.reverse().slice(0, 4);
        res.send(recommend)
    })
});

/**
 * 返回所有商品数据
 */

app.post('/prdList', () => {

});

app.listen(6066, () => {
    console.log('server success!');
});