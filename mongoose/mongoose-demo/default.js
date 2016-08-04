/*模式的扩展*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'chenjun',
		trim: true

	},
	time: {
		type: Date,
		default: Date.now,
	}


});
var User = mongoose.model('User', UserSchema);
var user = new User({
	name: '   李海波   '
});
user.save(function(err) {
	if (err) return console.log('保存失败', err);
	console.log(user);
})