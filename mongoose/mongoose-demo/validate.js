// 数据校验
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Order = mongoose.model('Order', {
	count: {
		type: Number,
		required: true,
		max: 1000,
		min: 5
	},
	status: {
		type: String,
		enum: ['created', 'success', 'failed']
	},
	desc: {
		type: String,
		match: /book/g, //正则验证
		validate: function(desc) { // 预定义验证
			return desc.length > 10;
		}
	}
})
var order = new Order();
order.count = 1000;
order.status = 'success';
order.desc = 'this is a book';
order.save(function(err) {
	if (err) return console.log('保存失败', err);
	console.log('保存成功' + order);
})