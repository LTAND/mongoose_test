const express = require("express")
const app = express()

const UserModel = require("./models/User")

app.use(express.json())

require("./plugins/db.js")(app)


let dataList = [
  { name: "name111111", password: "124qasd12312", age: 19, sex: 1, address:"深圳市南山区name111111", phone:12312314124},
  { name: "name333333", password: "adasd123123", age: 1, sex: 1, address: "深圳市南山区name333333", phone:12312314124},
  { name: "name444444", password: "123112asda23", age: 70, sex: 2, address: "深圳市南山区name444444", phone:12312314124},
  { name: "name556555", password: "qewqweqwe", age: 19, sex: 1, address: "深圳市南山区name556555", phone:12312314124},
  { name: "name26666", password: "123123", age: 30, sex: 2, address: "深圳市南山区name666666", phone:12312314124},
  { name: "name777777", password: "asdasd", age: 50, sex: 2, address: "深圳市南山区name777777", phone:12312314124}
]

// 1.增加假大量数据
// dataList.forEach(ele => {
//   let item  = new UserModel(ele)
//   item.save()
// });

// 查看所有数据
// UserModel.find({}, function(err, docs){
//   console.log(docs)
// })

// // 选择 a 和 b 字段，排除其他的
// query.select('a b');

// // 排除 c 和 d 字段，选择其他的
// query.select('-c -d');

// 查询
UserModel.find()
.where('age').gte(1).lt(70)
.select("name age").sort('-age').limit(10)
  .exec(function(err, docs){
  console.log(docs)
})

// 使用静态方法
UserModel.findName("name111111", function (err, docs) {
  console.log("findName",docs)
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
});