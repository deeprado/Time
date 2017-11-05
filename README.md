### [中文文档](https://github.com/azhon/Time/blob/master/README-zh.md)

### Renderings　　[Gif renderings to see here](https://github.com/azhon/Time/tree/master/gif)

#### Module one：joke — riddle
<img src="http://img.blog.csdn.net/20171103221137967" width="300">　　<img src="http://img.blog.csdn.net/20171105110503361" width="300">　　<img src="http://img.blog.csdn.net/20171103221905030" width="300">　　<img src="http://img.blog.csdn.net/20171103221934080" width="300">
#### Module two：chicken soup
<img src="http://img.blog.csdn.net/20171103222356171" width="300">　　<img src="http://img.blog.csdn.net/20171103222414696" width="300">
#### Module three：welfare
<img src="http://img.blog.csdn.net/20171103222546175" width="300">　　<img src="http://img.blog.csdn.net/20171103222609872" width="300">
#### Module four：about
<img src="http://img.blog.csdn.net/20171103222733627" width="300">　　<img src="http://img.blog.csdn.net/20171103222755612" width="300">
#### Module five：details
<img src="http://img.blog.csdn.net/20171103222845352" width="300">　　<img src="http://img.blog.csdn.net/20171103222906416" width="300">

#### app download experience

Android Download | iOS Download 
:---:|:---:
<a target="_blank" href="https://fir.im/jd3t"><img src="http://img.blog.csdn.net/20171104212319712" width="160" height="160">
</a>|Being packaged...

#### about app
* use SHOWAPI(易源) Api
* Development of the version used
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

#### Use of the library
* [react-navigation](https://reactnavigation.org)
```
$ npm install --save react-navigation
```
* [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast)
```
$ npm install react-native-easy-toast --save
```
#### Problems encountered：

* TabNavigator Nested TabNavigator：

```
//The second TabNavigator need to set the following properties
//See the code in Main.js
animationEnabled: false,

swipeEnabled: false,
```
* [When using TabNavigator in React Native, text is not centered vertically when text is set to tab](http://blog.csdn.net/a_zhon/article/details/78432619) 