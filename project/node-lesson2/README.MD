## Nodejs学习 第二课

- 文件模块 自己叠的 引入模块 ../ ./
- 第三方模块 需要下载  引用时不需要加  ./ ../ node_modules
- 内置模块 核心模块  nodejs提供的

```
commonjs 如何导出模块  如何创建模块  如何引用模块
```

## Util

##继承
- 1.全部继承

```
Chind.prototype = new Parent;

extends + super
```

- 2.只继承私有方法

```
function Child(){
    Parent.call(this);
}
```

- 3.只继承公有

```
Child.prototype.__proto__ = Parent.prototype;
Child.prototype = Object.create(Parent.prototype);
object.setProtoTypeOf(Child.prototype.Parent.prototype);
```
## 发布订阅模式

- on emit

- 订阅 维护关系 一对多的关系 让绑定的事情依次触发


> 主要依赖的就是回调函数  失恋->哭,购物 {失恋: [哭, 购物]} {男人有钱: [购车, 变坏]}

//转化成ES6的写法

## Buffer

- buffer是暂存输入内容的内存
- node为了操作二进制运用而生的类型 默认展示成16进制 可以和字符串无条件转化
- 字符串在node中 只支持utf-8
- 一个汉子utf8有几个字节  3个字节

//16进制最大值ff  代表10进制 255


- 老师博客

```
http://blog.fullstackjavascript.cn/post/promise.html#toc-c71
```





















