
let fs = require('fs');
/**
 *
 * @param source
 * @param target
 * @returns {*}
 */

function copySync(source, target) {
    //1.先读取source, 在写入到target
    //2.readFileSync writeFileSync
    if(!fs.existsSync(source) ){
        console.log('source file not exits');
        return;
    }

    if( target === undefined ) {
        console.log('source file not exits');
        return;
    }

    var Temp = fs.readFileSync(source,'utf8');
    fs.writeFileSync(target,Temp);

}

// copySync('11.txt','2222.txt');

/**
 *
 * @param source
 * @param target
 * @param callback
 */

function copy(source, target, callback){
    //1.先读取source, 在写入到target
    //2.readFile writeFiles
    fs.readFile(source,function (err, data) {
        if(err) callback(err);
        fs.writeFile(target,data,function (err) {
            callback(err);
        });
    });

}

// copy('1.txt', '3333.txt',function (err) {
//     console.log(err);
// });

//虽然改成写了异步  但仍然解决不了大文件读写的问题 会淹没内存 希望的是边读边写 gulp就是基于流的
// 可独流readStream  可写流 writeStream  他是有顺序  有起点和终点  不关心文件的整体内容  只关心读到的内容

//读取时文件必须存在
// highWaterMark 默认64k, 分段读取
// let  rs = fs.createReadStream('./1.txt',{highWaterMark:1});
// var bufferArr = [];
// //默认这种模式  叫非流动模式 -> 流动模式
// rs.on('data',function (data) {
//     //node会不停的 rs.emit("data",data);
//     console.log(data);//疯狂的触发
//     bufferArr.push(data);
//     //控制读取速度
//     rs.pause();
//     setTimeout(function () {
//         rs.resume();
//     },1000);
// });
//
// rs.on('end',function () {//当这个文件读去完成后 就会触发end事件
//     console.log(Buffer.concat(bufferArr).toString());
// });
//
// rs.on('err',function (err) {
//     console.log(err);
// });

//1. 如果文件不存则会创建
//2.写默认都是utf-8
//默认每次读取最大16k,读时64k  就占用了可用的内存
let ws = fs.createWriteStream('write.txt',{highWaterMark:1});

//write是异步的,还有返回值
let flag = ws.write('samuel',function () {//写入的类型是字符串和Buffer类型
    console.log('异步');
});

console.log('flag',flag);//flag只是一个条件,可以告诉,当前是否需要继续读取么,限制读的速率,读是疯狂的读,让读取暂停

ws.end();//强制没写入的全部写入,并关闭


// console.log(ws);










