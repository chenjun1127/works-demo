/* 
	拷贝缓冲区
	buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
	targetBuffer - 要拷贝的 Buffer 对象。
	targetStart - 数字, 可选, 默认: 0
	sourceStart - 数字, 可选, 默认: 0
	sourceEnd - 数字, 可选, 默认: buffer.length 
*/
var buffer_1=new Buffer('jack')
var buffer_2=new Buffer(1000);
console.log(buffer_2.length)
var result=buffer_1.copy(buffer_2)
console.log(result)
