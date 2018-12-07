### [English Documents](https://github.com/azhon/Time/blob/master/README-en.md)

### 效果图　　[动态效果图看这里](https://github.com/azhon/Time/tree/master/gif)

#### 模块一：笑话 — 谜语
<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103221137967.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171105110503361.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103221905030.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103221934080.png" width="300">
#### 模块二：鸡汤
<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222356171.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222414696.png" width="300">
#### 模块三：福利
<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222546175.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222609872.png" width="300">
#### 模块四：关于
<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222733627.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222755612.png" width="300">
#### 模块五：详情
<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222845352.png" width="300">　　<img src="https://github.com/azhon/Time/blob/master/effectImage/20171103222906416.png" width="300">

#### 微信小程序版本：https://github.com/azhon/Time/tree/WeChatApp
> 在微信小程序中搜索 <font color="red">`怡笑院`</font>或者微信扫描下方二维码进入小程序

<img src="https://github.com/azhon/Time/blob/master/effectImage/20171122125331856.jpeg" width="200">

#### app下载体验

Android 下载 | iOS下载 
:---:|:---:
<a target="_blank" href="https://fir.im/p17j"><img src="https://github.com/azhon/Time/blob/master/effectImage/20171106125909580.png" width="160" height="160">
</a>|正在打包中...

#### 关于app
* 使用易源Api(SHOWAPI)
* 开发时使用的版本
```
Environment:
  OS:  macOS Sierra 10.12.6
  Node:  8.4.0
  Yarn:  1.0.0
  npm:  5.5.1
  Watchman:  4.9.0
  Xcode:  Xcode 8.3.3 Build version 8E3004b
  Android Studio:  3.0 AI-171.4408382

Packages: (wanted => installed)
    react: "16.0.0-beta.5",
    react-native: "0.49.5",
    react-navigation: "^1.0.0-beta.15"
    react-native-easy-toast: "^1.0.8",
```

#### 使用到的Library
* [react-navigation](https://reactnavigation.org)
```
$ npm install --save react-navigation
```
* [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast)
```
$ npm install react-native-easy-toast --save
```
#### 遇到的问题：

* TabNavigator嵌套TabNavigator：

```
//第二个TabNavigator需要设置如下属性
//参考Main.js中的代码
animationEnabled: false,

swipeEnabled: false,
```
* [解决React Native中使用TabNavigator时、对tab只设置文字时文字没有垂直居中](http://blog.csdn.net/a_zhon/article/details/78432619) 

