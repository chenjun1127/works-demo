<TITLE>写入文件 </TITLE>
   <?php
    $fp=fopen('test.txt','w');
    $string='Welcome come to beijing';
    fwrite($fp,$string,strlen($string));//strlen字符串长度函数
    fclose($fp);
    //只在php5中适用；
    file_put_contents('test.json','{width:240px,height:120px}');
    $fp='test.json';
    echo realpath($fp);
  

?>
