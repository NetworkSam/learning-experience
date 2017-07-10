- git node基础
- express koa mongodb
- 博客 聊天室 爬虫


- git 分布式  可以管理代码,合并代码
- svn 集中式 速度慢,不停的备份


## git下载地址
http://git­scm.com

git安装选择在window下使用git并且在window

##mac下
新增两个工具  item2 oh-my-zsh

## 告诉git 你是谁 (否则无法提交)
git init

git管理项目不能嵌套

ls -a查看所以文件

touch index.txt  创建文件,可以创建.开头的文件

vim index.txt

-i 插入
- wq q q! 保存退出
cat index.txt 查看文件

工作区(默认的文件存在工作区)  红色

暂存区/过渡区  git add

历史区/版本库 git commit -m

##添加到暂存区为绿色

##添加到历史区

##查看状态
git status

##查看提交日志
git log


##查看区别
git diff 默认是工作区和暂存区比较

git diff --cached 暂存去和历史区比较

git diff master 工作区和历史区比较


## 移除本次的add


git reset HEAD index.txt


##从暂存区覆盖工作区

git checkout 文件名

##回滚  将工作区 暂存区 历史区用同一个版本

git reset --hard 版本号


git branch dev  创建一个分支

git branch -D dev 删除一个分支  删除分支不能在当前分支,切换到别的分支


## 创建并切换分支 git branch -b 分支名


只有将内容提交到某个分支上,这个内容才会归属到哪个分支,别的分支就看不到这个内容了.


## 合并分支

git merge 分支名  快速转发方式 fast forward


## 提交

第一次提交不能使用这个命令

git commit -a -m '信息'


> 产生冲突需要手动,删除不需要的信息,重新提交一次.

##提交到远程仓库

- git init

- touch .gitignore 写上忽略的文件
- 创建需要提交的文件  空文件不会被提交

- 添加到暂存区

- 添加到历史区

> 保证github是可用状态  github上的邮箱带有感叹号,则是不可用的.需要邮箱验证.


git remote add origin git@github.com:NetworkSam/git-learning.git
git push -u origin master

写了-u  下次直接就使用git push


## 查看远程仓库地址
git remote -v
















