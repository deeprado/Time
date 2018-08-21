// pages/story/story.js
var constant = require("../../utils/contant.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    loadMore: false,
    array: [],
    type: ['dp', 'xy', 'yy', 'jl', 'mj', 'ly', 'yc', 'neihanguigushi'],
  },
  // dp=短篇
  // cp=长篇
  // xy=校园
  // yy=医院
  // jl=家里
  // mj=民间
  // ly=灵异
  // yc=原创
  // neihanguigushi=内涵

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
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
   * 详情
   */
  toDetails: function (e) {
    var data = e.currentTarget.dataset;
    var url = data.item.link;
    var title = data.item.title;
    wx.navigateTo({
      url: '../storyDetail/storyDetail?title=' + title + '&url=' + url
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
    // 参数
    var type = that.data.type;
    var data = {
      'showapi_appid': '48910',
      'showapi_sign': '1ba50b80ca5748c58eb51dde9e0f8336',
      'page': that.data.page,
      'type': type[Math.floor(Math.random() * type.length)],
    };
    constant.request2(constant.story, data, function (res) {
      var body = res['showapi_res_body'];
      var pageBean = body['pagebean'];
      var list = pageBean['contentlist'];
      that.substringContent(list);
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
   * 截取内容的一部分字符串
   */
  substringContent: function (list) {
    for (var i = 0; i < list.length; i++) {
      var desc = list[i].desc;
      if (desc.length >= 55) {
        list[i].desc = desc.substring(0, 55) + "..."
      }
    }
  }
})