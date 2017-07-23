let express = require('express');
router = express.Router();
let { Article } = require('../model.js');

router.use('/',function(req, res){
  // res.send('首页');
    Article.find({}).populate('user').populate('category').exec(function(err, articles){
        console.log(articles);
        res.render('index.html',{articles});
    });
});

module.exports = router;