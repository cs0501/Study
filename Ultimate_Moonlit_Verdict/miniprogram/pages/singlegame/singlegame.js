// pages/singlegame/singlegame.js
const db = wx.cloud.database({
    env: 'judgement-0gyr4tda3d15dbe9'
})
const _ = db.command;

var timer;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        diceAddr: ["../../images/dic.gif", "../../images/dice-1.png", "../../images/dice-2.png", "../../images/dice-3.png", "../../images/dice-4.png", "../../images/dice-5.png", "../../images/dice-6.png"],
        dicepAddr:["../../images/dice-p1.png","../../images/dice-p1.png","../../images/dice-p2.png","../../images/dice-p3.png","../../images/dice-p4.png","../../images/dice-p5.png","../../images/dice-p6.png"],
        diceNum: [0, 1, 2, 3, 4, 5, 6],
        diceCount: [0, 0, 0, 0, 0, 0, 0],
        prize:'none',
        level:'Nothing',
        resultIsShow: false,
        disabled: true,
        rulerIsShow: false,
        closeconIsShow:false,
        presentIsShow:false,
        gameoverIsShow:false,
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
        totalpreNum:[0,0,0,0,0,0],
        preNumchange:0,
        playernum:1,
        totalNum:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {


    },

    closeshowresult(){
        this.setData({
            resultIsShow: false
        })
        this.closegame()
    },
    closegame(){
        if(this.data.totalpreNum[0]==0&&this.data.totalpreNum[1]==0&&this.data.totalpreNum[2]==0&&this.data.totalpreNum[3]==0&&this.data.totalpreNum[4]==0&&this.data.totalpreNum[5]==0){
            this.setData({
                gameoverIsShow:true
            })
        }
    },

    setaa: function (x1, x2, x3, x4, x5, x6) {
        this.data.diceCount[x1]++;
        this.data.diceCount[x2]++;
        this.data.diceCount[x3]++;
        this.data.diceCount[x4]++;
        this.data.diceCount[x5]++;
        this.data.diceCount[x6]++;
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
                prize:'六杯红',
                level:'状元'
            })
        }
        else if(this.data.diceCount[1]==6||this.data.diceCount[2]==6||this.data.diceCount[3]==6||this.data.diceCount[5]==6||this.data.diceCount[6]==6){
            this.setData({
                prize:'六杯黑',
                level:'状元'
            })
        }
        else if(this.data.diceCount[4]==4&&this.data.diceCount[1]==2){
            this.setData({
                prize:'状元插金花',
                level:'状元'
            })
        }
        else if(this.data.diceCount[4]==5){
            this.setData({
                prize:'五王',
                level:'状元'
            })
        }
        else if(this.data.diceCount[1]==5||this.data.diceCount[2]==5||this.data.diceCount[3]==5||this.data.diceCount[5]==5||this.data.diceCount[6]==5){
            this.setData({
                prize:'五子登科',
                level:'状元'
            })
        }
        else if(this.data.diceCount[4]==4){
            this.setData({
                prize:'普通状元',
                level:'状元'
            })
        }
        else if(this.data.diceCount[1]==1&&this.data.diceCount[2]==1&&this.data.diceCount[3]==1&&this.data.diceCount[5]==1&&this.data.diceCount[6]==1){
            this.setData({
                prize:'对堂',
                level:'榜眼'
            })
        }
        else if(this.data.diceCount[4]==3){
            this.setData({
                prize:'三红',
                level:'探花'
            })
        }
        else if(this.data.diceCount[1]==4||this.data.diceCount[2]==4||this.data.diceCount[3]==4||this.data.diceCount[5]==4||this.data.diceCount[6]==4){
            this.setData({
                prize:'四进',
                level:'进士'
            })
        }
        else if(this.data.diceCount[4]==2){
            this.setData({
                prize:'二举',
                level:'举人'
            })
        }
        else if(this.data.diceCount[4]==1){
            this.setData({
                prize:'一秀',
                level:'秀才'
            })
        }
        else{
            this.setData({
                level:'Nothing',
                prize:'What a shame!'
            })
        }
        this.getdata1()
        this.getdata2()
        this.getdata3()
        this.getdata4()
        this.getdata5()
        this.getdata6()
        if(this.data.level=='状元'&&this.data.totalpreNum[0]>0){
            this.data.preNumchange=this.data.totalpreNum[0]-1
            db.collection('Presents').doc(wx.getStorageSync('Oneid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
        else if(this.data.level=='榜眼'&&this.data.totalpreNum[1]>0){
            this.data.preNumchange=this.data.totalpreNum[1]-1
            db.collection('Presents').doc(wx.getStorageSync('Twoid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
        else if(this.data.level=='探花'&&this.data.totalpreNum[2]>0){
            this.data.preNumchange=this.data.totalpreNum[2]-1
            db.collection('Presents').doc(wx.getStorageSync('Threeid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
        else if(this.data.level=='进士'&&this.data.totalpreNum[3]>0){
            this.data.preNumchange=this.data.totalpreNum[3]-1
            db.collection('Presents').doc(wx.getStorageSync('Fourid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
        else if(this.data.level=='举人'&&this.data.totalpreNum[4]>0){
            this.data.preNumchange=this.data.totalpreNum[4]-1
            db.collection('Presents').doc(wx.getStorageSync('Fiveid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
        else if(this.data.level=='秀才'&&this.data.totalpreNum[5]>0){
            this.data.preNumchange=this.data.totalpreNum[5]-1
            db.collection('Presents').doc(wx.getStorageSync('Sixid'))
            .update({
                data: {
                    'num': this.data.preNumchange
                }
            })
        }
    },
    verdict() {
        this.getdata1()
        this.getdata2()
        this.getdata3()
        this.getdata4()
        this.getdata5()
        this.getdata6()
        this.data.playernum = this.data.playernum % wx.getStorageSync('gameNumber')+1
        this.setData({
            disabled: false,
        })
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
            that.setaa(x1, x2, x3, x4, x5, x6)
        }, 800)
        var that=this
        timer = setTimeout(function(){
            that.setData({
                resultIsShow: true,
                disabled:true,
                playernum:that.data.playernum
            })
        },1420)
    },
    // 展示以及关闭规则弹窗
    gameruler(){
        this.setData({
            rulerIsShow: true
        })
    },
    closeshowruler(){
        this.setData({
            rulerIsShow: false
        })
    },
    // 展示以及关闭确认关闭游戏界面
    closeconfirm(){
        this.setData({
            closeconIsShow: true
        })
    },
    closeshowclosecon(){
        this.setData({
            closeconIsShow: false
        })
    },
    // 展示及关闭礼物界面
    presentshow(){
        this.setData({
            presentIsShow:true,
        })
        this.getdata1()
        this.getdata2()
        this.getdata3()
        this.getdata4()
        this.getdata5()
        this.getdata6()
    },
    closeshowPre(){
        this.setData({
            presentIsShow:false,
        })
    },
    getdata1() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Oneid')).get({
            success: function (res) {
                that.setData({
                    Onepre: res.data.image,
                    OnepreName: res.data.present,
                    'totalpreNum[0]':res.data.num,
                })
            }
        })
    },
    getdata2() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Twoid')).get({
            success: function (res) {
                that.setData({
                    Twopre: res.data.image,
                    TwopreName: res.data.present,
                    'totalpreNum[1]':res.data.num,
                })
            }
        })
    },
    getdata3() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Threeid')).get({
            success: function (res) {
                that.setData({
                    Threepre: res.data.image,
                    ThreepreName: res.data.present,
                    'totalpreNum[2]':res.data.num,
                })
            }
        })
    },
    getdata4() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Fourid')).get({
            success: function (res) {
                that.setData({
                    Fourpre: res.data.image,
                    FourpreName: res.data.present,
                    'totalpreNum[3]':res.data.num,
                })
            }
        })
    },
    getdata5() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Fiveid')).get({
            success: function (res) {
                that.setData({
                    Fivepre: res.data.image,
                    FivepreName: res.data.present,
                    'totalpreNum[4]':res.data.num,
                })
            }
        })
    },
    getdata6() {
        var that = this
        db.collection('Presents').doc(wx.getStorageSync('Sixid')).get({
            success: function (res) {
                that.setData({
                    Sixpre: res.data.image,
                    SixpreName: res.data.present,
                    'totalpreNum[5]':res.data.num,
                })
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