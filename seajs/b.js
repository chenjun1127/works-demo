define(function(require,exports,module){
	function createEle(ele){
		var oEle=document.createElement(ele);
		oEle.setAttribute('title','sea模块调用');
		oEle.style.cssText='width:100px;height:100px;background-color:red';
		document.body.appendChild(oEle);
	}
	exports.create=createEle;
})