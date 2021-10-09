const db = wx.cloud.database({
    env: 'judgement-0gyr4tda3d15dbe9'
})
const _ = db.command;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        Onepre: [],
        OnepreName: [],
        Twopre: [],
        TwopreName: [],
        Threepre: [],
        ThreepreName: [],
        Fourpre: [],
        FourpreName: [],
        Fivepre: [],
        FivepreName: [],
        Sixpre: [],
        SixpreName: [],
        totalPrizeNum:[0,0,0,0,0,0],
        imgpath: "../../images/testback.png",
        present: " ",
        PreIsShow: [false, false, false, false, false, false],
        addOnepre: "../../images/addimg.png",
        totalNum:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 更新状元礼品总数
    onePrizeNum(res) {
        this.setData({
            'totalPrizeNum[0]': res.detail.value,
        })
        db.collection('Presents').doc(wx.getStorageSync('Oneid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[0]
                }
            })
    },
    // 添加状元礼物
    addNumberOne() {
        this.setData({
            'PreIsShow[0]': true,
        })
    },
    canceladdOne() {
        this.setData({
            'PreIsShow[0]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addOnepresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getOnepre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddOne() {
        this.setData({
            'PreIsShow[0]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Oneid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata1()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata1() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Oneid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Onepre: res.data.image,
                    OnepreName: res.data.present,
                })
            }
        })
    },
    // 添加状元礼物结束

    // 更新榜眼礼品总数
    twoPrizeNum(res) {
        this.setData({
            'totalPrizeNum[1]': res.detail.value,
        })
        db.collection('Presents').doc(wx.getStorageSync('Twoid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[1]
                }
            })
    },
    // 添加榜眼礼物
    addNumberTwo() {
        this.setData({
            'PreIsShow[1]': true,
        })
    },
    canceladdTwo() {
        this.setData({
            'PreIsShow[1]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addTwopresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getTwopre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddTwo() {
        this.setData({
            'PreIsShow[1]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Twoid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata2()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata2() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Twoid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Twopre: res.data.image,
                    TwopreName: res.data.present,
                })
            }
        })
    },
    // 添加榜眼礼物结束

    // 更新探花礼品总数
    threePrizeNum(res) {
        this.setData({
            'totalPrizeNum[2]': res.detail.value
        })
        db.collection('Presents').doc(wx.getStorageSync('Threeid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[2]
                }
            })
    },
    // 添加探花礼物
    addNumberThree() {
        this.setData({
            'PreIsShow[2]': true
        })
    },
    canceladdThree() {
        this.setData({
            'PreIsShow[2]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addThreepresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getThreepre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddThree() {
        this.setData({
            'PreIsShow[2]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Threeid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata3()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata3() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Threeid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Threepre: res.data.image,
                    ThreepreName: res.data.present,
                })
            }
        })
    },
    // 添加探花礼物结束

    // 更新进士礼品总数
    fourPrizeNum(res) {
        this.setData({
            'totalPrizeNum[3]': res.detail.value
        })
        db.collection('Presents').doc(wx.getStorageSync('Fourid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[3]
                }
            })
    },
    // 添加进士礼物
    addNumberFour() {
        this.setData({
            'PreIsShow[3]': true
        })
    },
    canceladdFour() {
        this.setData({
            'PreIsShow[3]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addFourpresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getFourpre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddFour() {
        this.setData({
            'PreIsShow[3]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Fourid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata4()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata4() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Fourid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Fourpre: res.data.image,
                    FourpreName: res.data.present,
                })
            }
        })
    },
    // 添加进士礼物结束

    // 更新举人礼品总数
    fivePrizeNum(res) {
        this.setData({
            'totalPrizeNum[4]': res.detail.value
        })
        db.collection('Presents').doc(wx.getStorageSync('Fiveid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[4]
                }
            })
    },
    // 添加举人礼物
    addNumberFive() {
        this.setData({
            'PreIsShow[4]': true
        })
    },
    canceladdFive() {
        this.setData({
            'PreIsShow[4]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addFivepresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getFivepre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddFive() {
        this.setData({
            'PreIsShow[4]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Fiveid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata5()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata5() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Fiveid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Fivepre: res.data.image,
                    FivepreName: res.data.present,
                })
            }
        })
    },
    // 添加举人礼物结束    

    // 更新秀才礼品总数
    sixPrizeNum(res) {
        this.setData({
            'totalPrizeNum[5]': res.detail.value
        })
        db.collection('Presents').doc(wx.getStorageSync('Sixid'))
            .update({
                data: {
                    'num': this.data.totalPrizeNum[5]
                }
            })
    },
    // 添加秀才礼物
    addNumberSix() {
        this.setData({
            'PreIsShow[5]': true
        })
    },
    canceladdSix() {
        this.setData({
            'PreIsShow[5]': false,
            addOnepre: "../../images/addimg.png"
        })
    },
    addSixpresent() {
        var that = this
        wx.chooseImage({
            sizeType: ['compressed'],
            success: function (res) {
                var filePath = res.tempFilePaths[0]
                console.log(filePath)
                that.setData({
                    addOnepre: filePath
                })
            }
        })
    },
    getSixpre(res) {
        this.setData({
            present: res.detail.value
        })
    },
    confirmaddSix() {
        this.setData({
            'PreIsShow[5]': false,
        })
        db.collection('Presents').doc(wx.getStorageSync('Sixid'))
            .update({
                data: {
                    'present': _.push(this.data.present),
                    'image': _.push(this.data.addOnepre),
                }
            }).then(res => {
                console.log(res)
            })
        var that = this
        var timer = setTimeout(function () {
            that.getdata6()
            that.setData({
                addOnepre: "../../images/addimg.png"
            })
        }, 500)
    },
    getdata6() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Sixid')).get({
            success: function (res) {
                console.log(res.data)
                that.setData({
                    Sixpre: res.data.image,
                    SixpreName: res.data.present,
                })
            }
        })
    },
    // 添加秀才礼物结束   


  

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