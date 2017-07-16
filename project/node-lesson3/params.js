/**
 * 如何在服务器获取请求中的参数
 * 请求行  方法名  路径  （用？隔开的两部分）  路径和查询字符串
*/
let express = require('express');
let  app = express();
let url = require('url');
let users = [
    {
        name: 'samuel1',
        id:1
    },
    {
        name: 'samuel3',
        id:2
    },
    {
        name: 'samuel3',
        id:3
    },
    {
        name: 'samuel4',
        id:4
    }
];

app.get('/user',function (req, res) {
    // let {pathname, query} =  url.parse(req.url,true);
    // console.log('pathname', pathname);
    // console.log('query', query);
    console.log('pathname', req.path);//express在req上加了很多属性  不用url对象解构赋值了
    console.log('query', req.query);//express 对象
    // console.log(req.headers.host);
    //每次刷新页面会打印两次两次  原因是favicon.ico
    res.end('111');
});

//路径参数
app.get('/user/:id',function (req, res) {
    //先拿到路径参数里面的id
    // console.log('req.params.id',req.params.id);
    let id = req.params.id;
    let user = users.find(item => item.id == id);
    console.log(user);
    if( user === undefined){
        res.setHeader('Content-Type','text/plain;charset=utf8');
        res.end('暂无数据');
    }else {
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.end(user.name);
    }
});

app.listen(9001);