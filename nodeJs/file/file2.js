var fs = require('fs');
/****************打开文件***********************/
console.log("准备打开文件！");
fs.open('test1.txt', 'rs+', function (err, data) {
	if (err) {
		console.log(err)
		return
	}
	console.log('文件打开成功！')
})
/*******************获取文件信息************************/
console.log('获取文件信息！');
fs.stat('test.txt', function (err, stats) {
	if (err) {
		console.log(err)
		return
	}
	console.log(stats)
	console.log("读取文件信息成功！");
	console.log("是否为文件(isFile) ? " + stats.isFile());
	console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
	console.log(stats.dev)
})