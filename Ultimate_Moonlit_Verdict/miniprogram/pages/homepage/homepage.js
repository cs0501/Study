// pages/homepage/homepage.js
const db = wx.cloud.database({
    env: 'judgement-0gyr4tda3d15dbe9'
})
const _ = db.command;


Page({

    /**
     * 页面的初始数据
     */
    data: {
        singleGameIsShow: false,
        gameNumber:0,
    },

    getGameNumber(res){
        this.setData({
            gameNumber:res.detail.value
        })
        wx.setStorageSync('gameNumber', this.data.gameNumber)
        console.log(this.data.gameNumber)
    },

    showsingleGame(){
        this.setData({
            singleGameIsShow: true,
        })
    },
    closeshowsingleGame(){
        this.setData({
            singleGameIsShow: false,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 1
            },
            success: res =>{
              wx.setStorageSync('Oneid', res._id)
            }
          })
          db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 2
            },
            success: res =>{
              wx.setStorageSync('Twoid', res._id)
            }
          })
          db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 4
            },
            success: res =>{
              wx.setStorageSync('Threeid', res._id)
            }
          })
          db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 8
            },
            success: res =>{
              wx.setStorageSync('Fourid', res._id)
            }
          })
          db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 16
            },
            success: res =>{
              wx.setStorageSync('Fiveid', res._id)
            }
          })
          db.collection('Presents').add({
            data: {
              'image':  [],
              'present': [],
              'num': 32
            },
            success: res =>{
              wx.setStorageSync('Sixid', res._id)
            }
          })
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})