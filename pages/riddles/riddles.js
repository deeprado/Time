// pages/riddles/riddles.js
var constant = require("../../utils/contant.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    loadMore: false,
    array: [],
    typeId: ['gxmy', 'gxmy', 'aqmy', 'dmmy', 'dimmy', 'symy', 'ysmy', 'njmy', 'zlmy', 'qtmy'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用函数
    this.requestData()
  },
  /**
   * 列表点击事件
   */
  showAnswer: function (e) {
    var data = e.currentTarget.dataset;
    wx.showToast({
      title: data.answer,
      icon: 'success',
      duration: 1000
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page: 1,
    })
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadMore: true,
      page: this.data.page + 1,
    });
    this.requestData()
  },
  /**
     * 请求数据
     */
  requestData: function () {
    this.showLoading();
    // 解决成功回调后 this.setData({}) 错误
    var that = this;
    var typeId = this.data.typeId[Math.floor(Math.random() * 10)];
    wx.request({
      url: constant.riddles,
      data: {
        showapi_appid: '48910',
        showapi_sign: '1ba50b80ca5748c58eb51dde9e0f8336',
        page: this.data.page,
        typeId: typeId,
      },
      success: function (res) {
        //解析json数据
        const content = res.data['showapi_res_body']['pb'];
        const list = content['contentlist'];
        if (that.data.loadMore) {//上拉加载
          //与之前的数组重新生成一个新数组
          const newArray = that.data.array.concat(list);
          //更新 上拉加载状态 数据
          that.setData({
            array: newArray,
            loadMore: false,
          });
        } else {
          //隐藏下拉刷新动画icon
          wx.stopPullDownRefresh();
          //下拉刷新
          that.setData({
            array: list
          });
        }
        //隐藏loadingDialog
        that.hideLoading();
      },
      fail: function () {
        //隐藏loadingDialog
        that.hideLoading();
        console.log(reason);
      }
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
  }

})