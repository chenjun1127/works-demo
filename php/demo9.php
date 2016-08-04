<title>数组的排序</title>
<?php  
    //排序
    $fruit=['orange','apple','bannana'];
    sort($fruit);
    while(!!list($key,$value)=each($fruit)){
        echo $key.'---'.$value.'<br>';
    }
    echo '<hr/>' ;
    //随机排序；
    $fruit1=$fruit;
    shuffle($fruit1);
    foreach ($fruit1 as $key=>$value){
        echo $key.'--'.$value.'<br/>' ;
    }
    echo '<hr/>' ;
    //反向排序；
    //以array_开头的函数一般会创建一个新的数组 ，所以需要赋值给变量；
    $fruit2=$fruit;
    $f=array_reverse($fruit2);
    foreach ($f as $key=>$value){
        echo $key.'--'.$value.'<br/>' ;
    }
    
    
?>