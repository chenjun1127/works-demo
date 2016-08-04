/* 
	管道流
	管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。 
*/
var fs=require('fs')
var readStream=fs.createReadStream('test.txt');
var writeStream=fs.createWriteStream('test2.txt') 
// 管道读写操作
// 读取 test.txt 文件内容，并将内容写入到 test2.txt 文件中
readStream.pipe(writeStream);
// 读取test2.txt;
fs.readFile('test2.txt',function(err,data){
	if(err){
		console.log(err.stack) 
		return
	}
	console.log(data.toString())
})
 
