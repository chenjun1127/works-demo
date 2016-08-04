var events=require('events');
var ele=new events.EventEmitter();
/*  
	var events=require('events').EventEmitter;
	var ele=new events(); 
*/
 //addListener,on 事件监听
ele.addListener('close',closeDIv);
function closeDIv(who){
	console.log(who)
}
ele.emit('close','box')
