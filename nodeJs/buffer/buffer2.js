/* 
	写入缓冲区
	buf.write(string[, offset][, length][, encoding])
	string - 写入缓冲区的字符串。
	offset - 缓冲区开始写入的索引值，默认为 0 。
	length - 写入的字节数，默认为 buffer.length
	encoding - 使用的编码。默认为 'utf8' 。
*/
var buffer=new Buffer(100);
console.log(buffer.length)           //-->100
var len =buffer.write("www.baidu.com")
console.log("写入字节数 : "+  len);  //-->7
console.log("\n")
var buffer=new Buffer("chenjun");
console.log(buffer.length)           //-->7
var len =buffer.write("www.baidu.com")
console.log("写入字节数 : "+  len);  //-->7
/*
	从缓冲区读取数据
*/
var data=buffer.toString()
console.log(data)                    //-->www.bai