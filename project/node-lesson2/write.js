

let fs = require('fs');


//1.写的默认编码格式是utf-8编码
//2.没有时会创建 写时会自动生成 写入前会清空文件

// let txt = fs.writeFileSync('samuel.txt',1);

// fs.appendFileSync('samuel.txt',1);


//如果是对象 需要转成json串写入
fs.writeFileSync('samuel.txt',JSON
    .stringify({name:1}));

//undefined
// console.log(txt);

fs.writeFile('samuel.txt',JSON
    .stringify({name:2}),function (err,data) {
    console.log(arguments);
});








