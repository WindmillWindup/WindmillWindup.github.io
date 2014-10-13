var vliegtuig = null; // object
var vliegtuigTekst = null; // object
var canvasX;
var canvasY;
var count = 0;
var countTekst = 0;

function doMove() {
	resetPosition(vliegtuig);
	setTimeout(doMove,20); // call doMove in 20msec
}
function resetPosition(obj){	
	if(obj.style.left == '-460px') {
		obj.style.left = '1400px';
		setStyle();
	}else{
		setLeft(obj);		
		setTop(obj);
	}
	//if(foo.offsetLeft < canvasX - 200)	foo.style.left = '980px';
}


function setStyle(){
	var plaatje;
	var tekst;
	
	if(countTekst == 0){
		plaatje = 'url(img/vliegtuig.png)';
		tekst = 'img/vliegtuigTekst_date.gif';
	}else if(countTekst == 1){
		plaatje = 'url(img/vliegtuigklein.png)';
		tekst = 'img/vliegtuigkleinTekst_mingle.gif';
	} else if(countTekst == 2){
		plaatje = 'url(img/vliegtuig.png)';
		tekst = 'img/vliegtuigTekst_windmillwindup.gif';
	}
	vliegtuig.style.backgroundImage = plaatje;
	vliegtuigTekst.setAttribute("src", tekst);
	
	countTekst++;
	if(countTekst>2)countTekst=0;
}

function setLeft(obj){
	obj.style.left = parseInt(obj.style.left)-1+'px';
}
function setTop(obj){
	count++;
	if(count > 8){
		obj.style.top = parseInt(obj.style.top)+rand()+'px';
		if(obj.offsetTop < -8)	obj.style.top = '10px';
		count=0;
	}
}
function rand(){
	return 2 - Math.ceil(3*Math.random());
}
function init() {
	//alert(canvasX);
	vliegtuigTekst = document.getElementById('vliegtuigTekst'); // get the "foo" object
	vliegtuig = document.getElementById('vliegtuig'); // get the "foo" object
	vliegtuig.style.left = '460px'; // set its initial position to 0px
	vliegtuig.style.top = '20px';
	
	setStyle();
	doMove(); // start animating
}

getWindowCoords = (navigator.userAgent.toLowerCase().indexOf('opera')>0||navigator.appVersion.toLowerCase().indexOf('safari')!=-1)?function() {
  canvasX = window.innerWidth;
  canvasY = window.innerHeight;
}:function() {
  canvasX = document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth;
  canvasY = document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight;
}

window.onresize = getWindowCoords;
window.onload = init;
