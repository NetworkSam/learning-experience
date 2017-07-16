/*
* 路由  根据不同的路径返回不同的内容
*
* 方法名  路径名  ＝ 》  函数
* */
let express = require('express');
//app是请求监听函数  当服务器收到客户端请求后执行的函数
let app = express();
let path = require('path');

let bodyParser = require('body-parser');
//使用中间件来解析请求体  并把请求体的内容转化程对象  并挂载到req.body
//基本上所以的中间件都是一个函数，都需要执行
//此中间件可以解析编码后的url
app.use(bodyParser.urlencoded({extended:true}));
//excluded: true  false解析用的是querystring  为true的时候是qs解析的
let user = require('./routes/user');
//中间件的本质是一个函数  是匹配路由之前执行
// app.use(function (req, res ,next) {
//     console.log(1);
//     next();
// });

// app.get('/home',function (req, res) {
//     res.send({id:1,name:'乱码'});
// });

//设置模版引擎类型 ejs handlebar jade 决定添加的模版后缀
app.set('view engine', 'html');
app.set('views',path.resolve('views'));
app.engine( '.html', require( 'ejs' ).__express );


/**
 * 静态文件 不会动的文件 不会动态改变的文件 html css js 图片 图标
 */

// app.get('/bootstrap/dist/css/bootstrap.css',function (req,res) {
    //sendFile 发送文件 把一个路径的文件读出来发送给客户端,注意路径必须是绝对路径
    //path.resolve 用于把相对路径转为绝对路径
    // res.sendFile(path.resolve('../node_modules/bootstrap/dist/css/bootstrap.css'));
// });

app.use(express.static(path.join(__dirname,'static')));
app.use('/user', user);

app.all('*',function (req, res) {
    res.send('路径不存在');
});
//当客户端GET请求/home的路径的时候
//这里的路径是路径名(pathname 也就是端口号和问号中间的部分)
app.listen(8080);