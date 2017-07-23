//mongoose可以实现对数据库集合的增删改查
//引入mongoose模块
var mongoose = require('mongoose');
//mongoose自己的promise库已经废弃了 需要提供你的Promise库
mongoose.Promise = Promise;

//连接数据库  数据库的名字可以随意写  不需要先创建
// mongodb://IP:端口号/数据库名称
//返回连接对象
mongoose.connect('mongodb://127.0.0.1/samuel',{
    useMongoClient: true
});

//创建数据库的骨架模型  规定集合文档中的字段名称和字段类型
// 规定集合中文文档的名称为name age，类型分别是字符串和数字
let userSchema = new mongoose.Schema({
    name: String,
    age: Number
    //collection可以指定集合的名称
}, {collection: 'user'});

//定义模型 2个参数表示定义一个模型  1个参数表示获取一个模型
let User = mongoose.model('User',userSchema);

//把这个对象保存到数据库中  读写数据库都是异步的  非常的耗时
// User.create({
//     name: 'gina',
//     age: '8',
//     home: 'beijing'
//     //err 错误对象  doc是保存成功的文档对象
// }, function (err, doc) {
//     console.log(err, doc);
//     //__v: 表示版本号
//     //主键
// });

//如果传入参数的数据类型不匹配  mongodb会尝试转换数据类型  转换成功会存入数据库
//新存入对象
//
// //文档删除  参数是文档对象  就是条件
// User.remove({name:'samuel9'} ,function (err, result) {
//     if(err){
//         console.log(err);
//     }else {
//         // {ok: 1, n: 0}  ok=1表示删除成功  n=0 表示删除的条数
//         console.log(result.result);
//     }
// });


//修改和查询
// let users = [];
// for(let i= 1; i <=10; i++ ){
//     users.push({name: `samuel${i}`,age:i});
// }
//
//
// // create方法可以接收一个数组 doc是保存成功之后返回的数组
// User.create(users,function (err, docs) {
//     console.log(docs);
// });


//数据库更新  update  更新条件  更新后的结果
// User.update({name: 'samuel10'},{ $inc:{age:1} },function (err, docs) {
//     console.log(docs);
// });

//查询数据  数据操作 九分查找  一份修改
// 参数里放的是条件
// 参数里放的是要现实或排除显示的字段  字段名：1表示值显示此子段 0表示排除此字段 其它都展示

// User.find({$or: [{name:'samuel10'},{name:'samuel9'}]}, {name: 1}, {limit: 10}, function(err, docs){
//     console.log(docs);
// });


// User.find({name: 'samuel10', age:11},function(err, docs){
//     console.log(docs);
// });

// User.find({age: {$gte:8}},null ,{limit: 100}, function(err, docs){
//     console.log(docs);
// });

//findOne  也就说当查询到即一个符合条件的数据时，将停止继续查询，并返回查询结果 语法
//findaById

let pageNum = 2;//当前页码
let pageSize  = 3; //每页条数
// skip跳过执行的条数'
//limit指定返回的醉的条数

//sort 指定排序的字段  age:1 表示降序  －1表示升序
User.find()
    .sort({age:1})
    .skip( (pageNum-1)*pageSize )
    .limit(pageSize)
    .exec(function (err, docs) {
        console.log(err);
        console.log(docs);
    });




