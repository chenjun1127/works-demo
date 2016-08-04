define(function(require,exports,module){
	var a=require('./b.js');
 
	module.exports={
		info:function(){
			a.create('div');
		},
		cont:function(){
			document.title.innerHTML="这是一个seajs测试"
		}
	}
})