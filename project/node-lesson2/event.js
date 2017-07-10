//发布订阅模式
function Man(){
    this._events = {};
}
Man.prototype.on = function(eventName, callback){
    if(this._events[eventName]){ //第二次
        this._events[eventName].push(callback);
    }else{ //第一次 {'有钱':[buyCar]}
        this._events[eventName] = [callback];
    }
};

Man.prototype.once = function (eventName, cb) { //先绑定
    function one () {//触发one函数  调用原有执行的函数
        cb.apply(this, arguments);
        this.removeEvent(eventName,one);
    }
    this.on(eventName,one);
    one.l = cb;
};

//声明式forEach forIn 的区别  钩子函数
let arr = [...[1,2,3],...[4,5,6]];
Man.prototype.emit = function(eventName,...args){//除了第一个,剩下的部分组成数组
    //在参数中是剩余运算符  还可以用作展开运算
    // console.log(args);
    if(this._events[eventName]){
        this._events[eventName].forEach((cb)=>{
            // cb.apply(this,args);
            cb.call(this,...args);
        });
    }else{
        console.log("事件不存在");
        return;
    }
};
Man.prototype.removeEvent = function (eventName,cb) {
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(item=> {
            return item!=cb && item.l != cb;
        });
    }
};

let man = new Man();
function buyCar(who,who1){ console.log("购车to",who + ' ' + who1); }
function buyBag(who,who1){ console.log("买包to",who + ' ' + who1); }
function buyBag1(who,who1){ console.log("1买包to",who + ' ' + who1); }

//once 只触发一次
man.once('有钱',buyCar);
man.once('有钱',buyBag);
// man.once('有钱',buyBag1);
// man.on('有钱',buyBag);


// man.emit('有钱',"妹纸","妹纸1");
man.removeEvent('有钱',buyBag);
man.removeEvent('有钱',buyCar);
// man.emit('有钱',"妹纸","妹纸1");

man.emit('有钱',"妹纸","妹纸1");
