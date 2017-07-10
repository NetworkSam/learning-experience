//nodejs 10个MVC框架
//参考链接地址:http://www.cnblogs.com/lhb25/p/10-best-node-js-mvc-frameworks.html

//创建http服务  ip地址  port端口号
//node提供自带的模块 http

let http = require('http');
let fs = require('fs');
let port= 3001;

//http://tool.oschina.net/commons/

let listener = function (req, res) { //监听函数 客户端请求  服务端响应
    console.log('hello world');
    //res是一个可写流
    res.setHeader('Content-Type','text/plain;charset=utf8');

    // res.statusCode = 200;
    // res.write(200,{
    //     'Content-type':'text/plain;charset=utf8'
    // });

    //fs.createReadStream('.index.html').pipe(res);

    // console.log(res);

    res.write('你好,世界!');
    res.end();

    //favicon.ico 发送请求是看不一定的,如果不存在,以后就不请求了.
};

//不要用3000以下
http.createServer(listener).listen(port,function () {
    console.log('http://127.0.0.1:'+ port +' port open...')
});

//该懂服务端代码 必须重启
//nodemon  实现自动重启 可以在命令行下使用 全局安装
//进入到当前要执行的文件夹下 执行nodemon 文件名

