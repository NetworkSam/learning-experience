// 引入模块
let mongoose = require("mongoose");
mongoose.Promise = Promise;
let ObjectId = mongoose.Schema.Types.ObjectId;

// 连接mongoose数据库
mongoose.connect('mongodb://127.0.0.1/blogs',{
    useMongoClient: true
});
// 定义数据库集合的骨架模型 定义集合中文档的字段属性和类型
// 规定集合中文文档的名称为name age，类型分别是字符串和数字
let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    avatar: String
    //collection可以指定集合的名称
}, {collection: 'user'});
// 定义用户模型
let User = mongoose.model('User',userSchema);
let CategorySchema = new mongoose.Schema({
    name: String,
    //外键就是别的表的主键
    //ObjectId 是主键 _id的类型 这个user属性是一个外键  引用的是User集合的主键
    user: {
        type: ObjectId,
        ref: 'User'
    }
});
let  Category = mongoose.model('Category',CategorySchema);

let ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    //文章的分类，是分类集合的外键
    category: {
      type: ObjectId,
      ref: 'Category'
    },
    user:{
        type: ObjectId,
        ref: 'User'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

let Article = mongoose.model('Article',ArticleSchema);
exports.User = User;
exports.Category = Category;
exports.Article = Article;