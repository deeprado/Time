### 效果图
#### 模块一：笑话 -谜语
<img src="http://img.blog.csdn.net/20171103221137967" width="300">　　<img src="http://img.blog.csdn.net/20171103221604995" width="300">　　<img src="http://img.blog.csdn.net/20171103221905030" width="300">　　<img src="http://img.blog.csdn.net/20171103221934080" width="300">

#### 关于app
* 使用易源Api(SHOWAPI)接口

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