### 预定义模式修饰符，对增加的数据进行一些格式化
#### lowervase, uooercase, trim

### Getter 与 Setter 自定义修饰符
#### set 增加数据时，进行格式化
#### get 在实例获取数据时，进行格式化
```javascript
// set
password:{
  type:String,
  set(val) {
    return require('bcrypt').hashSync(val, 10)
  }
},
```

### model的静态方法和实例方法
```javascript
// 添加模型的静态方法
UserSchema.statics.findName = function(name,callback){
  // this --> 当前模型
  this.findOne({"name":name},function(err,docs){
    callback(err, docs)
  }) 
}
// 使用静态方法
UserModel.findName("name111111", function (err, docs) {
  console.log("findName",docs)
})

UserSchema.methods.print = function(){
  // this --> 当前模型
  console.log("实例方法")
}

// 使用实例方法
let user = new UserModel();
user.print()
```

### 校验参数
#### required
#### match, 增加的数据必须符合match(正则)的规则
#### max, min, Number
#### maxlength:  20, minlength: 10 - Srting
#### enum:["a", "b", "c"] 必须满足枚举值 - String
#### 自定义校验器
```javascript
validate:function(val){
  // true -- 验证通过  false -- 验证失败
  return val.length>=10   
}
```

### 多表关联
#### aggregate populate


```javascript
Model.deleteMany()
Model.deleteOne()
Model.find()

Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findByIdAndDelete()

Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndUpdate()

Model.replaceOne()
Model.updateMany()
Model.updateOne()
```