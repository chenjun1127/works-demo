<meta charset="utf-8">
<title>二维数组循环</title>
<?php
	$userName=['jone',['eric','jack','jason'],'alone'];
	print_r($userName);
	echo '<br/>';
	list($a,$b)=$userName;
	print_r ($b);
	$cc=$userName[0].'-----'.$userName[2];
	echo '<br/>';
	echo $cc;
	echo '<hr>';
	$category=[['苹果','3','18.8'],['核桃','2','90.0'],['葡萄','4','24.4']];
	for($i=0;$i<count($category);$i++){
		for($j=0;$j<count($category[$i]);$j++){
		  echo $category[$i][$j].'|';
		}
		echo '<br/>';
	}

?>