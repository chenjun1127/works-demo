var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var BookSchema = new mongoose.Schema({
	name: String,
	isbin: Number,
})
// 自定义的静态方法
BookSchema.statics.findByIsbin = function(isbin, callback) {
	this.findOne({isbin: isbin},function(err, doc) {
		callback(err, doc)
	})
}
// 自定义的实例方法

BookSchema.methods.print=function(){
	console.log('Book Infomation:' + '\n Title:' + this.name + '\n isbin:' + this.isbin);
}

var Book = mongoose.model('Book', BookSchema);
var book = new Book({
	name: 'javascript程序设计',
	isbin: 98100,
});
book.save(function(err) {
	if (err) {
		return console.log('save error:' + err)
	};
	// 调用方法
	Book.findByIsbin(98100, function(err, doc) {
		console.log('findByIsbin,err,doc:' + err + doc)
	});
	book.print();
})