// pages/tax/tax.js
Page({
  data: {
    isAnnually: false,
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthindex: 0,
    income: 0,
    insurance: 0,
    education: 0,
    childeducation: 0,
    continueeducation: 0,
    mortgageinterest: 0,
    parents: 0,
    bonus: 0,
    cutoff: 5000,
    result: 0,
    showresult: false
  },

  monthchange: function(e){
    this.setData({
      monthindex: e.detail.value
    })
  },

  income: function (e) {
    console.log(e.detail.value)
    this.setData({
      income: e.detail.value
    })
  },

  insurance: function (e) {
    console.log(e.detail.value)
    this.setData({
      insurance: e.detail.value
    })
  },

  education: function (e) {
    console.log(e.detail.value)
    this.setData({
      education: e.detail.value
    })
  },

  continueeducation: function(e){
    this.setData({
      continueeducation: e.detail.value
    })
  },

  childeducation: function(e){
    this.setData({
      childeducation: e.detail.value
    })
  },

  mortgageinterest: function (e) {
    console.log(e.detail.value)
    this.setData({
      mortgageinterest: e.detail.value
    })
  },

  parents: function (e) {
    console.log(e.detail.value)
    this.setData({
      parents: e.detail.value
    })
  },

  bonus: function (e) {
    console.log(e.detail.value)
    this.setData({
      bonus: e.detail.value
    })
  },

  savecurrent: function (){
    console.log("保存")
  },

  calculatetax: function () {
    this.setData({
      showresult: true
    })
    try {
      wx.setStorageSync('key', 'value')
    } catch (e) { }
  }
});