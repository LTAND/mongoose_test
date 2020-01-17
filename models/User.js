const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
  name: { 
    type: String
  },
  address: { type: String },
  sex: { 
    type: Number,
    default:1 
  },
  iphone: { type: Number }
})

module.exports = mongoose.model("User", userSchema, "users")