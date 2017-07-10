let fs = require('fs');

//64k  16k  4:1
let count = 0;
function copy (source, target) {
    //每次读取一次,一次读取4b,每次写入只能写入一个
    let rs = fs.createReadStream(source, {highWaterMark:4});
    let ws = fs.createWriteStream(target, {highWaterMark:1});
    //先读取一次写,如果写不下,此时暂停读取
    //写入完成后恢复读取
    //最后关闭读和写的文件
    rs.pipe(ws);//可读流的方法pipe 管道 异步 读一点写一点 保证不淹没可用内存
}

copy('age.txt','age.write1.txt');

let path = require('path');
//path 内置模块 resolve 解析 join
//给相对 会返回一个绝对路径
console.log(path.resolve('dist'));
console.log(path.join(__dirname,'dist'));
