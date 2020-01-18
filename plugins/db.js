module.exports = app=>{
  const mongoose = require("mongoose")
  mongoose.Promise = global.Promise;

  mongoose.connect("mongodb://127.0.0.1:27017/mongoose_test",{useNewUrlParser:true},function(err){
    if(err){
      console.log(err)
      return 
    } 
    console.log("连接数据成功")
  })

}