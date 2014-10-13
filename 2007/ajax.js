var http = createRequestObject();
function createRequestObject() {
   var objAjax;
   var browser = navigator.appName;
   if(browser == "Microsoft Internet Explorer"){
      objAjax = new ActiveXObject("Microsoft.XMLHTTP");
   }else{
      objAjax = new XMLHttpRequest();
   }
   return objAjax;
}

function init(){
/*   getNewContent('news01');
   getNewContent('news14');
   getNewContent('news11');
   getNewContent('news10');
   getNewContent('news02');  */
   setTimeout("getNewContent(\'news12\')",1250);
   setTimeout("getNewContent(\'news17\')",1250);
}

/*function getNewContent(fname){
   http.open('get','newcontent.txt');
*/
function getNewContent(fname){
   http.open('get','news/' + fname + '.txt');
   http.onreadystatechange = updateNewContent;
   http.send(null);
   return false;
}

function updateNewContent(){
   if(http.readyState == 4){
      document.getElementById('myContent').innerHTML = http.responseText;
   }
}