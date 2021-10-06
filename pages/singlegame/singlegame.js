// pages/singlegame/singlegame.js

var timer;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        diceAddr: ["../../images/dic.gif", "../../images/dice-1.png", "../../images/dice-2.png", "../../images/dice-3.png", "../../images/dice-4.png", "../../images/dice-5.png", "../../images/dice-6.png"],
        diceNum: [0, 1, 2, 3, 4, 5, 6],
        diceCount: [0, 0, 0, 0, 0, 0, 0],
        prize:'none'
    },

    setaa: function (x1, x2, x3, x4, x5, x6) {
        this.data.diceCount[x1]++;
        this.data.diceCount[x2]++;
        this.data.diceCount[x3]++;
        this.data.diceCount[x4]++;
        this.data.diceCount[x5]++;
        this.data.diceCount[x6]++;
        console.log(this.data.diceCount)
        this.setData({
            'diceNum[1]': x1,
            'diceNum[2]': x2,
            'diceNum[3]': x3,
            'diceNum[4]': x4,
            'diceNum[5]': x5,
            'diceNum[6]': x6,
        })
        if(this.data.diceCount[4]==6){
            this.setData({
                prize:'六杯红'
            })
        }
        else if(this.data.diceCount[1]==6||this.data.diceCount[2]==6||this.data.diceCount[3]==6||this.data.diceCount[5]==6||this.data.diceCount[6]==6){
            this.setData({
                prize:'六杯黑'
            })
        }
        else if(this.data.diceCount[4]==4&&this.data.diceCount[1]==2){
            this.setData({
                prize:'状元插金花'
            })
        }
        else if(this.data.diceCount[4]==5){
            this.setData({
                prize:'五王'
            })
        }
        else if(this.data.diceCount[1]==5||this.data.diceCount[2]==5||this.data.diceCount[3]==5||this.data.diceCount[5]==5||this.data.diceCount[6]==5){
            this.setData({
                prize:'五子登科'
            })
        }
        else if(this.data.diceCount[4]==4){
            this.setData({
                prize:'状元'
            })
        }
        else if(this.data.diceCount[1]==1&&this.data.diceCount[2]==1&&this.data.diceCount[3]==1&&this.data.diceCount[5]==1&&this.data.diceCount[6]==1){
            this.setData({
                prize:'对堂'
            })
        }
        else if(this.data.diceCount[4]==3){
            this.setData({
                prize:'三红'
            })
        }
        else if(this.data.diceCount[1]==4||this.data.diceCount[2]==4||this.data.diceCount[3]==4||this.data.diceCount[5]==4||this.data.diceCount[6]==4){
            this.setData({
                prize:'四进'
            })
        }
        else if(this.data.diceCount[4]==2){
            this.setData({
                prize:'二举'
            })
        }
        else if(this.data.diceCount[4]==1){
            this.setData({
                prize:'一秀'
            })
        }
        else{
            this.setData({
                prize:'What a shame!'
            })
        }
    },

    verdict() {
        for(let i=1;i<=6;i++){
            this.data.diceCount[i]=0
        }
        this.setData({
            'diceNum[1]': 0,
            'diceNum[2]': 0,
            'diceNum[3]': 0,
            'diceNum[4]': 0,
            'diceNum[5]': 0,
            'diceNum[6]': 0,
        })
        var that = this
        var x1 = (Math.random() * 600).toFixed(0) % 6 + 1
        var x2 = (Math.random() * 600).toFixed(0) % 6 + 1
        var x3 = (Math.random() * 600).toFixed(0) % 6 + 1
        var x4 = (Math.random() * 600).toFixed(0) % 6 + 1
        var x5 = (Math.random() * 600).toFixed(0) % 6 + 1
        var x6 = (Math.random() * 600).toFixed(0) % 6 + 1
        timer = setTimeout(function () {
            console.log(x1, x2, x3, x4, x5, x6)
            that.setaa(x1, x2, x3, x4, x5, x6)
        }, 800)
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})