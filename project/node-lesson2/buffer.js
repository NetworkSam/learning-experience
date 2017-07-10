//声明buffer 固定大小  buffer和数组非常像  有索引 slice
var  buffer1 = new Buffer(100);
//长度
buffer1.fill(0);
console.log(buffer1);

// 通过数组
var buffer2 = new Buffer([16,17,18]); //超出对256取模,加256
console.log(buffer2);

//字符串创建
var buffer3 = new Buffer("samuel");
console.log(buffer3.toString());
//以前三种方式都是固定大小

// copy concat
var buf1 = new Buffer('samuelcheng');

var buf2 = new Buffer('Gina');

console.log(buf1.length);//长度是字节的长度
var bigBuffer = new Buffer(20);

//targetBuffer 目标buffer targetStart 目标开始, sourceStart, 源的开始soruceEnd源的结束
//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

buf1.copy(bigBuffer,0,0,11);
buf2.copy(bigBuffer,buf1.length,0,buf2.length);

console.log(bigBuffer.toString());

//slice 数组的slice 截取 返回的是新数组??? 深拷贝 浅拷贝
var arr = [1,2,3];
var A  = [arr,4,5];  //递归循环拷贝

// var newArr = A.slice();//浅拷贝
// arr[0] = 100;
//var newArr = JSON.parse(JSON.stringify(A));//深拷贝  缺点json中不识别函数

let newArr = [];
Object.assign(newArr,A); //浅拷贝es中 $.extend
arr[0] = 100;
console.log(A,newArr);

var buffer0 = new Buffer([1,2,3]); //buffer中放的是 内存地址[ [],[],[] ]
let newBuffer = buffer0.slice();
newBuffer[0] = 100;

console.log('newBuffer',newBuffer);
var buf111 = new Buffer("ABC");
var buf222 = new Buffer("DEF");
var buf333 = new Buffer("GHI");
var buf444 = new Buffer("JKL");

//模拟一个concat方法 myConcat
// var newBuffer1234 = Buffer.concat([buf111, buf222, buf333, buf444]);
Buffer.myConcat = function (list,totalLen) {
    //1.先判断是否传入totalLen,如果没传计算总长度  typeOf
    //2.创建一个新的Buffer
    //3.循环数组将每一项copy进新的大Buffer
    //4.截取有效长度

    //1.
    var lenTemp = 0,targetStart = 0;
    if(typeof totalLen == 'undefined'){
        list.forEach ( (item) => {lenTemp += item.length;});
    }else {
        lenTemp = totalLen;
    }
    var newBuf = new Buffer(lenTemp);//2
    list.forEach(function (item) {
        item.copy(newBuf,targetStart,0,item.length);
        targetStart+= item.length;
    });
    return newBuf.slice(0,targetStart);
};

var newBuffer0000 = Buffer.myConcat([buf111, buf222, buf333, buf444]);
console.log('newBuffer1234',newBuffer0000.toString());
