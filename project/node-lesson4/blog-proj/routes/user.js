let express = require('express');
let router = express.Router();

//解析上传文件的中间件
let multer = require('multer');
//调用此multer方法 传入配置参数 在参数中指定上传后的文件的保存位置
//此次的.表示的当前目录  它指的是server.js的所在目录 而非user.js所在目录
let upload = multer({
    dest:'./public'
});

let { User } = require('../model.js');

router.get('/signup',function(req, res, next){
  // res.send('注册');
  res.render('user/signup.html');
});

router.post('/signup',upload.single('avatar'),function(req, res, next){
  // res.send('提交注册表单');
  // 先得到bodyParser中间件解析得到的user对象
  let user = req.body;
  user.avatar = `/${req.file.filename}`;
  //找数据库里有没有跟自己用户名相同的用户
  User.findOne({username: user.username}, function (err, olduser) {
     if(err){
       res.redirect('back');
     }if(olduser){
          req.flash('error','用户名已经存在');
          res.redirect('back');
      }else {
         User.create(user, function (err, docs) {
             if(err){
                 res.redirect('back');
             }else{
                 req.flash('success','注册成功');
                 res.redirect('/user/signin');
             }
         })
     }
  });
});

router.get('/signin',function(req, res){
  res.render('user/signin.html',{title: '登录'});
});

//提交登录表单
router.post('/signin',function(req, res){
    let user = req.body;
    User.findOne({username: user.username}, function (err, olduser) {
        if(err){
            req.flash('error',err.toString());
            res.redirect('back');
        }if(olduser){
            if(olduser.password == user.password ){
                req.flash('success','登录成功');
                //res.redirect('back');
                req.session.user = olduser;
                res.redirect('/');
            }else {
                req.flash('error','密码错误');
                res.redirect('back');
            }
        }else {
            req.flash('error','用户不存在！');
            res.redirect('back');
        }
    });
});

router.get('/signout',function(req, res){
    req.session.user = null;
    res.redirect('/user/signin');
});

module.exports = router;