# qiankun4angular7


# 一个基于single-spa-angular 和qiankun 的微前端测试例子


## 1、主应用：qiankun-main 
基于qiankun (https://github.com/umijs/qiankun) 封装的主页面

运行步骤：
* cd qiankun-main 
* npm install
* npm run start:multiple

访问地址：http://localhost:7099


## 2、微应用：child-my-app
基于single-spa-angular（https://github.com/single-spa/single-spa-angular） 封装的angular7工程

使用single-spa-angular:build作为builder启动,监听端口4208

运行步骤：
* cd child-my-app 
* npm install
* npm run serve:single-spa:my-app


## 3、微应用：child-my-app-custom
基于single-spa-angular（https://github.com/single-spa/single-spa-angular） 封装的angular7工程

使用@angular-builders/custom-webpack:browser作为builder启动,监听端口4206

运行步骤：
* cd child-my-app-custom 
* npm install
* npm run serve:single-spa:my-app

## 相关版本信息
* qiankun 版本：2.0.15
* single-spa-angular 版本：3.6.0


