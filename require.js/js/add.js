// 依赖tool模块
define(['tool'], function($tool) {
	function add() {
		var i = 0,
			sum = 0;
		for (; i < arguments.length; sum += arguments[i++]);
		return sum
	}

	return {
		add: add,
		str: $tool.strLen
	}
})