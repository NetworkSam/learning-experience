let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');

//服务器不识别../路径
// let mine = {
//     '.js':'application/javascript',
//     '.css': 'text/css',
//     '.html': 'text/html'
// };
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url,true);
    // console.log(url.parse(req.url,true));

    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
        //pipe方法会自动的调用可写流的write和end方法
    }else if(pathname === '/clock'){
        let date = new Date().toLocaleString();
        res.end(JSON.stringify({date})); //string or Buffer  

    }else {
        let flag = fs.existsSync('.'+pathname);
        if(flag){
            let  type = pathname.match(/\.\w+$/)[0];
            // console.log(type);
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else {
            res.statusCode = 404;
            res.end("404 Not Found");
        }
    }

    // if(){
    //     res.setHeader('Content-Type','text/css;charset=utf8');
    //     fs.createReadStream('./index.css').pipe(res);
    // }else if(pathname === '/index.js'){
    //     res.setHeader('Content-Type','application/javascript;charset=utf8');
    //     fs.createReadStream('./index.js').pipe(res);
    // }else {
    //     res.statusCode = 404;
    //     res.end();
    // }

    // res.setHeader('Content-Type','text/html;charset=utf8');
    // let result= fs.readFile('./index.html',function (err,data) {
    //    if(err){
    //        console.log(err);
    //        return;
    //    }
    //    res.end(data);
    // });
    // res.end();

}).listen(5000);