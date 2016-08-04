var fs = require('fs');
/****************读取文件数据***********************/
// 异步读取
fs.readFile('test.txt', function (err, data) {
	if (err) {
		console.log(err.stack);

	}
	console.log("异步读取: "+data.toString());
})
// 同步读取
var data = fs.readFileSync('test.txt');
console.log("同步读取: "+data.toString());
console.log('\n')
