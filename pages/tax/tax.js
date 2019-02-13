// pages/tax/tax.js
Page({
  data: {
    income: 0,
    cutoff: 5000
  },

  incomeinput: function (e) {
    console.log(e.detail.value)
    this.setData({
      income: e.detail.value
    })
  },

  calculatetax: function () {
    var result = this.data.income
    console.log(result);
  }
});