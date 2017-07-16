let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let users = [
    {
        username: 'samuel',
        password:'samuel',
        id:1
    },
    {
        username: 'gina',
        password:'gina',
        id:2
    }
];

http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url,true);
    // console.log(pathname, query);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname === '/user'){
        // let date = new Date().toLocaleString();
        // res.end(JSON.stringify({date})); //string or Buffer

        //如果query中有id 就获取一个  没有就获取全部
        let id = query.id;
        switch (req.method){ //req.method
            case 'GET':
                if(id){
                    //获取一个
                    res.end(JSON.stringify(users.filter(item=> item.id == id)));
                }else {
                    //获取全部
                    res.end(JSON.stringify(users))
                }
                break;
            case 'POST':
                //获取请求体中的数据
                let str = '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                    let user = JSON.parse(str); //获取要添加的用户
                    user.id =users.length>0?users[users.length-1].id+1:1;
                    users.push(user);
                    res.end(JSON.stringify(users));
                });
                break;
            case 'PUT':
                req.on('data',function (data) {
                    let newDate =JSON.parse(data);
                    users.forEach((item)=> {
                        // console.log(item.id,newDate.id);
                        if(item.id == newDate.id){
                            item.username = newDate.username;
                            item.password = newDate.password;
                            item.id = newDate.id;
                        }
                    } );
                });
                req.on('end',function () {
                    res.end(JSON.stringify(users));
                });
                break;
            case 'DELETE':
                req.on('data',function (data) {
                    users = users.filter((item)=> item.id != JSON.parse(data).id );
                });
                req.on('end',function () {
                    users.forEach((item,index)=>{
                        item.id = index+1;
                    });
                    res.end(JSON.stringify(users));
                });
                break;
            default:
                res.end('INTERFACE NOT EXITS');
                break;
        }
    }else {
        let flag = fs.existsSync('.'+pathname);
        if(flag){
            // let  type = pathname.match(/\.\w+$/)[0];
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else {
            res.statusCode = 404;
            res.end("404 Not Found");
        }
    }
}).listen(8000);