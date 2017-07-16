let express = require('express');
let app = express();
//使用中间件函数
//没有路径，则意味着它可以匹配所有的路径
//也没有方法，则意味着它可以匹配所有的方法

//中间件其实是一个函数 每当请求到来的时候 就会执行
//中间件和路由规则的执行的顺序跟排列顺别严格相等
//
// app.use(function (req, res, next) {
//     console.log('1');
//     //next是一个函数  调用它的话可以让请求向下继续执行
//     next();
// });

//中间件作用
//编写公用的逻辑，所有的路由都需要处理只需写一次就行
//添加一些公用的属性和方法  req.path  req.query
//公用的方法 res.send();  send方法用来向客户端发送响应体
// end只能接受字符串和Buffer  send可以接受任意类型 字符串 Buffer 对象 数组 数字
//send 也是通过中间件给res对象添加上去的

//如果设置两个相同的key的话 后面的会覆盖前面的设置
//在调用setHeader的时候响应头并没有发送，响应头会在第一次调用write的时候发送

app.use(function (req, res, next) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    //next是一个函数  调用它的话可以让请求向下继续执行
    next();
});

let STATUS_CODE = {
    200: '成功',
    400: '客户端错误',
    500:'服务端错误'
};

//为响应对象添加send属性
//send和write一样都会结束写入响应体  一旦调用之后 则不能再次调用write和end方法  其实send方法里面都会调用end
app.use(function (req, res, next) {
    // 对象 数组 数字  字符串
    res.send = function (params) {
        let type = typeof params;
        switch (type){
            case 'object':
                //如果参数的类型是对象，需要先转成字符串
                params = JSON.stringify(params);
                break;
            case 'number':
                res.statusCode = params;
                params = STATUS_CODE[params];
                break;
            default:
                params = params.toString();
                break;
        }
        res.end(params);
    };
    next();
});

// require('http');
const server = require('_http_server');
// console.log("服务状态码",server);

//打印请求日志中间件
app.use(function (req, res, next) {
    // console.log(res);
    console.log(req.method, req.path);
    next();
});

//路由不要重复，一旦遇到路由匹配，则绝不会再往下执行了
app.get('/home',function(req, res){
    // res.end('首页');
    res.send([{name:'samuel',age:26,job:'web font end develop'}]);
});

app.all('*',function (req, res) {
    res.end('页面不存在...');
});

app.listen(9000);

