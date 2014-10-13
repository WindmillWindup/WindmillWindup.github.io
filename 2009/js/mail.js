function mailto(wie){

	var email;

	if(wie=="organisation") email = "windmillwindup@gmail.com"; 
	if(wie=="press") email="mailto:mariasmit_@hotmail.com"
	if(wie=="webmaster") email="mail@kopo.nl;"
	
	var subject = "haia Windmill Windup " + wie;
	window.location = "mailto:"+email+"?subject="+subject;
}

function email(wie){
	document.write(wie.replace(/[a]/, "@"));
	document.write(wie.replace(/[p]/, "."));	

	var subject = "haia I found you through the Pickup List on Windmill Windup";
	window.location = "mailto:"+email+"?subject="+subject;
}

function signup(){
	
	var email = "windmillwindup@gmail.com";
	var subject = "Registration%20Windmill%202009";

	var body_message = "----------";
	body_message += "%0D%0AAloha%20Friends,";
	body_message += "%0D%0APlease%20fill%20in%20the%20questions%20below:";
	body_message += "%0D%0A----------";
	body_message += "%0D%0A";
	body_message += "%0D%0AOla%20Windmill%20Windup,%20hereby%20I%20register%20for%20the%20upcomming%20Tournament:"
	body_message += "%0D%0A%0D%0ATeam%20Name:";
	body_message += "%0D%0ACity:%0D%0ACountry:";
	body_message += "%0D%0ADivision%20(open/women/mixed/junior):";
	body_message += "%0D%0AHow%20many%20people:";
	body_message += "%0D%0A%0D%0AContact%20Person:";
	body_message += "%0D%0AContact%20Email%20Address:";

	window.location = "mailto:"+email+"?subject="+subject+"&body="+body_message;

}

function volunteer(){
	
	var email = "windmill.volunteer@gmail.com";
	var subject = "I'm%20your%20Fresh%20New%20Happy%20Volunteer!";

	var body_message = "----------";
	body_message += "%0D%0AAloha%20Friend%20Volunteer!";
	body_message += "%0D%0APlease%20fill%20in%20the%20questions%20below:";
	body_message += "%0D%0A----------";
	body_message += "%0D%0A";
	body_message += "%0D%0AOla%20Windmill%20Windup,%20hereby%20I%20volunteer%20to%20help%20with%20the%20upcomming%20Tournament:"
	body_message += "%0D%0A%0D%0AName:";
	body_message += "%0D%0AContact%20Email%20Address:";
	body_message += "%0D%0ATelephone:";
	body_message += "%0D%0A%0D%0AI%20would%20like%20to%20do%20the%20following:";	
	
	window.location = "mailto:"+email+"?subject="+subject+"&body="+body_message;

}
