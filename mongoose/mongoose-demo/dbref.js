// 数据集合之间的关联
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
	username: String
})

var News = mongoose.model('News', {
	title: String,
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	}
});

var user = new User({
	username: 'chen jun',

})

var news = new News({
	title: 'node js ',
	author: user
});

user.save(function(err) {
	if (err) {
		return console.log('save user failed:', err);
	}

	news.save(function(err) {
		if (err) {
			return console.log('save news failed:', err);
		}

		// 使用 populate() 方法填充数据
		News.findOne().populate('author').exec(function(err, doc) {
			console.log('after populate: ', err, doc);
		});
	});
})