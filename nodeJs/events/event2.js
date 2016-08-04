var events=require('events').EventEmitter;
var eventsEmitter=new events();
var connectHandler=function(){
	console.log('连接成功');
	eventsEmitter.emit('dataRecive');
};
//监听事件; 
eventsEmitter.on('connection',connectHandler);
eventsEmitter.on('dataRecive',function(){
	console.log('数据接收成功。');
})
//触发connection事件; 
eventsEmitter.emit('connection');
console.log("程序执行完毕。");
