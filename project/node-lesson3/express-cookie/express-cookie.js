let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
//cookieParse()是一个函数  必须先执行
app.use(cookieParser());

app.get('/write',function (req, res) {
   // res.cookie('name','samuel',{
   //     // domain: 'localhost'
   //     // path: '/read2'
   // });
   res.cookie('name','xxx',{
       domain: 'aa.com',
       httpOnly: true,
       maxAge: 10*1000
   });
   res.send('ok');
});

app.get('/read',function (req, res) {
   //req.cookie就是req.headers.cookie
   res.send(req.cookies);
});

app.listen(8090);

