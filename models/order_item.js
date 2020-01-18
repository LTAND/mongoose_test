const mongoose = require("mongoose")

let OrerItemSchema = new mongoose.Schema({
  order_id:{
    type:Number
  },
  title:{
    type:String
  },
  price:{
    type:Number
  },
  num:{
    type:Number
  }
})

module.exports = mongoose.model("OrderItem", OrerItemSchema)