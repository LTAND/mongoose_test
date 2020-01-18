const express = require("express")
const app = express()
const port = 3000

const OrderModel = require("./models/order")
const OrderItemModel = require("./models/order_item")

require("./plugins/db.js")(app)

function insertData(){
  let orderData = [
    { order_id: 1, uid: 10, trande_no:111,  all_price: 100, all_num: 2},
    { order_id: 2, uid: 7, trande_no:222,  all_price: 90, all_num: 2},
    { order_id: 3, uid: 9, trande_no:333,  all_price: 12000, all_num: 6},
  ]
  
  let orderItemData = [
    { order_id: 1, title:"商品鼠标1", price:50, num:1},
    { order_id: 1, title:"商品鼠标2", price:50, num:1},
    { order_id: 1, title:"商品鼠标3", price:0, num:1},
    { order_id: 2, title:"牛奶", price:50, num:1},
    { order_id: 2, title:"酸奶", price:40, num:1},
  ]

  orderData.forEach(ele => {
    let order = new OrderModel(ele)
    order.save()
  });
  
  orderItemData.forEach(ele => {
    let orderItem = new OrderItemModel(ele)
    orderItem.save()
  });
}
// 1.插入假数据
// insertData()

// 2.关联
OrderModel.aggregate([
  {
    $lookup:{
      from:"orderitems",   // 文档名
      localField:"order_id", 
      foreignField:"order_id",
      as:"items"  // 字段别名
    }
  },
  {
  $match: {
    all_price: {$gt: 10,$lte: 100}}
  }
])
.exec(function (err, docs) {
  console.log(docs)
  console.log(JSON.stringify(docs))
})


app.listen(port,function(){
  console.log(`localhost:${port}`)
})