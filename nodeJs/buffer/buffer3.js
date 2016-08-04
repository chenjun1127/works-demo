/* 
	缓冲区合并 
	Buffer.concat(list[, totalLength])
	list - 用于合并的 Buffer 对象数组列表。
	totalLength - 指定合并后Buffer对象的总长度。
*/
var buffer_1=new Buffer("jack");
var buffer_2=new Buffer("jone");
var list=[buffer_1,buffer_2]
var result=Buffer.concat(list);
console.log(result);
var str=result.toString()
console.log(str)