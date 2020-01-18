const mongoose = require("mongoose")

let OrerSchema = new mongoose.Schema({
  order_id: {
    type: Number
  },
  uid: {
    type: Number
  },
  trande_no: {
    type: Number
  },
  all_price: {
    type: Number
  },
  all_num: {
    type: Number
  }
})

module.exports = mongoose.model("Order", OrerSchema)