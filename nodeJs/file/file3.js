/*************写入文件******************/
var fs = require('fs')
fs.writeFile('writeFile.txt', '我是被写入的数据', function (err, data) {
	if (err) {
		return console.log(err)
	}
	console.log("数据写入成功！");
	console.log("--------我是分割线-------------")
	console.log("异步读取写入的数据！");
	fs.readFile('test.txt', function (err, data) {
		if (err) {
			return console.log(err)
		}
		console.log(data.toString())
	})
})
