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
    document.write('求和：' + add.add(1, 3) + '\n');
    document.write('“我的名字是jone”字符串长度为：' + add.str('我的名字是jone') + '\n');
    document.write('\"   require.js   \"去除空格：' + $tool.strTrim('   require.js   ') + '\n');
})