var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
	name: {
		type: String,
		// 预定义的修饰符
		trim: true
	},
	blog: {
		type: String,
		// 自定义的 setter 修饰符
		set: function(url) {
			if (!url) {
				return url;
			} else if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
				return 'http://' + url;
			}
		}
	}

});
var user = new User({
	name: '  chenjun  ',
	blog: 'www.cj365.cc'
});

user.save(function(err) {
	if (err) return console.log('保存失败', err);
	console.log(user);
})