window.onload = function(){
	var cvs=document.getElementById('homeCvs');
	var ctx=cvs.getContext('2d');
	
	button(ctx);
	cvs.addEventListener("mousedown", function(e){
		var cvsBound = cvs.getBoundingClientRect();
		var posX = e.clientX - cvsBound.left;
		var posY = e.clientY - cvsBound.top;
		console.log(posX+ " "+ posY);
		buttonPos(posX,posY);
	});
}

function button(ctx){
	var btnName=["Play","Guide","About"];
	var txtNumber = 0;
	var textPosition = 128;
	for(x=100;x<500 && txtNumber<3;x+=80){
		ctx.fillStyle='#262626';
		ctx.fillRect(220,x,150,50);
		ctx.font = "12px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(btnName[txtNumber],280,textPosition);
		textPosition+=81;
		txtNumber+=1;
	}
}

function buttonPos(posX,posY){
	if(posX > 220 && posX < 371 && posY > 101 && posY <152){
			console.log("piano page");
			window.location.href="piano.html";
			return;
	}
	if(posX > 220 && posX < 371 && posY > 182 && posY <233){
			console.log("guide page");
			window.location.href="guide.html";
			return;
	}
	if(posX > 220 && posX < 371 && posY > 263 && posY <314){
			console.log("about page");
			window.location.href="about.html";
			return;
	}
}

/*window.onload = function(){
	var video=document.getElementById('videoID');
	video.play();
}


function playVideo(x){
	var video = document.getElementById(x);
	video.play();
}*/

//function others
function animateButton(flag){
	
	var hideButton = document.getElementById('mainButton');
		hideButton.className="hideButton";

	if(flag==1){
		var showVideo = document.getElementById('guideVideo');
		showVideo.className="animateVideo";
		// play the video
		var video=document.getElementById('video');
		video.play();
	}
	if(flag==2){
		var showAboutBox = document.getElementById('aboutBox');
		showAboutBox.className="showAboutBox";
	}
	if(flag==3){
		var showPiano = document.getElementById('pianopart');
		showPiano.className="showPiano";
	}
}


function backToHome(){
	// Stop video
	playVideo("videoID");
	
	var video=document.getElementById('video');
	video.pause();


	var showButton = document.getElementById('mainButton');
		showButton.className="mainButton";

	var showAboutBox = document.getElementById('aboutBox');
		showAboutBox.className="aboutBox";

	var showVideo = document.getElementById('guideVideo');
		showVideo.className="guideVideo";

	var showPiano = document.getElementById('pianopart');
	showPiano.className="pianoPart";
}

/*
//play music button with eventListener click
function playMusic(){
	
	var musicButton1 = document.getElementById('odeToJoy');
	musicButton1.addEventListener("click",music1);
	function music1(e){
		musicRun("music1");
	}
	var musicButton2 = document.getElementById('canon');
	musicButton2.addEventListener("click",music2);
	function music2(e){
		musicRun("music2");
	}
	var musicButton3 = document.getElementById('furElise');
	musicButton3.addEventListener("click",music3);
	function music3(e){
		musicRun("music3");
	}
	var musicButton4 = document.getElementById('notAlone');
	musicButton4.addEventListener("click",music4);
	function music4(e){
		musicRun("music4");
	}
	
}

function musicRun(x){
	var btnText = document.getElementById('musicStop');
	btnText.addEventListener("click", music1);
	function music1(e){
		if(btnText.value == "Play"){
			btnText.value= "Stop";
			play(x);
		}else if(btnText.value == "Stop"){
			btnText.value = "Play";
			pause(x);
		}
		
	}
}

//function to play music
function play(x){
	var audio = document.getElementById(x);
	audio.play();
}

//function to pause music
function pause(x){
	var audio = document.getElementById(x);
	audio.pause();
}
*/