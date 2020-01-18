const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema({
  name: { 
    type: String,
    match:/^name(.*)/i
  },
  password:{
    type:String,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  },
  age:{
    type:Number,
    min:0,
    max:150,
  },
  address: { type: String },
  sex: { 
    type: Number,
    default:1 
  },
  phone: { type: Number }
})

// 添加模型的静态方法
UserSchema.statics.findName = function(name,callback){
  // this --> 当前模型
  this.findOne({"name":name},function(err,docs){
    callback(err, docs)
  }) 
}

module.exports = mongoose.model("User", UserSchema, "users")