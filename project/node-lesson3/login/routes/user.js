let express = require('express');
//返回一个路由中间件
let router = express.Router();

//定义一个数组存放所有的user
let users = [

];

//当请求路径是/user/signup的时候会执行第二个参数的函数
router.get('/signup', function (req, res) {
    //渲染一个模版  返回一个空白的注册单
    //1、参数是模版的相对路径
    // res.send('注册get');
    // res.render('user/signup','');
    //引用了bodyParser
    // let user = req.body;
    // users.push(user);
    res.render('user/signup','');
});

router.post('/signup', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item=>{
        return item.username == user.username;
    });

    if(oldUser){
        res.redirect('/user/signup')
    } else {
        users.push(user);
        res.redirect('/user/signin');
    }

    console.log(users,'1');

});

router.get('/signin', function (req, res) {


    res.render('user/signin','');
});

router.post('/signin', function (req, res) {

    let user = req.body;

    console.log(user);
    let oldUser = users.find(item=>{
        return item.username == user.username && item.password == user.password;
    });


    console.log('olduser',oldUser);

    if(oldUser){
        res.redirect('/user/welcome');
    } else {
        res.redirect('/user/signup');
    }
});

router.get('/welcome',function (req, res) {
    res.render('user/welcome','');
});

module.exports = router;

