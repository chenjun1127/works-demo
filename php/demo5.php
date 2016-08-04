<?php
    $info=['Tome',true,'Eric'];
    list($a,$b,$c)=$info;
    echo $a;
    echo '<br/>';
    $a=each($info);
    print_r($a);
    echo '<br/>';
    echo $a['key'].'<br/>';
    $a=each($info);
    print_r($a);
    echo '<br/>';
    end($info);
    $a=each($info);
    print_r($a);
    echo '<br/>';
    echo current($info).'<br/>';
?>
