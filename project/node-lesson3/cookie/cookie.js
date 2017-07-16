let http = require('http');
let querystring = require('querystring');
http.createServer(function (req, res) {

    let url = req.url;
    //当url地址是write的话就需要写cookie
    res.setHeader('Content-Type','text/plain;charset=utf8;')
    if(url == '/write'){
        res.setHeader('Set-Cookie',['name=samuel','age=26']);
        // res.setHeader('Set-Cookie','age=26');
        res.end('write ok');
    }else if(url == '/read'){
        //第二次客户端访问服务器的时候  客户端会把本次上次的保存的cookie待会给服务器 放在请求头
        //req.headers 是一个对象  这个对象是从请求头中解析出来的{host:'http://localhost:8080'}
        let cookie = req.headers.cookie;
        let age = querystring.parse(cookie,'; ').age;
        res.end('read:'+ age);
    }else if(url == '/visite'){
        let cookie = req.headers.cookie;
        let cookieObj = querystring.parse(cookie, '; ');
        let visit = cookieObj.visit;
        let count = 1;
        if(visit){
            count = parseInt(visit) + 1;
        }
        res.setHeader('Set-Cookie',`visit=${count}`);
        res.end(`欢迎你的第${count}次访问!`);
    }else {
        res.end('404');
    }

}).listen(8092);