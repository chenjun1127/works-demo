<title>时间</title>
<?php
    $path="demo2.php";
    echo realpath($path).'<br/>';
    date_default_timezone_set('Asia/Shanghai');
    echo date('Y-m-d H:i:s',filectime($path)).'<BR/>'; //最后的改变时间
    echo date('Y-m-d H:i:s',fileatime($path)).'<BR/>'; //最后的访问时间
    echo date('Y-m-d H:i:s',filemtime($path)).'<BR/>'; //最后的修改时间
?>