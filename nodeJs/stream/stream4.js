/*
	链式流
	链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
	接下来我们就是用管道和链式来压缩和解压文件。
*/
var fs=require('fs')
var zlib=require('zlib');
fs.createReadStream('test3.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('test3.txt.gz'))
console.log('压缩文件完成'+'\n');

 
/* fs.createReadStream('test3.txt.gz').pipe(zlib.createGzip()).pipe(fs.createWriteStream('test3.txt'))
console.log('文件解压完成'+'\n'); */