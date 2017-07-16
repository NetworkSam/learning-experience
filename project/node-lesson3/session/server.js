
let express = require('express');
let seesion = require('express-session');
let app = express();


app.use(seesion({
    resave: true, //每次客户端请求服务器的时候  都要重新保存session
    saveUninitialized: true, //保存为初始化的session
    secret: 'samuel' //加密的密钥
}));

//req.session就是客户端对应服务端的对象
app.get('/write',function (req, res) {
    //每当使用了session中间件之后，会在请求对象req上多一个session属性。{name: 'samuelcheng'}
    req.session.name = 'samuelcheng';
    res.send('session ok');
});

app.get('/read',function (req, res) {
    res.send(req.session.name);
});

app.listen(9001);
