var fs=require('fs')
var data=''
//创建流
var readStream=fs.createReadStream('test.txt') //-->只读流
//设置编码
readStream.setEncoding('utf-8')
//处理流事件 --> data, end, and error
readStream.on('data',function(chunk){
	data+=chunk
})
readStream.on('end',function(){
	console.log(data)
})
readStream.on('error',function(error){
	console.log(error.stack)
})
console.log('程序执行完毕')