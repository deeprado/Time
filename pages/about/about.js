// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      'https://p3a.pstatp.com/weili/l/198948795094138901.jpg',
      'https://p3a.pstatp.com/weili/l/189499179848171758.jpg',
      'https://p3a.pstatp.com/weili/l/201978301815980037.jpg',
      'https://p3a.pstatp.com/weili/l/189481948439380639.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  detail: function(e) {
    var data = e.currentTarget.dataset;
    var url = data.url;
    var title = data.title;
    // wx.navigateTo({
    //   url: '../detail/detail?title=' + title + '&url=' + url
    // })
  }
})