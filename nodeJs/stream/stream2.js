var fs=require('fs');
var data='大家好，my name is jone，我在学习nodejs';
//创建流
var writerStream=fs.createWriteStream('test1.txt')  //-->写入流
//使用 utf8 编码写入数据
writerStream.write(data,'UTF8');
//标记文件末尾；
writerStream.end()
//处理流事件，
writerStream.on('finish',function(){
	console.log('写入完成')
})
writerStream.on('error',function(err){
	console.log(err.stack)
})
console.log('程序执行完毕')
