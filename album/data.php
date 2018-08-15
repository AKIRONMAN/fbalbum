<?php
  include('createFolder.php');
if(!empty($_POST['valu'])){
     $context = stream_context_create(array(
               'http' => array(
               'header' => array('User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201'),
        ),
   ));

   $data=explode("_",$_POST['download']);
   copy($_POST['valu'][$data[1]],$_SERVER['DOCUMENT_ROOT'].'/album'.'/'.$_SESSION['id'].'/'.basename($_POST['valu'][$data[1]]),$context);
                 header("Content-Type: application/image");
                header('Content-Disposition: attachment; filename="'.$_SESSION['id'].'/'.basename($_POST['valu'][$data[1]]).'"');
                header('Pragma: public');
                header('Content-Length: ' . filesize($_SESSION['id'].'/'.basename($_POST['valu'][$data[1]])));
              readfile($_SESSION['id'].'/'.basename($_POST['valu'][$data[1]]));

                // remove zip file is exists in temp path  
            unlink($_SESSION['id'].'/'.basename($_POST['name'][$data[1]]));
          
}
else if(!empty($_POST['url'])){
  $r=''; 
  $context = stream_context_create(array(
               'http' => array(
               'header' => array('User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201'),
        ),
   ));
  $check=copy($_POST['url'],$_SERVER['DOCUMENT_ROOT'].'/album'.'/'.$_SESSION['id'].'/'.basename($_POST['url']),$context);
  if($check){$r=basename($_POST['url']);}else{}
  echo $r;
}
else if(!empty($_GET['url'])){
  unlink($_SESSION['id'].'/'.$_GET['url']);

}
 ?>

 