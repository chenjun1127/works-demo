<title>数组的数组循环</title>
<?php 
    $cagegory=[
        ['水果名'=>'苹果','数量'=>'2','价格'=>'21.8'],
        ['水果名'=>'葡萄','数量'=>'4','价格'=>'41.8'],
        ['水果名'=>'梨子','数量'=>'5','价格'=>'68.8']
    ];
    //for循环不能用于字符串的下标；
    //第一种foreach循环；
    for($i=0;$i<count($cagegory);$i++){
        foreach($cagegory[$i] as $key=>$value ){
            echo $key.'---'.$value;
            echo '，';
        }
        echo '<br/>';
    }
    echo '<hr>';
    $cagegory1=[
        ['水果名'=>'苹果','数量'=>'2','价格'=>'21.8'],
        ['水果名'=>'葡萄','数量'=>'4','价格'=>'41.8'],
        ['水果名'=>'梨子','数量'=>'5','价格'=>'68.8']
    ];
    //第二种list each循环；
    for($i=0;$i<count($cagegory1);$i++){
        while(!!list($key,$value)=each($cagegory1[$i])){
            echo $key.'---'.$value;
            echo '，';
        }
        
        echo '<br/>';
    }
    echo '<hr>';
    $age=['jone','tmoe','eric'];
    for($i=0;$i<count($age);$i++){
        echo $age[$i].'<br/>';
    }
    echo '<hr/>';
    $age1=$age;
    foreach($age1 as $key=>$value){
        echo $key.'---'.$value.'<br/>';
    }
    echo '<hr/>';
    $age2=$age;
     
    while(!!list($key,$value)=each($age2)){
        echo $key.'---'.$value.'<br>';
    }


        
 ?>