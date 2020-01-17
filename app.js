const express = require("express")
const app = express()

const UserModel = require("./models/User")

app.use(express.json())

require("./plugins/db.js")(app)


let user = new UserModel({
  name: "women1222",
  address: "南山区",
  sex:2,
  iphone:146466
})
user.save(function(err,doc){
  if(err){
    console.log(err)
    return
  }else{
    console.log("u",doc)
  }
})

UserModel.find({ name:"women1222"},function(err,docs){
  if(err){console.log(err);return;}
  console.log("docs",docs)
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
});