var EventEmitter = require('events').EventEmitter
var life = new EventEmitter();
life.setMaxListeners(3) 
/* 
addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。
on(event, listener)
为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

once(event, listener)
为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。 

removeListener(event, listener)
移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。

removeAllListeners([event])
移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

setMaxListeners(n)
默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
*/
life.on('comfort', function (who) {
	console.log('给' + who + '倒水！');
})
life.on('comfort', function (who) {
	console.log('给' + who + '揉肩');
})
life.on('comfort', zuofan);
function zuofan(who) {
	console.log('给' + who + '做饭');
}
life.on('fondness', maiyifu);
life.on('fondness', jiaogongzi);
function maiyifu(who) {
	console.log('给' + who + '买衣服');
}
function jiaogongzi(who) {
	console.log('给' + who + '交工资');
}
life.removeListener('comfort',zuofan)
life.emit('comfort', '老公')
life.emit('fondness', '老婆')
var leftFondnessLength=life.listenerCount('fondness',jiaogongzi);
console.log('给老婆做的事情：' +leftFondnessLength)
console.log('给老公做的事情：' + life.listeners('comfort').length);
console.log('给老婆做的事情：' + life.listeners('fondness').length); 