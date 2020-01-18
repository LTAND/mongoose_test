const express = require("express")
const app = express()
const UserModel = require("./models/user.js")

require("./plugins/db.js")(app)


app.use(express.json())
// 增
UserModel.create({
  name: "myname1",
  address: "南山区",
  sex:2,
  iphone:12321321313
},function(err,docs){
  if(err){console.err(err);return;}
    console.log("create",docs);
})


// 修改
UserModel.updateOne({ name: "myname" },{ name:"updateOneName"},function(err,docs){
  if (err) { console.err(err);return;}
  console.log("updateOne",docs)
})

// 查
UserModel.find({ name:"updateOneName"},function(err,docs){
  if (err) { console.err(err);return;}
  console.log("find",docs)
})

// 删
UserModel.deleteOne({ name: "women1222"},function(err,docs){
  if (err) { console.err(err);return;}
  console.log("deleteOne", docs)
})

// 清空
// UserModel.drop()


app.listen(3000,()=>{
  console.log("localhost:3000")
})




