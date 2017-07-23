## 初始化

```
npm init -y  或者  npm  init -f
```

## 安装依赖的模块
```
npm install express -S

npm install cookie-parser -S

npm install body-parser -S

npm install express-session -S

npm install connect-mongo -S

npm install connect-flash -S

npm install multer -S

npm install ejs -S

npm install mongoose -S

npm install  debug -S

npm install bootstrap -S

```

## 设计路由

## 用户路由
|请求方式｜路劲|功能
|:----|:----|:----|
|GET|/user/signup|注册|
|POST|/user/signup|提交注册表单|
|GET|/user/signin|登录|
|POST|/user/signin|提交登录表单|
|GET|/user/signout|退出|

## 分类路由
|请求方式｜路径｜功能｜
|:----|:----|:----|
|GET|/category/list|查看分类列表|
|GET|/category/add|新增分类|
|GET|/category/delete|删除分类|

## 设计数据库

## 用户模型
|字段名｜字段类型｜
|:----|:----|
|username|用户名|
|password|密码|
|email|邮箱|
|avatar|头像|


## 上传文件
1. 增加一个'type=file';
2. 给表单增加一个属性 enctype="multipart/form-data";

## 上传到服务器

 scp filename username@remotehost:remotedirectory

