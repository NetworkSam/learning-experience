
let express = require('express');
let cookieParer = require('cookie-parser');
let app = express();
app.use(cookieParer());

app.get('/visit',function (req, res) {
    let visit = req.cookies.visit;
    if(visit){
        visit = parseInt(visit) +1
    }else {
        visit = 1;
    }
    res.cookie('visit',visit,{
        httpOnly: true
    });
    res.send(`欢迎你的第${visit}次访问!`);
});

app.listen(9000);