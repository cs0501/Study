// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'judgement-0gyr4tda3d15dbe9'
});

// 云函数入口函数
const db = cloud.database()
exports.main = async (event, context) => {  //传入奖项参数 prize
  return db.collection("Presents").doc("cd045e75615fd37413cdb38e09b88beb").get()
}