
// fs file system 文件系统

let fs = require('fs');
let EventEmitter = require('events');
let myEvent  = new EventEmitter();

//fs里的方法 同步 异步
//读取内容必须存在,不存在则报错
//读取内容默认都是buffer类型


//同步读取文件 缺点:效率底下 不能并发进行

// var txt = fs.readFileSync('1.txt','utf8');
// var age = fs.readFileSync('./age.txt','utf8');
// let school = {txt,age};
// console.log(school);

//error-first
let school = {},index = 0;

function Output () {
    //判断对象里有几个属性,将对象转化成数组
    if(Object.keys(school).length ==2){
        console.log(school);
    }
}

myEvent.on('outPut',Output);

// function printData () {
//     if(school.name != undefined && school.age != undefined){
//         console.log(school);
//     }
// }
fs.readFile('1.txt','utf8',function (err,data) {
    if(err){
        return;
    }
    school.name = data;
    index++;
    myEvent.emit('outPut');
});

fs.readFile('age.txt','utf8',function (err,data) {
    if(err){
        return;
    }
    school.age = data;
    index++;
    myEvent.emit('outPut');
});

//promise 承诺  -> 永远没有结果 -> 等待   -> 成功 resolve  -> 失败 reject
