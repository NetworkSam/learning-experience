let express = require('express');
let router = express.Router();
let {Category,Article}  = require('../model.js');

//增加文章  修改文章  删除文章  查看文章列表
//article/add
router.get('/add',function (req, res) {
    let user =req.body;
    Category.find({user:req.session.user._id},function (err, categories) {
        res.render('article/add', {categories});
    });
});

router.post('/add',function (req, res) {
   let article = req.body;
   article.user = req.session.user._id;
   //利用模型的create方法把请求题对象保存到数据库中
    Article.create(article,function (err, docs) {
       if(err){
           req.flash('err',err.toString());
           res.redirect('back');
       }else {
           req.flash('success','发表成功！');
           //如果发表成功则跳回首页
           res.redirect('/');
       }
   });
});

router.get('/detail/:id', function(req, res) {
    let _id = req.params.id;
    // console.log(_id);
    Article.findById(_id).populate('category').populate('user').exec(function (err, article) {
        // console.log(err);
        res.render('article/detail',{article});
    });
});

router.get('/delete/:id', function (req, res) {
    let _id = req.params.id
    console.log('啊似懂非懂舒服舒服受到粉丝的发',_id);
    Article.remove({_id},function (err, doc) {
        if(err){
            req.flash('error', err.toString());
            req.redirect('back');
        }else {
            req.flash('success','删除文章成功！');
            res.redirect('/');
        }
    });
});


router.get('/update/:id', function (req, res) {
    let _id = req.params.id;
    Category.find({user:req.session.user._id}, function (err, categories) {
        Article.findById(_id).populate('category').exec(function (err, article) {
            if(err){

            }else {
                console.log(categories, article);
                res.render('article/add',{categories, article});
            }
        });
    });
});

router.post('/update/:id', function (req, res) {
    let article = req.body;
    let _id = req.params.id;
    Article.update({_id},article,function (err, doc) {
       res.redirect('/article/detail/'+_id);
    });
});

module.exports = router;