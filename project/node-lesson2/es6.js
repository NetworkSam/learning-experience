//es6 继承
class Person{
    constructor(name){
        this.name = name;
    }
    //静态方法 只有父类才能调用
    static a(){
        console.log("static");
    }
    //原型上的方法
    drink(){
        console.log("你好");
    }
}

let person = new Person("Samuel");
person.drink();
Person.a();

class Girl extends Person{
    constructor(name, age){
        super(name, age);
        this.age = age;
    }
}

let girl = new Girl('Sam',26);
console.log(girl.name);
girl.drink();