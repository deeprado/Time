// pages/joke/joke.js
var constant = require("../../utils/contant.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    loadMore: false,
    array: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //调用函数
    this.requestData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.setData({
      page: 1,
    })
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      loadMore: true,
      page: this.data.page + 1,
    });
    this.requestData()
  },

  /**
   * 查看大图
   */
  seeBig: function(data) {
    var item = data.currentTarget.dataset.item;
    var url = item.url;
    wx.navigateTo({
      url: '../seeBig/seeBig?url=' + url 
    })
  },
  /**
   * 请求数据
   */
  requestData: function() {
    this.showLoading();
    // 解决成功回调后 this.setData({}) 错误
    var that = this;
    wx.request({
      url: "https://gank.io/api/data/福利/10/" + that.data.page,
      success: function(res) {
        var list = res.data['results'];
        if (that.data.loadMore) { //上拉加载
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
      fail: function() {
        //隐藏loadingDialog
        that.hideLoading();
        console.log(reason);
      }
    })
  },
  /**
   * 标题栏等待loading
   */
  showLoading: function() {
    wx.showNavigationBarLoading()
  },
  hideLoading: function() {
    wx.hideNavigationBarLoading()
  }

})