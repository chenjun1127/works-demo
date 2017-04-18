## git 使用教程：（windows平台下）

#### 一、版本库的建立、添加、提交

##### 1、本地目录创建一个版本库

```javascript
mkdir git 
cd git 
```
##### 2、通过git init 命令把这个目录变成Git可以管理的仓库

```javascript
git init
```

瞬间Git就把仓库建好了，可以发现当前目录下多了一个.git的目录（默认是隐藏的）

##### 3、在当前目录下创建文件readme.txt，使用 git add 命令将文件添加到仓库

```javascript
git add readme.txt
```

##### 4、用命令git commit告诉Git，把文件提交到仓库

```javascript
git commit -m "write a readme file"
```
单解释一下git commit命令，-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

#### 二、版本库的控制（查看、回退，修改）

* git log命令显示从最近到最远的提交日志；
* git status命令可以让我们时刻掌握仓库当前的状态；
* git diff顾名思义就是查看difference，查看具体的修改；
* git checkout -- file可以丢弃工作区的修改：
* git rm命令用于删除一个文件；
* git add -A  提交所有变化；
* git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)；
* git add .   提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件；
* git rm -r --cached some-directory 删除缓冲

#### 三、分支

分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”。在其他分支上进行开发，完成后再将它们合并到主分支上。
创建一个叫做“new_branch”的分支，并切换过去：
```javascript
git checkout -b new_branch
```
切换回主分支：
```javascript
git checkout master
```
再把新建的分支删掉：
```javascript
git branch -d new_branch
```
除非你将分支推送到远端仓库，不然该分支就是不为他人所见的：
```javascript
git push origin <branch>
```

#### 四、更新与合并

要更新你的本地仓库至最新改动，执行：
```javascript
git pull
```
以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。
要合并其他分支到你的当前分支（例如 master），执行：
```javascript
git merge <branch>
```

#### 五、添加远程库

首先，登陆GitHub，然后，在右上角找到“Create a new repository”按钮，创建一个新的仓库：
目前，在GitHub上的库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。
```javascript
git remote add origin "地址"
```
把本地库的内容推送到远程，用git push命令，实际上是把当前分支master推送到远程。

由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

关联后，使用命令git push -u origin master第一次推送master分支的所有内容；
此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

#### 六、从远程库克隆

之前讲了先有本地库，后有远程库的时候，如何关联远程库。
现在，假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。

首先，登陆GitHub，创建一个新的仓库，名字叫gitskills：
勾选Initialize this repository with a README，这样GitHub会自动为我们创建一个README.md文件。创建完毕后，可以看到README.md文件：
现在，远程库已经准备好了，下一步是用命令git clone克隆一个本地库：
注意把Git库的地址换成你自己的，然后进入gitskills目录看看，已经有README.md文件了。

Tips:忽略特殊文件；在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

**忽略规则示例**

（1）规则：
```javascript
fd1/*
```
说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；

（2）规则：
```javascript
/fd1/*
```
说明：忽略根目录下的 /fd1/ 目录的全部内容；

（3）规则：
```javascript
/*
!.gitignore
!/fw/bin/
!/fw/sf/
```
说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；

教程参考：http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000

#### 七、常见问题

**github的SSH怎么配置？**

a 、设置Git的user name和email： 
```javascript
git config --global user.name "jone"
git config --global user.email "kiss19861127@126.com"
```

b、生成SSH密钥过程：

1)、查看是否已经有了ssh密钥：cd ~/.ssh
如果没有密钥则不会有此文件夹，有则备份删除。

2)、生成密钥：
$ ssh-keygen -t rsa -C “kiss19861127@126.com”
按3个回车，密码为空。

Your identification has been saved in /home/tekkub/.ssh/id_rsa.
Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
The key fingerprint is:
………………

最后得到了两个文件：id_rsa和id_rsa.pub

c、添加密钥到ssh：ssh-add 文件名
需要之前输入密码。

d、在github上添加ssh密钥，这要添加的是“id_rsa.pub”里面的公钥。
打开https://github.com/ ，登陆账户，然后添加ssh。

**github提交报错**

有的时候，当github远程仓库文件被修改了，而本地文件也做了修改，当提交本地文件的时候，就会出现这样一个错误
```javascript
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'xxx.git'
```
这个错误是由于远程仓库文件被修改，而本地又没有更新，所以导致不一致，解决方法是先更新一下，执行命令：
```javascript
git pull --rebase origin master
```
此时，再执行命令:
```javascript
git push origin master
```
即可成功把本地的文件都上传到github上面去了。
