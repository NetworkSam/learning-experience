//核心模块 inherits js中的继承
let util = require('util');

//原型继承  call继承

//1.只继承私有的
//2.只继承公有的
//3.两者都有

function Person(name){
    this.name = name;
}

Person.prototype.drink = "喝水";

// function Girl(name,age){
//     Person.call(this,name,age); //相当于让父类在子类中执行 将this改变成子类  父类的私有属性就被会被继承
// }

//让girl的原型 指向person的实例 new父类时不能传递参数
// Girl.prototype = new Person();


//只继承公有的
// Girl.prototype.__proto__ = Person.prototype;
//
// Girl.prototype = Object.create(Person.prototype);

// function create(proto){
//     function Fn(){} //创建一个空函数 没有私有 也没有公有
//     Fn.prototype = proto; //让这个函数的公有属性 指向person的公有
//     return new Fn();  //new出来的实例只有Person的公有属性
// }

//es6 extenda class super

function Girl(name,age){

}

//只继承公有属性
util.inherits(Girl, Person);

//类型判断 typeOf instanceof Object.prototype.toString.call();

console.log(util.isArray({}));


















