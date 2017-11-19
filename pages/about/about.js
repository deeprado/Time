// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      'http://oweq6in8r.bkt.clouddn.com/Color%20Burst%201.jpg',
      'http://oweq6in8r.bkt.clouddn.com/liuliangqiu.jpg',
      'http://oweq6in8r.bkt.clouddn.com/Earth%20and%20Moon.jpg',
      'http://imgstore.cdn.sogou.com/app/a/100540002/593589.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  detail: function (e) {
    var data = e.currentTarget.dataset;
    var url = data.url;
    var title = data.title;
    // wx.navigateTo({
    //   url: '../detail/detail?title=' + title + '&url=' + url
    // })
  }
})