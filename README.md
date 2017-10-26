# react-native-login

## 使用typescript开发react-native项目，参照QQ登陆页面做的一个demo
### 一、说明
 
	整个工程使用typescript开发，gulp打包。主要适配Android机器，可用于构建ts-rn类似项目。建议使用vscode打开，由于使用了typescript开发，弱类型的javascript代码变成了强类型语言，编写起来语法更严格，vscode提示、自动补全功能让开发人员尽情享受编码带来的乐趣。

### 二、运行

我们启动npm命令行，在项目的根目录使用如下命令安装模块。
	
	$ npm install --registry=https://registry.npm.taobao.org
	
使用gulp编译ts文件：
	
	$ gulp ts:build
	
（在开发环境下可以使用gulp watch来监听打包）

在android平台上运行：

	$ react-native run-android
  
如果这一步提示Command run-Android unrecognized. Make sure that you have run npm install and that you are inside a React-native project. 错误，请使用下面的命令后在重新运行：

	$ yarn add react-native-cli
  
### 效果图预览

 ![image](https://github.com/lylwanan/react-native-login/blob/master/imgs/result.jpg)
 
