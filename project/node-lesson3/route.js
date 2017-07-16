let express = require('express');
//express是一个方法，或者说是一个函数, 执行次函数可以得到app
let app = express();
//app本质上是一个请求监听函数，会在客户端体提交到服务器的时候执行

//如何定义路由
//app的方法名和http的请求方法名是一一对应的
//GET POST DELETE PUT OPTIONS HEAD
//第一个参数是路径  第二个参数是请求监听函数
app.get('/signup',function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end('注册');
});

app.get('/signin',function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end('登录');
});

app.get('/',function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end('首页');
});

// app.get('/*',function (req, res) {
//     res.setHeader('Content-Type', 'text/html;charset=utf8');
//     res.end('Page Not Found 404, 哈哈,歇会吧,页面跑飞了...');
// });

//all代表能匹配所有的方法 ＊ 能匹配所有的路径 能匹配到所有的get post 等等
app.all('*',function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end('Page Not Found 404, 哈哈,歇会吧,页面跑飞了...');
});

//路由匹配一个 就不会向下匹配了
//监听8080端口  启动一个app服务器
app.listen(8080);



