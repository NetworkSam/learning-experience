//promise 承诺  -> 永远没有结果 -> 等待   -> 成功 resolve  -> 失败 reject
//Promise 在node中天生支持  构造函数
let fs = require('fs');

function readName (url) {
    return new Promise( (resolve, reject)=> {
        fs.readFile(url, 'utf8', function (err,data) {
            if(err)reject(err);
            resolve(data);
        });
    });
}

//在all中都成功  有一个失败都失败
Promise.all([readName('1.txt'),readName('age.txt')]).then(function ([name,age]) {
    let  school = {
        name, age
    };
    console.log(school);
}).catch(function (err) {
    console.log("读取失败",err);
});
//promise解决了回调的问题 所有异步的代码都可以"同步"的去写 then catch resolve reject all

// readName('./age.txt').then(function (data) {
//     console.log("读取成功",data);
// }).catch(function (err) {
//     console.log('读取失败',err);
// });

//ajax回调漩涡问题



// function buyBag () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if(Math.random()*10>5){
//                 resolve('ok');
//             }else {
//                 reject('err');
//             }
//         },1000);
//     });
// }
//
//
// buyBag().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// });