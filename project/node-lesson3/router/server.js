let express = require('express');
let app = express();
let user = require('./routers/user');
let category = require('./routers/category');

//现在use里传了2个参数，第一个参数是路径前缀  第二个参数才是路由中间件
// 当客户端请求url地址 /user/signup的话 也就是说以/user开头的话 才会走user中间件
app.use(function (req, res, next) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    next();
});

app.use('/user',user);

//当客户端请求的地址是以category开头的话 才会走category中间件
app.use('/category',category);

//端口号取值范围0～65535
app.listen(8090);