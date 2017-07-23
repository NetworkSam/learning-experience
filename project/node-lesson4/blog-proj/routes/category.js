let express = require('express');
let router = express.Router();
let {Category} = require('../model');

router.use('/list',function(req, res, next){
  //查询出所以的分类列表
  Category.find({user:req.session.user._id},function (err, categories) {
      res.render('category/list.html',{
          categories,
          title:'文章分类管理'
      });
  });
});

router.get('/add',function(req, res){
    res.render('category/add.html');
});

router.post('/add',function(req, res){
    // res.render('category/add.html');
    let category = req.body;
    category.user = req.session.user._id;

    //把分类对象保存到数据中
    Category.findOne({name:category.name},function (err, categories) {
      if(err){
          req.flash('error', err.toString());
          res.redirect('back');
      }if(categories){
            req.flash('error', '分类已存在,请重新输入！');
            res.redirect('back');
      }else {
          Category.create(category, function (err, docs) {
            if(err) {
                req.flash('error', err.toString());
                res.redirect('back');
            }else {
              req.flash('success','添加分类成功');
              res.redirect('/category/list');
            }
          });
      }

    });



});

router.get('/delete/:id',function(req, res){
    let _id = req.params.id;
    console.log(req.params);
    Category.remove({_id}, function(err, result){
        if(err) {
            req.flash('error', err.toString());
            res.redirect('back');
        } else {
            req.flash('success','删除分类成功');
            res.redirect('back');
        }
    });
});

module.exports = router;

