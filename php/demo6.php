<?php
    $info=['Tome',true,'Eric'];
    var_dump($info);//打印变量的相关信息；
    echo '<hr>';
    while(!!$a=each($info)){
        echo $a['key'].'----'.$a['value'];
        echo '<br/>';
    }
?>