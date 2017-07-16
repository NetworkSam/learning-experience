/**
 * 用原生和http模块实现路由 根据客户端请求的方法和路径不同返回不同的内容
 * GET  /SINGUP 返回注册
 * GET SIGNEIN 返回登录
 * 其它路径 返回404页面
 */

//引入http模块
let http = require('http');
//创建一个http服务器，参数是一个请求监听函数
//当服务端收到客户端的请求时会执行监听函数
// req＝请求对象 res＝ 响应对象
//乱码原因是编辑器的编码utf－8和浏览器的默认编码gbk不一样

http.createServer(function (req, res) {
    //获取本地请求的方法
    let method = req.method;
    let  url = req.url;
    console.log(method, url);
    // res.setHeader('content‐type','text/plain;charset=utf8');
    res.setHeader('Content-Type','text/plain;charset=utf8');
    //当请求的方法是GET 并且url地址是signup
    if(method === 'GET' && url === '/signup' ){
        //写入响应体并结束相应
        res.end('注册');
    } else if( method=== 'GET' && url === '/signin' ){
        res.end('登录');
    }else {
        res.end('页面没有找到 404');
    }

}).listen(3001);

//存在问题
/*

1、所有都写到一个函数里面了，函数过于庞大，代码冗余
2、业务重构的风险比较大

*/

