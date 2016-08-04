var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
	name: {
		type: String,
		trim: true,
		default: 'jone',
	},
	blog: {
		type: String,
		get: function(url) {
			if (!url) return url;
			if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://'))
				return 'http://' + url;
		}
	}
})
var user = new User({
	blog: 'www.cj365.cc'
});
user.save(function(err) {
	if (err) return console.log('保存失败', err);
	console.log('User blog:',user.blog);
})
