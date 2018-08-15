<?php
include("createFolder.php");
if(!empty($_POST['valu'])){
   $context = stream_context_create(array(
               'http' => array(
               'header' => array('User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201'),
        ),
   ));

   copy($_POST['valu'],$_SERVER['DOCUMENT_ROOT'].'/album'.'/'.$_SESSION['id'].'/'.basename($_POST['valu']),$context);
                 header("Content-Type: application/image");
                header('Content-Disposition: attachment; filename="'.$_SESSION['id'].'/'.basename($_POST['valu']).'"');
                header('Pragma: public');
                header('Content-Length: ' . filesize($_SESSION['id'].'/'.basename($_POST['valu'])));
              readfile($_SESSION['id'].'/'.basename($_POST['valu']));

                // remove zip file is exists in temp path  
            unlink($_SESSION['id'].'/'.basename($_POST['valu']));
}
?>