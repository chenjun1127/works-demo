/* 
	缓冲区比较
	buf.compare(otherBuffer);
	otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。 
	返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
*/
var buffer_1=new Buffer('jack');
var buffer_2=new Buffer('jone');
var result=buffer_1.compare(buffer_2); //--> -1表示在之前；0表示相同；1表示在之后；
console.log(result)