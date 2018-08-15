<?php
    session_start();
    if(!empty($_POST['create'])){
        $files=glob($_POST['create'].'/*');
        foreach($files as $file){
            if(is_file($file)){unlink($file);}
        }
        rmdir($_POST['create']);
        mkdir($_POST['create']);
        $_SESSION['id']=$_POST['create'];
    }
?>