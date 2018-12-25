// pages/seeBig/seeBig.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      url: options.url,
    })
  },
  saveImage: function() {
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.downloadImage()
            },
            fail: function() {
              wx.showToast({
                title: '请允许使用相册权限',
                icon: 'none'
              })
            }
          })
        } else {
          that.downloadImage()
        }
      }
    })
  },
  /**
   * 下载图片
   */
  downloadImage: function() {
    var url = this.data.url;
    wx.showLoading({
      title: '正在下载图片',
      mask: true
    });
    wx.getImageInfo({
      src: url,
      success(res) {
        var path = res.path;
        //保存图片到本地
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: function() {
            wx.hideLoading();
            wx.showToast({
              title: '保存成功'
            });
          },
          fail: function(res) {
            wx.hideLoading();
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        })
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})