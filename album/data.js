var xml = new XMLHttpRequest({mozSystem: true});
var data;
var name = 'hhh',name2;
var event;
var ins = 0, cret = 0;
var signed = false;

// Client ID and API key from the Developer Console
var CLIENT_ID = '820336841093-gmv1b96u2bgn5n30johbuf52o36730r4.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBqcdFPAnzxKofbgD6BK2H5YSa8icK-NiU';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive';

// var authorizeButton = document.getElementById('authorize_button');
//var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
 
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}
handleClientLoad();

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        immediate: false
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        //authorizeButton.onclick = handleAuthClick;
        //signoutButton.onclick = handleSignoutClick;
    });

}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        // authorizeButton.style.display = 'none';
        //signoutButton.style.display = 'block';
        //listFiles();
        signed = isSignedIn;
        console.log(isSignedIn);

    } else {
        //authorizeButton.style.display = 'block';
        //signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}
function loader(whostyl,styl){
    console.log("hello");
     document.getElementById("containt").style.display =styl;
    document.getElementById(whostyl).style.display =styl;
   
}

function fetchdata() {
    xml.onreadystatechange = function () {
        if (true) {
            data = JSON.parse(xml.responseText);
            //console.log(JSON.parse(xml.responseText));   
            document.getElementById("thumb").src = data.results[0].image.original_url;
            document.getElementById("thumb").setAttribute("onclick", 'SelectTask(event);');

        }
    }
    xml.open("GET", "data.txt", true);
       xml.setRequestHeader("Access-Control-Allow-Origin","*");
   xml.setRequestHeader("Access-Control-Allow-Credentials", true);
   xml.setRequestHeader("Access-Control-Allow-Methods", "GET");
   xml.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    xml.send();
}var counter1 = 0;
function desle(){
     var selectdata = document.getElementById("ul");
    if(selectdata.style.transform = "scale(1,1)"){
         selectdata.style.transform = "scale(0,0)";
         counter1++;
    }
}
function SelectTask(event) {
    event = event;
    var selectdata = document.getElementById("ul");
    console.log(selectdata.style.transform);
    if (counter1 % 2 === 0) { selectdata.style.transform = "scale(1,1)"; } else { selectdata.style.transform = "scale(0,0)"; }
    selectdata.style.transition = "0.1s";
    selectdata.style.zIndex = "5";
    //  selectdata.style.transform+="translateX("+(event.clientX-20)+"px) translateY("+(event.clientY)+"px)";
    selectdata.style.top = event.clientY + "px";
    selectdata.style.left = event.clientX - 50 + "px";
    counter1++;
}
function Images(event) {
    SelectTask(event);
    document.zip.style.display = "";
    document.getElementById("body").style.background = "white";
    document.getElementById("image").style.width = "";
    document.getElementById("nav").style.display = "";
    document.getElementById("image").style.height = "auto";
    document.getElementById("thumb").style.display = 'none';
    document.getElementById("maindata").style.display = 'none';
    var width, height, font;
    if(screen.width < 1000 ){
        
        document.getElementById("navformob").style.display = "";
        document.getElementById("nav").style.display = "none";
    }
    for (var i = 0; i < data.results.length; i++) {
        document.getElementById("image").innerHTML += "<div class='main'><div class='image" + i + " imagestyle'  onclick='check(" + i + ");'> "
            + "<input type='checkbox' name='files[]' class='image" + i + " ziping' value='" + data.results[i].image.original_url + "' style='opacity:0px; transform:scale(0,0);' /></div><input type='text' style='opacity:0;transform:scale(0,0);' value='" + data.results[i].image.original_url + "' name='valu[]'><input type='submit' id='imagedwn" + i + "' style='opacity:0;transform:scale(0,0);' name='download' value='download_" + i + "' ><i class='fa fa-download download' onclick='solo(" + i + ",1);' style='font-size:" + font + ";' title='Download'></i><i class='fab fa-google-drive download' onclick='drive(" + i + ");' style='font-size:" + font + ";' title='Move to Drive'></i></div>";
        var y = "image" + i;
        document.getElementsByClassName(y)[0].style.backgroundImage = "url('" + data.results[i].image.original_url + "')";
        document.getElementsByClassName("main")[i].style.width = width;
        document.getElementsByClassName("main")[i].style.height = height;
    }
    document.getElementById("image").innerHTML += "<input type='text' name='name' value='" + name + "' style='opacity:0;'/>";
}
function drive(no) {
    ins=0;
    if(!signed){handleAuthClick(2);window.location.href=window.location.href;}
    var u = "url=" + data.results[no].image.original_url;
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.responseText !== '') {
                 up(data.results[no].image.original_url, xml.responseText, 2, 4);
        } else { loader("loader","block");   document.getElementById("load").style.transform="scale(0,0)";}
    }
    xml.open("POST", "data.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(u);
}
function solo(id, id2) {
    var val;
    if (id2 === 1) { val = "imagedwn" + id; } else { val = "imgdwn" + id }
    var imagelink = document.getElementById(val);
    imagelink.click();
}
function download(idno) {
    var xml = new XMLHttpRequest();
    var val = "files=k";
    var data = document.getElementsByClassName("ziping");
    for (var i = 0; i < data.length; i++) {
        if (data[i].checked === true) {
            val += "," + data[i].value;
            var na = "image" + i;
            var img = document.getElementsByClassName(na);
            img[0].style.border = "5px solid rgba(0,0,0,0.4)";
            img[0].style.borderRadius = "5px";
            img[0].style.boxShadow = "";
            img[1].checked = false;
        } else { }
    }
    val += "&name=" + name;
    var load = document.getElementById("load");
    xml.onreadystatechange = function () {
        if (xml.responseText !== '') {
                load.style.transition = "0.5s";
                load.style.transitionTimingFunction = "ease-in-out";
                load.style.transform = "scale(1,1)";
                load.innerHTML = xml.responseText;
               loader("loader","none");
             document.getElementById("containt").style.display="";
        } else {
          loader("loader","block");
            document.getElementById("containt").style.display="";
               document.getElementById("load").style.transform="scale(0,0)";
        }
    }
    xml.open("POST", "zipdownload.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(val);
}
function MoveToDrive(){
  if(!signed){handleAuthClick(2);window.location.href=window.location.href;}
    var data = document.getElementsByClassName("ziping");
    var t;
    for (var i = 0; i < data.length; i++) {
        if (data[i].checked === true) {
            var na = "image" + i;
            var img = document.getElementsByClassName(na);
            var n=data[i].value.split("/");
            console.log(n[6]);
            t=up(data[i].value,n[6],1,img);
              loader("loader","block");
               document.getElementById("load").style.transform="scale(0,0)";
                
        } else { }
    }
    if(t){loader("loader","none");
               document.getElementById("load").style.transform="scale(0,0)";
        
    }
    
}

var j = 0;
var t = 0;
function check(id) {
    var name = "image" + id;
    var img = document.getElementsByClassName(name);
    if (!img[1].checked) {
        img[0].style.border = "5px solid #9b59b6";
        img[0].style.borderRadius = "5px";
        img[0].style.boxShadow = "1px 2px 3px rgba(0,0,0,0.2)";
        img[1].checked = true;
    } else {
        img[0].style.border = "5px solid rgba(0,0,0,0.4)";
        img[0].style.borderRadius = "5px";
        img[0].style.boxShadow = "";
        img[1].checked = false;
    }
}
window.fbAsyncInit = function () {
    FB.init({
        appId: '1935680059823654',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.1'
    });
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function fb_login() {
       
        FB.login(function (reponse) { 
            checkLoginState();
            
        }, { scope: 'email,public_profile' });
}
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        document.getElementById("maindata").style.display = "";
        document.getElementById("loginid").style.display = "none";
        document.getElementById("t").style.display = "none";
        testApi();
    } else {
          document.getElementById("maindata").style.display = "none";
        document.zip.style.display = "none";
        document.getElementById("loginid").style.display = "";
        document.getElementById("t").style.display = "";
    }

}
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
        handleClientLoad();
    });
}
function logout() {
    FB.logout(function (response) {
        // user is now logged out
        checkLoginState();

    });
}
function testApi() {    FB.api('/me?fields=id,name,email,picture.height(1000).width(1000)', function (response) {
        if (response && !response.error) {
            name = response.name;
            name2 = response.id;
            CreateFolderInServer(response.id);
            document.getElementById("data").innerHTML = "<h3> Hello There! " + response.name + "<h3><br/><img src='" + response.picture.data.url + "'  title='" + response.name + "' style='margin:0 auto;width:80%;height:80%;'/>"
                + '<br/><h2>ALBUM LIST</h2><div class="album"><img src="" id="thumb" title="album" alt="hello" style="diaplay:none;"/></div><button id="logout" onclick="logout();">LOGOUT</button>'
                ;
            dataonserver(response.email);
            fetchdata();
        } else { }
    });

}
function CreateFolderInServer(id) {
    var xml = new XMLHttpRequest();
    var Fol = "create=" + id;
    xml.onreadystatechange = function () {
        console.log(xml.responseText);
    }
    xml.open("POST", "createFolder.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(Fol);
}
function dataonserver(email) {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
    }
    xml.open("GET", "delete.php?name=" + email, true);
    xml.send();
}

var selec = 0;
function select(sele) {
    var changeselect;
    console.log(selec);
    if (selec % 2 == 0) { changeselect = "Dselect All"; } else { changeselect = "Select All"; }
    if (sele === 1) { document.getElementById("select").innerHTML = changeselect; } else { document.getElementById("selectli").innerHTML = changeselect; }
    var check = document.getElementsByClassName("imagestyle");
    for (var i = 0; i < check.length; i++) {
        check[i].click();
    }
    selec++;
}
var counter = -1;
function prev() {
    counter--;
    if (counter === -1) { counter = data.results.length; }
    var ImageChange = document.getElementById("one");
    ImageChange.style.backgroundImage = "url('" + data.results[counter].image.original_url + "')";
    document.getElementById("cont").innerHTML = '<form class="form" action="upload.php" method="POST">'
        + "<input type='text' name='valu' value='" + data.results[counter].image.original_url + "' style='opacity:0;transform:scale(0,0);'>"
        + "<input id='imgdwn" + counter + "' type='submit' name='download' style='opacity:0;transform:scale(0,0);' value='download_" + counter + "' />"
        + "<img src='arrow-download-icon.png' type='image/png'  onclick='solo(" + counter + ",2);' title='Download'></i>";
}
function next() {
    counter++;
    var ImageChange = document.getElementById("one");
    if (counter === data.results.length + 1) { counter = 0; }
    ImageChange.style.backgroundImage = "url('" + data.results[counter].image.original_url + "')";
    document.getElementById("cont").innerHTML = '<form class="form" name="sol" action="upload.php" method="POST">'
        + "<input type='text' name='valu' value='" + data.results[counter].image.original_url + "' style='opacity:0;transform:scale(0,0);'>"
        + "<input id='imgdwn" + counter + "' type='submit' name='download' style='opacity:0;transform:scale(0,0);' value='download_" + counter + "' />"
        + "<img src='arrow-download-icon.png' type='image/png' onclick='solo(" + counter + ",2);' title='Download'></i>";
}

function SlideShow(event) {
    SelectTask(event);
    document.getElementById("thumb").style.display = 'none';
    document.getElementById("maindata").style.display = 'none';
    document.getElementById("con").style.display = "";
    document.zip.style.display = "none";
    next();
}
function cancel() {
    document.getElementById("containt").style.display="none";
    var link = document.getElementById("load");
    load.style.transitionTimingFunction = "ease-in-out";
    load.style.transform = "scale(0,0)";
}






/*  gapi.client.drive.files.list(
           {q:"mimeType = 'application/vnd.google-apps.folder' and trashed = false"}
       ).then(function(files){
           var directory=files.result.items;
           console.log(files);
           if(!directory.length){
               return createFolder().then(function(res){
                   return res.result;
               });
           }else{
               return directory[0];
           }
       });*/
    var fileid;
     
function ensureUploadFolderPresent(fileData, filename, multi, img) {
    var  id = 'yes';
     gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"}).then(function(response){
            checkfolder(response,fileData, filename, multi, img);
        });
        return true;
       
}
function checkfolder(response,fileData, filename, multi, img){
        var files = response.result.files;
        var tname = "Facebook_" + name + "_upload";
        if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log();
                if(file.name === tname){ fileid = file;  break; } else if(file.name !== tname){ fileid=1; }
            }
        }
        console.log("hello",fileid);
        if(fileid===1){
            ins=0; 
            createFolder(fileData, filename);
        }else if(multi===1){
            ins=0;
            insertFile(fileData, filename, fileid.id);
        }else if(multi!==1){insertFile(fileData, filename, fileid.id);}
        if(multi===1){ 
            img[0].style.border = "5px solid rgba(0,0,0,0.4)";
            img[0].style.borderRadius = "5px";
            img[0].style.boxShadow = "";
            img[1].checked = false;
            loader("loader","none");
            
               document.getElementById("containt").style.display="";
               document.getElementById("load").style.transform="scale(1,1)";
            document.getElementById("load").innerHTML='<font onclick="cancel();">&times;</font><b> <br/><br/><br/><br/>'
              + '<ol type="none" style="text-align:left;line-height:30px;">'
               +'<li>Moved all files in drive please go and check!</li>'
               +'</b> ';
        }else{loader("loader","none");
               document.getElementById("containt").style.display="";
               document.getElementById("load").style.transform="scale(1,1)";
            document.getElementById("load").innerHTML='<font onclick="cancel();">&times;</font><b> <br/><br/><br/><br/>'
              + '<ol type="none" style="text-align:left;line-height:30px;">'
               +'<li>Moved all files in drive please go and check!</li>'
               +'</b> ';
        }
       
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () { }
        xml.open('GET', 'data.php?url=' + filename, true);
        xml.send();
            
}
/* img[0].style.border = "5px solid rgba(0,0,0,0.4)";
        img[0].style.borderRadius = "5px";
        img[0].style.boxShadow = "";
        img[1].checked = false;}*/ 


function createFolder(fileData, filename) {
    if (cret === 0) {
        cret++;
          var tname = "Facebook_" + name + "_upload";
        //var access_token =gapi.auth2.getAccessToken();
        var request = gapi.client.request({
            'path': '/drive/v2/files/',
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + access_token,             
            },
            'body': {
                "title": tname,
                "mimeType": "application/vnd.google-apps.folder",
            }
        });

        request.execute(function (resp) {
            insertFile(fileData, filename, resp.id);
            console.log(resp.name);
            
        });
    } else { }

}



function insertFile(fileData, filename, parentId, callback) {
    if (ins === 0) {
        ins++;
        var boundary = '-------314159265358979323846';
        var delimiter = "\r\n--" + boundary + "\r\n";
        var close_delim = "\r\n--" + boundary + "--";

        var reader = new FileReader();
        reader.readAsBinaryString(fileData);
        reader.onload = function (e) {
            var contentType = fileData.type || 'application/octet-stream';
            var metadata = {
                'title': filename,
                'mimeType': contentType,
                "parents": [{ "id": parentId }]
            };

            var base64Data = btoa(reader.result);
            var multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            var request = gapi.client.request({
                'path': '/upload/drive/v2/files/',
                'method': 'POST',
                'params': { 'uploadType': 'multipart' },
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            });

            request.execute(callback);
        }
    } else { }
    //return deferred.promise;
}



function insertPermission(file) {
    return gapi.client.drive.permissions.insert({
        'fileId': file.id,
        'resource': {
            "withLink": true,
            "role": "reader",
            "type": "anyone"
        }
    })
}

/*   function upload(file,id){

       insertFile(file, file.name,id).then(function(link){
          images.push(link);
       }).finally(function(){
          uploading=false;
       });
   }
*/
function getImageFormUrl(url, callback) {
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function (a) {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURI = canvas.toDataURL("image/*");

        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return callback(new Blob([ia], { type: mimeString }));
    }

    img.src = url;
}




function up(url, name, multi, img) {
        if(!signed){handleAuthClick();}
    getImageFormUrl(url, function (blobImage) {
        var formData = new FormData();
        formData.append('key1', 'value1');
        formData.append('key2', 'value2');
        formData.append('key2', 'value3');
        formData.append('imageToUpload', blobImage);
        var file = new File([blobImage], name);
        console.log(file);
      return ensureUploadFolderPresent(file, name, multi, img);
        //use formData in "data" property in $.ajax
        //$.ajax({
        //blabla: blabla,
        //data: formData,
        //blabla: blabla
        //}})
    });
}