//将任意进制转化成10进制  parseInt

//将任意进制转化成任意进制 toString

console.log(parseInt('1111',2));
console.log( 0xff.toString(10) );

//base64 转图片 转文字 没有加密功能
//一个汉字 多少位 3*8 = 6*4

let buffHZ = new Buffer("程");

console.log(buffHZ);
console.log(0xe7.toString(2));
console.log(0xa8.toString(2));
console.log(0x8b.toString(2));

console.log( parseInt('111001',2) );
console.log( parseInt('111010',2) );
console.log( parseInt('100010',2) );
console.log( parseInt('001011',2) );

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+= str.toLowerCase();
str+='01234567890';
str+='+/';


console.log('str-Base64',str[57]+str[58]+str[34]+str[11]);

