

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var ResellerSchema = new mongoose.Schema({
  address: String
});

// 普通的中间件
ResellerSchema.post('save', function(next){
  console.log('this is ResellerSchema post save middleware');
  next();
});

// 可以并行执行的中间件
ResellerSchema.pre('save', true, function(next, done){
  console.log('this is ResellerSchema pre save middleware');
  next();
  // done 需要传给并行执行的方法或者过程，当该并行执行的方法或过程完成执行之后，调用 done
  // 以通知 mongoose 执行完成。
  done();
});

var Reseller = mongoose.model('Reseller', ResellerSchema);

var reseller = new Reseller({
  address: '101st, People Read'
});

reseller.save();