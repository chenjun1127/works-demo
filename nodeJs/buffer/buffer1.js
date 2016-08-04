//创建 Buffer 类
var buffer=new Buffer('chenjun','utf-8');
console.log(buffer);
console.log(typeof buffer)
//转换为字符串
var str=buffer.toString()
console.log(str)
console.log(typeof str)
//转换为JSON
var json=buffer.toJSON(buffer)
console.log(json)
console.log(typeof json);
 
