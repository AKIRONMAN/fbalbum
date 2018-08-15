<?php
    if(!empty($_GET['name'])){
        echo $zip="FaceBook".trim($_GET['name'])."Album.zip";
        var_dump(unlink($zip)); 
    }
?>