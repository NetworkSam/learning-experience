//引入express模块
let express = require('express');
//执行express方法得到app
let app = express();
let session = require('express-session');
let path = require('path');
let flash = require('connect-flash');
//使用mongodb存储会话的中间件 返回一个函数需要执行 传入参数session
let MongoStore = require('connect-mongo')(session);

let { User } = require('./model.js');
//首页路由
let index = require('./routes/index.js');
//用户路由
let user = require('./routes/user.js');
//文章分类路由
let category = require('./routes/category.js');
//文章路由
let article = require('./routes/article.js');

let bodyParser = require('body-parser');
//把urlencoded格式的字符转成json对象 req.body
app.use(bodyParser.urlencoded({extended: true}));

//1、设置模版引擎
app.set('view engine','html');
//2、设置模块存放目录
app.set('views', path.resolve('views'));
//3、设置html类型的模版 使用哪个方法来渲染
app.engine('.html', require('ejs').__express);

app.use(express.static(path.resolve('node_modules')));
app.use(express.static(path.resolve('public')));

app.use(session({
    resave: true,  //每次重新保存session
    saveUninitialized: true, //保存未初始化的session
    secret: 'samuel',  //加密session的密钥
    //指定会话存储的位置 数据库 文件系统 内存
    store: new MongoStore({
        url: 'mongodb://127.0.0.1/blogs'
    }),
    cookie:{
        maxAge: 600*1000
    }
}));

app.use(flash());
app.use(function (req, res, next) {
    res.locals.title = 'Samuel Blog';
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    res.locals.user = req.session.user;
    next();
});

app.get('/', index);
//客户端访问url路径是以/user开头的话,会走user路由中间件，此路径后面必须跟的是/(路由分隔符)
app.use('/user',user);
app.use('/category',category);
app.use('/article',article);

//监听端口9000
app.listen(9000);