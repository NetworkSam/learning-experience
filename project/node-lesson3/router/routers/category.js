//文章分类相关的路由放在这里写
/**
 * /category/add 增加分类
 * /category/delete 删除分类
 */
let express = require('express');
let router = express.Router();
let subcate = require('./subcate');

router.use('/add',subcate);

router.get('/add',function (req, res) {
    res.send('增加分类');
});

router.get('/delete',function (req, res) {
    res.send('删除分类');
});

router.get('/list',function (req, res) {
    res.send('分类列表');
});

router.get('/detail',function (req, res) {
    res.send('分类详情页');
});

router.all('*',function (req, res) {
    res.send('路径不存在...');
});

module.exports = router;