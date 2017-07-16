let express = require('express');
let app = express();
let path = require('path');
let users = [
    {
        name: 'samuel1',
        id:1
    },
    {
        name: 'samuel2',
        id:2
    },
    {
        name: 'samuel3',
        id:3
    },
    {
        name: 'samuel4',
        id:4
    }
];

//设置模版引擎 ejs handlebar jade
app.set('view engine', 'html');
//设置模版的存放目录
//如果存放模块的文件夹名称叫views 这句话可以不写  要是不叫views  这句行代码必须要写
//resolve 从当前路径触发  解析路径
app.set('views',path.resolve('views'));

app.engine( '.html', require( 'ejs' ).__express );
app.get('/',function (req, res) {
    //render渲染，绘制express为请求对象res添加了一个render方法
    //render 第一个参数放模版的相对路径 所以不要以/开头  也不要以.开头
    //  .代表的是view的根目录 .指的是模版根目录
    //1、读取模块存放根目录下面的index.ejs文件内容
    //2、用数据对象把模版里的内容替换掉
    //3、把得到的HTML内容发送给客户端
    //渲染就是把静态的模版和动态的数据对象进行混合生成HTML代码的过程
    res.render('index',{title:'首页',pargragh:'sfsdfdsjfsdfgsdf'});
});

app.get('/user',function (req, res) {
    let id = req.params.id;
    // let user = users.find(item=>item.id === +id);
    // console.log(user);
    res.render('user',{users});
});

app.listen(8088);

