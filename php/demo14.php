<title>函数</title>
<?php 
	function md5Function(){
		echo md5('chenjun');
	}
	md5Function();
	echo '<hr/>';
	function circleArea($r){
		$area=$r*$r*pi();
		echo "半径为".$r.'面积为：'.$area;

	}
	circleArea(30);
	echo '<hr/>';
	function circleArea1($r=10){ //$r=10为默认参数，如果没有传参，就取默认值
		$area=$r*$r*pi();
		return $area;
	}
	echo '半径为r的圆的面积为'.circleArea1(20);
	echo '<hr/>';
	function personInfo($name,$age,$job){
		$arr=[$name,$age,$job];
		return $arr;
	}
	list($name,$age,$job)=personInfo('jone','27','老师');
	echo '我叫'.$name.',今年'.$age.'岁，我的职业是'.$job;
	echo '<hr/>';
	//这种方法没有返回值，没有上面的方法灵活，
	function personInfo1($name,$age,$job){
		$arr=[$name,$age,$job];
		list($a,$b,$c)=$arr;
		echo '我叫'.$name.',今年'.$age.'岁，我的职业是'.$job;

	}
	personInfo1('jack','17','学生');
	
 ?>