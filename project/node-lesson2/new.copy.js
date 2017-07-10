let fs = require('fs');
//64k  16k  4:1
let count = 0;
function copy (source, target) {
    //每次读取一次,一次读取4b,每次写入只能写入一个
    let rs = fs.createReadStream(source, {highWaterMark:4});
    let ws = fs.createWriteStream(target, {highWaterMark:1});
    //先读取一次写,如果写不下,此时暂停读取
    rs.on('data',function (data) {
        let flag = ws.write(data);
        if(!flag) rs.pause();//如果写不进去了,就暂停读取
    });

    //写入完成后恢复读取
    ws.on('drain',function () {
        //将要写入的内容全部完成,才会触发事件drain
        count++;
        console.log('执行次数:', count);
        rs.resume();
    });

    //最后关闭读和写的文件
    rs.on('end',function () {
        ws.end();
    });
}

copy('age.txt','age.write.txt');
