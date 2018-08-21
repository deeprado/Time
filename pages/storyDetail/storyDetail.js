// pages/storyDetail/storyDetail.js
var constant = require("../../utils/contant.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    text: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      url: options.url,
    })
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.requestData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
       * 请求数据
       */
  requestData: function () {
    this.showLoading();
    // 解决成功回调后 this.setData({}) 错误
    var that = this;
    var data = {
      'showapi_appid': '48910',
      'showapi_sign': '1ba50b80ca5748c58eb51dde9e0f8336',
      'id': that.data.url,
      'page': '1',
    };
    console.log(that.data.url)
    constant.request2(constant.storyDetail, data, function (res) {
      var body = res['showapi_res_body'];
      var text = that.convert(body.text);
      that.setData({
        text: text
      });
      that.hideLoading();
    }, function (reason) {
      //隐藏loadingDialog
      that.hideLoading();
      console.log(reason);
    })
  },
  /**
   * 标题栏等待loading
   */
  showLoading: function () {
    wx.showNavigationBarLoading()
  },
  hideLoading: function () {
    wx.hideNavigationBarLoading()
  },
  /**
   * 将\r\n 替换成<br>
   * 将&nbsp;替换成空格
   */
  convert: function (text) {
    var str = text.replace(/(\r\n)|(\n)/g, '<br>');
    return str.replace(/&nbsp;&nbsp;&nbsp;/gi, '　　')
  }
})