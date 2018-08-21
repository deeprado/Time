/**
 * 易源Api（笑话大全）
 */
var jokeUrl = 'https://route.showapi.com/341-1';
/**
 * 易源Api（励志语录）
 */
var quotations = 'https://route.showapi.com/1211-1'
/**
 * 易源Api（鬼故事）
 */
var story = 'https://route.showapi.com/955-1'
/**
 * 易源Api（鬼故事详情）
 */
var storyDetail = 'https://route.showapi.com/955-2'


/**
 * 网络请求
 */
function request(url, page, count, success, fail) {
  if (typeof success != 'function' || typeof fail != 'function') {
    return
  }
  wx.request({
    url: url,
    // 参数
    data: {
      maxResult: '10',
      showapi_appid: '48910',
      showapi_sign: '1ba50b80ca5748c58eb51dde9e0f8336',
      page: page,
      count: count,
    },
    success: function (res) {
      if (res.data.showapi_res_code != 0) {
        fail('Api不可用,请联系开发者')
        console.log(res.data.showapi_res_error)
      } else {
        success(res.data)
      }
    },
    fail: function () {
      fail('网络错误')
    }
  })
}
/**
 * 网络请求
 */
function request2(url, data, success, fail) {
  if (typeof success != 'function' || typeof fail != 'function') {
    return
  }
  wx.request({
    url: url,
    // 参数
    data: data,
    success: function (res) {
      if (res.data.showapi_res_code != 0) {
        fail('Api不可用,请联系开发者')
        console.log(res.data.showapi_res_error)
      } else {
        success(res.data)
      }
    },
    fail: function () {
      fail('网络错误')
    }
  })
}

//导出我们定义好的变量
module.exports = {
  jokeUrl: jokeUrl,
  story: story,
  storyDetail: storyDetail,
  quotations: quotations,
  request: request,
  request2: request2,
};