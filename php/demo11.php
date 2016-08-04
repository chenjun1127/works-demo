<title>目标与文件 </title>
<?php
    $path="e:";
    echo round(disk_free_space($path)/1024/1024/1024,2).'GB';
    echo '<br/>';
    $path='../web/123.txt';
    //dirname返回 path 的父目录。 如果在 path 中没有斜线，则返回一个点（'.'），表示当前目录。
    echo realpath($path);
    echo '<br/>';
    $path1=pathinfo($path);
    foreach ($path1 as $key => $value){
        echo $key.'：'.$value;
        echo '<br/>';
    }
?>