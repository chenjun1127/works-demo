/*
	主文件
 */
require.config({
	paths: {
		"jquery": "jquery3.1.1.min",
		"tool": "tools"
	}
})
require(['jquery', 'add', 'tool'], function($, add, $tool) {
	console.log('求和：' + add.add(1, 3));
	console.log('“我的名字是jone”字符串长度为：' + add.str('我的名字是jone'));
	console.log('\"   require.js   \"去除空格：' + $tool.strTrim('   require.js   '));

})