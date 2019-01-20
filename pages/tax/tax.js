// pages/tax/tax.js
Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('onLoad test');
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  /**
   * 
   */
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var overcutoff = e.detail.value.income
    var result = overcutoff
    console.log(result)
  },
  formReset() {
    console.log('form发生了reset事件')
  }
})