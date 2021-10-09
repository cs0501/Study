// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'judgement-0gyr4tda3d15dbe9'
});
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    db.collection('Presents').doc("cd045e75615fd37413cdb38e09b88beb").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 1
        }
    }),

    db.collection('Presents').doc("14139e12615fd43911ab0065629931aa").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 2
        }
    }),

    db.collection('Presents').doc("14139e12615fd46211ab048a6aff1910").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 4
        }
    }),

    db.collection('Presents').doc("2d44d6c2615fd48c11d1aab551035fa5").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 8
        }
    }),

    db.collection('Presents').doc("cd045e75615fd4be13cddb3368c118bc").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 16
        }
    }),

    db.collection('Presents').doc("14139e12615fd4fc11ab11e301140874").update({
        data:{
            'image.$[]': [],
            'present.$[]': [],
            'num': 32
        }
    })
}