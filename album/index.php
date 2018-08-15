
<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=MedievalSharp" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Hanalei+Fill|Modern+Antiqua" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href='slider.css' type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
      <link rel="stylesheet" href='style.css' type="text/css" />
        <style>
            #maindata{
                margin:auto auto;
                width:60%;
                height:auto;
                cursor:pointer;
                border-radius:10px;
                padding:20px;
                font-size:1.4m;
                border:10px solid rgba(0,0,0,0.7);
                color:rgba(0,0,0,0.7);
                background:white;
                margin:0 auto;
            }
            #maindata:hover{
                transition:0.5s;
                padding:30px;
                border-color:#2ecc71;
            }
            .album{
                display:inline;
            }
            .album img{
                border:5px solid rgba(0,0,0,0.2);
                border-radius:5px;    
            }
            .album img:hover{
                border:5px solid #3498db;
            }
            h2{
                width:100%;
                text-align:center;
            }
            #logout{
                border:none;
                border:5px solid #e74c3c;
                color:#e74c3c;
                cursor:pointer;
                padding:10px;
                font-weight:bold;
                width:100%;
                background:white;
                font-size:30px;
                margin:20px 0px;
            }
            #logout:hover{
                transition:0.5s;
                border-color:rgba(0,0,0,0.1);
                background:#e74c3c;
                color:white;
            }
            form[name="zip"]{
                text-align:center;
            }
            #load{
                margin:0 auto;
                width:70%;
                z-index:20;
                height:auto;
                padding-bottom:5%;
                background:rgba(255,255,255,0.9);
                border-radius:5px;
                
            }

           #loader{
               bottom:0;
               width:80%;
               margin:200px auto 0px auto;
               background:white;
               height:20%;
               padding-top:20px;
               border-radius:5px 5px;
               text-align:center;
           }
           .loaders{
               position:absolute;
               margin:5% auto 0px 5%;
               width:70%;
               border-radius:5px;
               height:2vh;
           }
           #loader .loaders:nth-child(1){
               background:rgba(0,0,0,0.2);
           }
           #loader .loaders:nth-child(2){
               background:#3498db;
               width:1%;
               transition:1s;
               animation:loade 2s infinite ease-in-out;
           }
            @keyframes loade{
                0%{width:1%;}
                25%{width:20%;}
                50%{width:30%;}
                75%{width:50%;}
                100%{width:70%;}
            }
            #load font{
                width:50px;
                float:right;
                font-size:3em;
                color:black;
                cursor:pointer;

            }
            #load font:hover{
                color:rgba(0,0,0,.7);
            }
            #load a{
                color:rgba(52, 73, 94,1.0);
                font-size:1.1em;
                word-spacing:10px;
                font-weight:bold;
                text-decoration:none;
            }
            h3,h2{
                margin:0px;
                padding-top:10px;
                font-size:1.5em;
            }
            h2{
                padding:20px 10px;
            }
            #navformob{ 
                margin-top:-60px;
                background:white;
                box-shadow:1px 2px 2px 1px rgba(0,0,0,0.2);
                position:sticky;
                top: 0;
                padding:0px;
                
            }
            #navformob #navforul{
                z-index:15;   
                padding:0;
            }
            #navformob #navforul li{
                padding:25px 5px  5px 5px;
                display:inline-table;
                border-bottom:5px solid transparent;
            }
            #navformob #navforul li:hover,#navformob #navforul li:focus{
                border-bottom:5px solid #2ecc71;
                background:black;
                color:white;
            }
            #nav{
                position:sticky;
                top:0;
                background:white;
                box-shadow:1px 2px 2px 1px rgba(0,0,0,0.2) ;
                padding-top:10px;
                padding-bottom:10px;
            }
         


            #t font{
                
                width:50px;
                float:right;
                margin-top:-100px;
                font-size:3em;
                color:white;
                cursor:pointer;
            }
        #backbutton{
            border:none;
            font-size:25px;
            background:#e74c3c;
            border:2px solid #e74c3c;
            color:white;
             padding:10px 0px;
        }
        #backbutton:hover{
            border:2px solid #e74c3c;
            color:#e74c3c;
            background:transparent;

        }
            a[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']{
                display:none;
            }
                  #t font{
                
                width:50px;
                float:right;
                margin-top:-100px;
                font-size:3em;
                color:white;
                cursor:pointer;
            }
            #t #hello{
                width:100%;
                margin:0 auto;
                margin-top:10%;
            }
            #t #hello img{
                width:80%;
            }
            #t a{
                font-size:1em;
                color:white;
                text-decoration:none;
            }
            #t h2 a{
                font-size:1em;
            }
            #t a:hover{
                color:#e74c3c;
            }
       
        </style>
    </head>
    <body onresize="size();" onload="checkLoginState();" id="body" style="background:rgba(52, 152, 219,0.7);" ondblclick="desle();">
    <div id="containt" class="containt" style="display:none;">

<div id='loader'   style='display:none;' >
    Downloading Files!... Please Wait! 

                    <div class="loaders">
                    </div>
                    <div class="loaders">
                    </div>
                </div>
                <div id="load" style="transform:scale(0,0);">
                </div>
</div>
    <!--Some Data OF User -->
            <div id="maindata" style="display:none;">
                 <div  id="data" style="text-align:center;">
                    <img src='' alt="profile picture" width="500" height="500"/>
                </div>
            
            <!--Options-->
              <div id="ul" style="transform:scale(0,0);">
                    <p onclick="SlideShow(event);">Slide Show</p>
                    <p onclick="Images(event);">Explore</p>
                </div>
            <!--Options-->
            </div>
        <!--Some Data OF User-->

        <!--Explore Part--><br/>
        <br/>
        <div id="nav" style="display:none;">
        <button id="downlo" onclick="download(1);">Download as ZIP</button>
            <button id="select" onclick="select(1);" >Select All</button>
            <button id="drives"   onclick="MoveToDrive();">Move to Drive</button>
            <div id="bac" title="back to home" onclick="home();" >
                    &larr; <font style="font-size:20px;">Back</font>
                </div>
              
        </div>
        <div id="navformob" style="display:none;">
            <button onclick="home();" id="backbutton" style="width:100%;">Back</button>
            <ul type="none" id="navforul" >
                <li onclick="download(1);">Download as Zip</li>
                <li onclick="select(2);" id="selectli">Select All</li>
                <li onclick="MoveToDrive();">Move to Drive</li>
            </ul>
        </div>
           <form name="zip"  method="post" action="data.php" style="display:none;"> 
           <div id="bac" title="back to home" onclick="home();" style="display:none;">
                    &larr; <font style="font-size:20px;">Back</font>
                </div>
              
                <div id="load" style="transform:scale(0,0);">
                </div>
                <div id="image">
                    <!--Data Dynamic Loding-->
                </div>      
            </form>
     
            <div id='loader'   style='display:none;' >
                    <div class="loaders">
                    </div>
                    <div class="loaders">
                    </div>
                </div>
                





        <!--End oF Explore Part-->

        <!--Slide Show Part-->
            <div class="container" id="con" style="display:none;">
                <div class="slide_img" id="one">			
                    <label class="prev" onclick="prev();"><span>&#x2039;</span></label>
                    <label class="next" onclick="next();" ><span>&#x203a;</span></label>	
                </div>
                <div id="back" title="back to home" onclick="home();">
                    &larr; <font style="font-size:20px;">Back</font>
                </div>
                <div id="cont">
                    <!--Data Dynamic Loding-->
                </div>
            </div>
                  <div id="t" class="containt" style="position:fixed;display:none;">
                    <font onclick="tcancle();">&times;</font>
                        <div id="hello">
                            <img src="https.jpg"/>
                            <br/><br/>
                            <h3><a href="https://fbalbumdownload.000webhostapp.com">If your in http so please go to https
                            OR click here to get there. 
                        </a></h3>
                        <br/><br/>
                         <h3><a href="send.htm">
                                How to do OR How to go ahead in this webapp So please Click Here to Know More!
                            </a>
                        </h3>
                </div>

            </div>
        <!--End oF Slide Show Part-->
           
        <!--FB Login-->
         <div id="loginid"  style="display:none;"> 
             <i class="fab fa-facebook"></i><font>acebook</font> <br/><br/>
             <input type="submit" onclick="fb_login();" id="login" style="display:;" value="LOGIN"/>
        </div>
        <!--FB Login-->

        <!--JavaScript-->
      
        
        <script async defer src="https://apis.google.com/js/api.js"
	onload="this.onload=function(){};handleClientLoad()"
	onreadystatechange="if (this.readyState === 'complete') this.onload()" async defer>
  </script>

    <script type="text/javascript" src="data.js"/>
     <script src="https://apis.google.com/js/platform.js" async defer></script>

   <script>
           function home(){window.location.href=window.location.href; document.getElementById("body").style.background="background:rgba(52, 152, 219,0.7);";}
         function  size(){
                if(screen.width<800){
                    makeScreen("0","100%");  
                }else if(screen.width<900){makeScreen("500px","35%");}
            }
            function tcancle(){
                document.getElementById("t").style.display="none";
            }
            function makeScreen(ul,one){
                    document.getElementById("ul").style.marginTop=ul;
                   document.getElementById("cont").style.right="20%";
                    document.getElementById("maindata").style.width=screen.width+"px";
                    document.getElementById("body").style.backgroundColor="white";
                    document.getElementById("loginid").style.color="#2980b9";
                    document.getElementById("maindata").style.padding="30px 0px 0px 0px";
                    document.getElementById("maindata").style.borderRadius="0px";
                    document.getElementById("maindata").style.border="none"; 
                    document.getElementById("con").style.width=screen.width+"px";
                    document.getElementById("con").style.height=screen.height+"px";
                    document.getElementById("one").style.height=screen.height+"px";
                    document.getElementById("one").style.backgroundSize=one;
            }
            size();
            if(window.location.href==="http://fbalbumdownload.000webhostapp.com/album/"){
                 document.getElementById("t").style.display="";
                  document.getElementById("loginid").style.display="none";
            }
        </script>
    </body>
</html>