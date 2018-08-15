<?php
include("createFolder.php");
$error = ""; 
     $post = $_POST;   
     $file_folder = "user-album/";   
     $filesdata= $_SERVER['DOCUMENT_ROOT']."/album";

    if(extension_loaded('zip'))  
     {   
            
          if(isset($_POST['files']) && $_POST['files']!=='k')  
          {   
               $zip = new ZipArchive();    
              $zip_name = "/FaceBook".trim($_POST['name'])."Album.zip";   
               if($zip->open($filesdata.'/'.$_SESSION['id'].$zip_name, ZipArchive::CREATE))  
               {  $context = stream_context_create(array(
                   'http' => array(
                   'header' => array('User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201'),
                   ),
                   ));
                   $file=explode(",",$_POST['files']); 
                   unset($file[0]);
                   //Opening zip file to load files  
                    foreach($file as $file)  
                   {
                       copy($file, $filesdata."/".$_SESSION['id'].'/'.basename($file),$context);
                       $zip->addFile($_SESSION['id'].'/'.basename($file)); // Adding files into zip  
                       //unlink(basename($file)); 

                   } 
                   $zip->close();  
               }else{
                   $error .= "* Sorry ZIP creation failed at this time";
               }  
               if(file_exists($filesdata.'/'.$_SESSION['id'].$zip_name))  
               {  
                    // push to download the zip  
                    /*header('Content-Description: File Transfer');
                    header("Content-Type: application/zip");
                    header('Content-Disposition: attachment; filename="'.basename($zip_name).'"');
                    header('Expires: 0');
                    header('Cache-Control: must-revalidate');
                    header('Pragma: public');
                    header('Content-Length: ' . filesize($zip_name));
                    ob_clean();
                  readfile($zip_name);*/

                    // remove zip file is exists in temp path  
                   //unlink($zip_name);
                   $error.='<font onclick="cancel();">&times;</font>
                   <br/><br/>
                   <a href="https://fbalbumdownload.000webhostapp.com/album/'.$_SESSION['id'].$zip_name.'"   download>
                           <i class="fas fa-file-archive" style="font-size:3em;"></i>  click here to get file!    
                       </a>
                       ';  
               }  
          }  
          else  
          {  
               $error .= '<font onclick="cancel();">&times;</font><b> <br/><br/><br/><br/>
               <ol style="text-align:left;line-height:30px;">
               <li>Please select file to zip for download</li>
               <li>You can download all files by click select all and then download</li>
               <li>You can download indiudal file by clicking below download link and move to drive link</li>
               <li>And you can also zip by select all and click on move to zip and it will do uploading onto your drive</li>
               </ol>
               </b> ';  
          }  
     } 
     echo $error;
?>