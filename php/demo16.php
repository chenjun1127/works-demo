<title>php正则函数</title>
<?php 
	$language=['php','jsp','asp','java','ruby'];
	$mode='/p$/';
	// 搜索字符中相匹配的字符串；
	$arr=preg_grep($mode, $language); 
	while (!!list($key,$value)=each($arr)) {
		echo $key.'--'.$value;
		echo '<br>';
	}
	echo  '<hr>';
	// 将字符串所有匹配的结果放到一个数组变量中；
	preg_match_all('/php[1-6]/','php5fsadfphp4fsdafphp6',$out);
	print_r($out);
	echo '<br>';
	echo $out[0][2];
	echo  '<hr>';
	// 替换模式的所有出现：preg_replace()函数搜索到所有匹配，然后替换成想要的字符串返回出来；
	$mode='/php[1-6]/i'; //i不区分大小写
	$replacement='python';
	$subject='This is a php4,This is a PHP5';
	echo preg_replace($mode, $replacement, $subject); 
	//第一个参数表示正则模式；第二个参数表示要替换掉的字符；第三个参数表示字符串；
	echo '<hr>';
	$mode='/\[b\](.*)\[\/b\]/U'; // 解决贪婪问题；
	$replacement='<strong>\1</strong>';
	$subject='This is a [b]php4[/b],This is a [b]php5[/b]';

	echo preg_replace($mode, $replacement, $subject);

 ?>