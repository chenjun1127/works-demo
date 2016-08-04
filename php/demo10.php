<?php
    $name=['a'=>'jone','b'=>'jack','c'=>'eric'];
    //通过标题函数将字符串键（key）设置成变量，然后将值(value)赋值给这个变量；
    extract($name);
    echo $a.'<br/>';
    echo $b.'<br/>';
    echo $c.'<br/>';
?>