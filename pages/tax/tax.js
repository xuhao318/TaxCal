// pages/tax/tax.js
Page({
  data: {
    income: 0,
    insurance: 0,
    education: 0,
    mortgageinterest: 0,
    parents: 0,
    bonus: 0,
    cutoff: 5000
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

  calculatetax: function () {
    
  }
});