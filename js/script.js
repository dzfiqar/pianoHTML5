// JavaScript Document
var chordName = null;
var keyPressLabel = null;
var music=null;
window.onload = function(){
	var cvs=document.getElementById('pianoCvs');
	var ctx=cvs.getContext('2d');
	var keyPress=[];	
	
	pianoClickWhite(ctx);
	pianoClickBlack(ctx);
	keyLabel(ctx);
	chordLabel(ctx)
	sideLight(ctx);
	//playMusic(ctx);
	cvs.addEventListener("mousedown", function(e){
		var cvsBound = cvs.getBoundingClientRect();
		var posX = e.clientX - cvsBound.left;
		var posY = e.clientY - cvsBound.top;
		console.log(posX+ " "+ posY);
		tutsPiano(posX,posY);
	});
	
	window.addEventListener("keydown",function(e){
		console.log(e.keyCode);
		tutsKeyPress(e.keyCode);
	});

}

//loop white tuts until 28
//give chord name in every tuts
function pianoClickWhite(ctx){
	//to give chord name for each tuts
	//make array and fill with white tuts chord name
	var keyName=["C","D","E","F","G","A","B","C'","D'","E'","F'","G'","A'","B'","C''","D''","E''","F''","G''","A''","B''","C'''","D'''","E'''","F'''","G'''","A'''","B'''"];
	var keyNameNumber = 0;
	var textPosition = 24;
	for(x=0;x<1550 && keyNameNumber<29;x+=56){
		ctx.fillStyle='white';
		ctx.fillRect(x,250,55,300);
		ctx.font = "12px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(keyName[keyNameNumber],textPosition,500);
		textPosition+=56;
		keyNameNumber+=1;
	}
	
}
//loop black tuts until 20
//give chord name in every tuts
function pianoClickBlack(ctx){
	//to give chord name for each tuts
	//make array and fill with black tuts chord name
	var keyName2=["C#","D#","F#","G#","A#","C#'","D#'","F#'","G#'","A#'","C#''","D#''","F#''","G#''","A#''","C#'''","D#'''","F#'''","G#'''","A#'''"];
	var keyNameNumber2 = 0;
	var textPosition2 = 46;
	for(xBlackTuts=32;xBlackTuts<1550 && keyNameNumber2<20;xBlackTuts+=56){
		if(xBlackTuts != 144 && xBlackTuts != 368 && xBlackTuts != 536 && xBlackTuts != 760  && xBlackTuts != 928 & xBlackTuts != 1152 && xBlackTuts != 1320){
			ctx.fillStyle='black';
			ctx.fillRect(xBlackTuts,250,45,180);
			ctx.font = "12px Arial";
			ctx.fillStyle = "white";
			ctx.fillText(keyName2[keyNameNumber2],textPosition2,390);
			keyNameNumber2+=1;
		}
		textPosition2+=56;
	}
	
}


function tutsPiano(posX,posY){
		//tune for black tuts
		if(posX > 32 && posX < 77 && posY > 250 && posY <430){
			console.log("tuts C#");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C%23.mp3";
			a.play();
			tutsPressColorBlack(32);
			this.chordName="C#";
			this.keyPressLabel="Shift+Q";
			return;
		}
		if(posX > 88 && posX < 133 && posY > 250 && posY <430){
			console.log("tuts D#");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D%23.mp3";
			a.play();
			tutsPressColorBlack(88);
			this.chordName="D#";
			this.keyPressLabel="Shift+W";
			return;
		}
		if(posX > 200 && posX < 245 && posY > 250 && posY <430){
			console.log("tuts F#");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F%23.mp3";
			a.play();
			tutsPressColorBlack(200);
			this.chordName="F#";
			this.keyPressLabel="Shift+R";
			return;
		}
		if(posX > 256 && posX < 301 && posY > 250 && posY <430){
			console.log("tuts G#");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G%23.mp3";
			a.play();
			tutsPressColorBlack(256);
			this.chordName="G#";
			this.keyPressLabel="Shift+T";
			return;
		}
		if(posX > 312 && posX < 357 && posY > 250 && posY <430){
			console.log("tuts A#");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A%23.mp3";
			a.play();
			tutsPressColorBlack(312);
			this.chordName="A#";
			this.keyPressLabel="Shift+Y";
			return;
		}
		if(posX > 424 && posX < 469 && posY > 250 && posY <430){
			console.log("tuts C#'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C%23'.mp3";
			a.play();
			tutsPressColorBlack(424);
			this.chordName="C#'";
			this.keyPressLabel="Shift+I";
			return;
		}
		if(posX > 480 && posX < 525 && posY > 250 && posY <430){
			console.log("tuts D#'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D%23'.mp3";
			a.play();
			tutsPressColorBlack(480);
			this.chordName="D#'";
			this.keyPressLabel="Shift+O";
			return;
		}
		if(posX > 592 && posX < 637 && posY > 250 && posY <430){
			console.log("tuts F#'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F%23'.mp3";
			a.play();
			tutsPressColorBlack(592);
			this.chordName="F#'";
			this.keyPressLabel="Shift+A";
			return;
		}
		if(posX > 648 && posX < 693 && posY > 250 && posY <430){
			console.log("tuts G#'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G%23'.mp3";
			a.play();
			tutsPressColorBlack(648);
			this.chordName="G#'";
			this.keyPressLabel="Shift+S";
			return;
		}
		if(posX > 704 && posX < 749 && posY > 250 && posY <430){
			console.log("tuts A#'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A%23'.mp3";
			a.play();
			tutsPressColorBlack(704);
			this.chordName="A#'";
			this.keyPressLabel="Shift+D";
			return;
		}
		if(posX > 816 && posX < 861 && posY > 250 && posY <430){
			console.log("tuts C#''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C%23''.mp3";
			a.play();
			tutsPressColorBlack(816);
			this.chordName="C#''";
			this.keyPressLabel="Shift+G";
			return;
		}
		if(posX > 872 && posX < 917 && posY > 250 && posY <430){
			console.log("tuts D#''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D%23''.mp3";
			a.play();
			tutsPressColorBlack(872);
			this.chordName="D#''";
			this.keyPressLabel="Shift+H";
			return;
		}
		if(posX > 984 && posX < 1029 && posY > 250 && posY <430){
			console.log("tuts F#''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F%23''.mp3";
			a.play();
			tutsPressColorBlack(984);
			this.chordName="F#''";
			this.keyPressLabel="Shift+K";
			return;
		}
		if(posX > 1040 && posX < 1085 && posY > 250 && posY <430){
			console.log("tuts G#''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G%23''.mp3";
			a.play();
			tutsPressColorBlack(1040);
			this.chordName="G#''";
			this.keyPressLabel="Shift+L";
			return;
		}
		if(posX > 1096 && posX < 1141 && posY > 250 && posY <430){
			console.log("tuts A#''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A%23''.mp3";
			a.play();
			tutsPressColorBlack(1096);
			this.chordName="A#''";
			this.keyPressLabel="Shift+Z";
			return;
		}
		if(posX > 1208 && posX < 1253 && posY > 250 && posY <430){
			console.log("tuts C#'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C%23'''.mp3";
			a.play();
			tutsPressColorBlack(1208);
			this.chordName="C#'''";
			this.keyPressLabel="Shift+C";
			return;
		}
		if(posX > 1264 && posX < 1309 && posY > 250 && posY <430){
			console.log("tuts D#'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D%23'''.mp3";
			a.play();
			tutsPressColorBlack(1264);
			this.chordName="D#'''";
			this.keyPressLabel="Shift+V";
			return;
		}
		if(posX > 1376 && posX < 1421 && posY > 250 && posY <430){
			console.log("tuts F#'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F%23'''.mp3";
			a.play();
			tutsPressColorBlack(1376);
			this.chordName="F#'''";
			this.keyPressLabel="Shift+N";
			return;
		}
		if(posX > 1432 && posX < 1477 && posY > 250 && posY <430){
			console.log("tuts G#'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G%23'''.mp3";
			a.play();
			tutsPressColorBlack(1432);
			this.chordName="G#'''";
			this.keyPressLabel="Shift+M";
			return;
		}
		if(posX > 1488 && posX < 1533 && posY > 250 && posY <430){
			console.log("tuts A#'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A%23'''.mp3";
			a.play();
			tutsPressColorBlack(1488);
			this.chordName="A#'''";
			this.keyPressLabel="Shift+,";
			return;
		}
		//tune for white tuts
		if(posX > 1 && posX < 57 && posY > 250 && posY <551){
			console.log("tuts C");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C.mp3";
			a.play();
			tutsPressColor(0);
			this.chordName="C";
			this.keyPressLabel="Q";
			return;
		}
		if(posX > 57 && posX < 113 && posY > 250 && posY <551){
			console.log("tuts D");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D.mp3";
			a.play();
			tutsPressColor(56,true);
			this.chordName="D";
			this.keyPressLabel="W";
			return;
		}
		if(posX > 113 && posX < 169 && posY > 250 && posY <551){
			console.log("tuts E");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/E.mp3";
			a.play();
			tutsPressColor(112,false,true);
			this.chordName="E";
			this.keyPressLabel="E";
			return;
		}
		if(posX > 169 && posX < 225 && posY > 250 && posY <551){
			console.log("tuts F");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F.mp3";
			a.play();
			tutsPressColor(168);
			this.chordName="F";
			this.keyPressLabel="R";
			return;
		}
		if(posX > 225 && posX < 281 && posY > 250 && posY <551){
			console.log("tuts G");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G.mp3";
			a.play();
			tutsPressColor(224,true);
			this.chordName="G";
			this.keyPressLabel="T";
			return;
		}
		if(posX > 281 && posX < 337 && posY > 250 && posY <551){
			console.log("tuts A");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A.mp3";
			a.play();
			tutsPressColor(280,true);
			this.chordName="A";
			this.keyPressLabel="Y";
			return;
		}
		if(posX > 337 && posX < 393 && posY > 250 && posY <551){
			console.log("tuts B");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/B.mp3";
			a.play();
			tutsPressColor(336,false,true);
			this.chordName="B";
			this.keyPressLabel="U";
			return;
		}
		if(posX > 393 && posX < 449 && posY > 250 && posY <551){
			console.log("tuts C'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C'.mp3";
			a.play();
			tutsPressColor(392);
			this.chordName="C'";
			this.keyPressLabel="I";
			return;
		}
		if(posX > 449 && posX < 505 && posY > 250 && posY <551){
			console.log("tuts D'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D'.mp3";
			a.play();
			tutsPressColor(448,true);
			this.chordName="D'";
			this.keyPressLabel="O";
			return;
		}
		if(posX > 505 && posX < 561 && posY > 250 && posY <551){
			console.log("tuts E'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/E'.mp3";
			a.play();
			tutsPressColor(504,false,true);
			this.chordName="E'";
			this.keyPressLabel="P";
			return;
		}
		if(posX > 561 && posX < 617 && posY > 250 && posY <551){
			console.log("tuts F'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F'.mp3";
			a.play();
			tutsPressColor(560);
			this.chordName="F'";
			this.keyPressLabel="A";
			return;
		}
		if(posX > 617 && posX < 673 && posY > 250 && posY <551){
			console.log("tuts G'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G'.mp3";
			a.play();
			tutsPressColor(616,true);
			this.chordName="G'";
			this.keyPressLabel="S";
			return;
		}
		if(posX > 673 && posX < 729 && posY > 250 && posY <551){
			console.log("tuts A'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A'.mp3";
			a.play();
			tutsPressColor(672,true);
			this.chordName="A'";
			this.keyPressLabel="D";
			return;
		}
		if(posX > 729 && posX < 785 && posY > 250 && posY <551){
			console.log("tuts B'");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/B'.mp3";
			a.play();
			tutsPressColor(728,false,true);
			this.chordName="B'";
			this.keyPressLabel="F";
			return;
		}
		if(posX > 785 && posX < 841 && posY > 250 && posY <551){
			console.log("tuts C''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C''.mp3";
			a.play();
			tutsPressColor(784);
			this.chordName="C''";
			this.keyPressLabel="G";
			return;
		}
		if(posX > 841 && posX < 897 && posY > 250 && posY <551){
			console.log("tuts D''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D''.mp3";
			a.play();
			tutsPressColor(840,true);
			this.chordName="D''";
			this.keyPressLabel="H";
			return;
		}
		if(posX > 897 && posX < 953 && posY > 250 && posY <551){
			console.log("tuts E''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/E''.mp3";
			a.play();
			tutsPressColor(896,false,true);
			this.chordName="E''";
			this.keyPressLabel="J";
			return;
		}
		if(posX > 953 && posX < 1009 && posY > 250 && posY <551){
			console.log("tuts F''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F''.mp3";
			a.play();
			tutsPressColor(952);
			this.chordName="F''";
			this.keyPressLabel="K";
			return;
		}
		if(posX > 1009 && posX < 1065 && posY > 250 && posY <551){
			console.log("tuts G''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G''.mp3";
			a.play();
			tutsPressColor(1008,true);
			this.chordName="G''";
			this.keyPressLabel="L";
			return;
		}
		if(posX > 1065 && posX < 1121 && posY > 250 && posY <551){
			console.log("tuts A''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A''.mp3";
			a.play();
			tutsPressColor(1064,true);
			this.chordName="A''";
			this.keyPressLabel="Z";
			return;
		}
		if(posX > 1121 && posX < 1177 && posY > 250 && posY <551){
			console.log("tuts B''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/B''.mp3";
			a.play();
			tutsPressColor(1120,false,true);
			this.chordName="B''";
			this.keyPressLabel="X";
			return;
		}
		if(posX > 1177 && posX < 1233 && posY > 250 && posY <551){
			console.log("tuts C'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/C'''.mp3";
			a.play();
			tutsPressColor(1176);
			this.chordName="C'''";
			this.keyPressLabel="C";
			return;
		}
		if(posX > 1233 && posX < 1289 && posY > 250 && posY <551){
			console.log("tuts D'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/D'''.mp3";
			a.play();
			tutsPressColor(1232,true);
			this.chordName="D'''";
			this.keyPressLabel="V";
			return;
		}
		if(posX > 1289 && posX < 1345 && posY > 250 && posY <551){
			console.log("tuts E'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/E'''.mp3";
			a.play();
			tutsPressColor(1288,false,true);
			this.chordName="E'''";
			this.keyPressLabel="B";
			return;
		}
		if(posX > 1345 && posX < 1401 && posY > 250 && posY <551){
			console.log("tuts F'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/F'''.mp3";
			a.play();
			tutsPressColor(1344);
			this.chordName="F'''";
			this.keyPressLabel="N";
			return;
		}
		if(posX > 1401 && posX < 1457 && posY > 250 && posY <551){
			console.log("tuts G'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/G'''.mp3";
			a.play();
			tutsPressColor(1400,true);
			this.chordName="G'''";
			this.keyPressLabel="M";
			return;
		}
		if(posX > 1457 && posX < 1513 && posY > 250 && posY <551){
			console.log("tuts A'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/A'''.mp3";
			a.play();
			tutsPressColor(1456,true);
			this.chordName="A'''";
			this.keyPressLabel=",";
			return;
		}
		if(posX > 1513 && posX < 1569 && posY > 250 && posY <551){
			console.log("tuts B'''");
			var a = new Audio();
			a.autoplay = true;
			a.controls = true;
			a.src = "Assets/Tune/B'''.mp3";
			a.play();
			tutsPressColor(1512,false,true);
			this.chordName="B'''";
			this.keyPressLabel=".";
			return;
		}
}


//function for keypress
function tutsKeyPress(x){
	if(x == 81 && event.shiftKey ) {
		audioTune("C#");
		console.log("key C#");
		tutsPressColorBlack(32);
		this.chordName="C#";
		this.keyPressLabel="Shift+Q";
	}
	else if(x == 81){
		audioTune("C");
		console.log("key C");
		tutsPressColor(0);
		this.chordName="C";
		this.keyPressLabel="Q";
	}
	if(x == 87 && event.shiftKey ) {
		audioTune("D#");
		console.log("key D#");
		tutsPressColorBlack(88);
		this.chordName="D#";
		this.keyPressLabel="Shift+W";
	}
	else if(x == 87){
		audioTune("D");
		console.log("key D");
		tutsPressColor(56, true);
		this.chordName="D";
		this.keyPressLabel="W";
	}
	if(x == 69) {
		audioTune("E");
		console.log("key E");
		tutsPressColor(112,false, true);
		this.chordName="E";
		this.keyPressLabel="E";
	}
	if(x == 82 && event.shiftKey ) {
		audioTune("F#");
		console.log("key F#");
		tutsPressColorBlack(200);
		this.chordName="F#";
		this.keyPressLabel="Shift+R";
	}
	else if(x == 82){
		audioTune("F");
		console.log("key F");
		tutsPressColor(168);
		this.chordName="F";
		this.keyPressLabel="R";
	}
	if(x == 84 && event.shiftKey ) {
		audioTune("G#");
		console.log("key G#");
		tutsPressColorBlack(256);
		this.chordName="G#";
		this.keyPressLabel="Shift+T";
	}
	else if(x == 84){
		audioTune("G");
		console.log("key G");
		tutsPressColor(224, true);
		this.chordName="G";
		this.keyPressLabel="T";
	}
	if(x == 89 && event.shiftKey ) {
		audioTune("A#");
		console.log("key A#");
		tutsPressColorBlack(312);
		this.chordName="A#";
		this.keyPressLabel="Shift+Y";
	}
	else if(x == 89){
		audioTune("A");
		console.log("key A");
		tutsPressColor(280, true);
		this.chordName="A";
		this.keyPressLabel="Y";
	}
	if(x == 85 ) {
		audioTune("B");
		console.log("key B");
		tutsPressColor(336, false, true);
		this.chordName="B";
		this.keyPressLabel="U";
	}
	//------------
	if(x == 73 && event.shiftKey ) {
		audioTune("C#'");
		console.log("key C#'");
		tutsPressColorBlack(424);
		this.chordName="C#'";
		this.keyPressLabel="Shift+I";
	}
	else if(x == 73){
		audioTune("C'");
		console.log("key C'");
		tutsPressColor(392);
		this.chordName="C'";
		this.keyPressLabel="I";
	}
	if(x == 79 && event.shiftKey ) {
		audioTune("D#'");
		console.log("key D#'");
		tutsPressColorBlack(480);
		this.chordName="D#'";
		this.keyPressLabel="Shift+O";
	}
	else if(x == 79){
		audioTune("D'");
		console.log("key D'");
		tutsPressColor(448,true);
		this.chordName="D'";
		this.keyPressLabel="O";
	}
	if(x == 80) {
		audioTune("E'");
		console.log("key E'");
		tutsPressColor(504,false,true);
		this.chordName="E'";
		this.keyPressLabel="P";
	}
	if(x == 65 && event.shiftKey ) {
		audioTune("F#'");
		console.log("key F#'");
		tutsPressColorBlack(592);
		this.chordName="F#'";
		this.keyPressLabel="Shift+A";
	}
	else if(x == 65){
		audioTune("F'");
		console.log("key F'");
		tutsPressColor(560);
		this.chordName="F'";
		this.keyPressLabel="A";
	}
	if(x == 83 && event.shiftKey ) {
		audioTune("G#'");
		console.log("key G#'");
		tutsPressColorBlack(648);
		this.chordName="G#'";
		this.keyPressLabel="Shift+S";
	}
	else if(x == 83){
		audioTune("G'");
		console.log("key G'");
		tutsPressColor(616,true);
		this.chordName="G'";
		this.keyPressLabel="S";
	}
	if(x == 68 && event.shiftKey ) {
		audioTune("A#'");
		console.log("key A#'");
		tutsPressColorBlack(704);
		this.chordName="A#'";
		this.keyPressLabel="Shift+D";
	}
	else if(x == 68){
		audioTune("A'");
		console.log("key A'");
		tutsPressColor(672,true);
		this.chordName="A'";
		this.keyPressLabel="D";
	}
	if(x == 70 ) {
		audioTune("B'");
		console.log("key B'");
		tutsPressColor(728,false,true);
		this.chordName="B'";
		this.keyPressLabel="F";
	}
	//=======
	if(x == 71 && event.shiftKey ) {
		audioTune("C#''");
		console.log("key C#''");
		tutsPressColorBlack(816);
		this.chordName="C#''";
		this.keyPressLabel="Shift+G";
	}
	else if(x == 71){
		audioTune("C''");
		console.log("key C''");
		tutsPressColor(784);
		this.chordName="C''";
		this.keyPressLabel="G";
	}
	if(x == 72 && event.shiftKey ) {
		audioTune("D#''");
		console.log("key D#''");
		tutsPressColorBlack(872);
		this.chordName="D#''";
		this.keyPressLabel="Shift+H";
	}
	else if(x == 72){
		audioTune("D''");
		console.log("key D''");
		tutsPressColor(840,true);
		this.chordName="D''";
		this.keyPressLabel="H";
	}
	if(x == 74) {
		audioTune("E''");
		console.log("key E''");
		tutsPressColor(896,false,true);
		this.chordName="E''";
		this.keyPressLabel="J";
	}
	if(x == 75 && event.shiftKey ) {
		audioTune("F#''");
		console.log("key F#''");
		tutsPressColorBlack(984);
		this.chordName="F#''";
		this.keyPressLabel="Shift+K";
	}
	else if(x == 75){
		audioTune("F''");
		console.log("key F''");
		tutsPressColor(952);
		this.chordName="F''";
		this.keyPressLabel="K";
	}
	if(x == 76 && event.shiftKey ) {
		audioTune("G#''");
		console.log("key G#''");
		tutsPressColorBlack(1040);
		this.chordName="G#''";
		this.keyPressLabel="Shift+L";
	}
	else if(x == 76){
		audioTune("G''");
		console.log("key G''");
		tutsPressColor(1008,true);
		this.chordName="G''";
		this.keyPressLabel="L";
	}
	if(x == 90 && event.shiftKey ) {
		audioTune("A#''");
		console.log("key A#''");
		tutsPressColorBlack(1096);
		this.chordName="A#''";
		this.keyPressLabel="Shift+Z";
	}
	else if(x == 90){
		audioTune("A''");
		console.log("key A''");
		tutsPressColor(1064,true);
		this.chordName="A''";
		this.keyPressLabel="Z";
	}
	if(x == 88 ) {
		audioTune("B''");
		console.log("key B''");
		tutsPressColor(1120,false,true);
		this.chordName="B''";
		this.keyPressLabel="X";
	}
	//=====================================
	if(x == 67 && event.shiftKey ) {
		audioTune("C#'''");
		console.log("key C#'''");
		tutsPressColorBlack(1208);
		this.chordName="C#'''";
		this.keyPressLabel="Shift+C";
	}
	else if(x == 67){
		audioTune("C'''");
		console.log("key C'''");
		tutsPressColor(1176);
		this.chordName="C'''";
		this.keyPressLabel="C";
	}
	if(x == 86 && event.shiftKey ) {
		audioTune("D#'''");
		console.log("key D#'''");
		tutsPressColorBlack(1264);
		this.chordName="D#'''";
		this.keyPressLabel="Shift+V";
	}
	else if(x == 86){
		audioTune("D'''");
		console.log("key D'''");
		tutsPressColor(1232,true);
		this.chordName="D'''";
		this.keyPressLabel="V";
	}
	if(x == 66) {
		audioTune("E'''");
		console.log("key E'''");
		tutsPressColor(1288,false,true);
		this.chordName="E'''";
		this.keyPressLabel="B";
	}
	if(x == 78 && event.shiftKey ) {
		audioTune("F#'''");
		console.log("key F#'''");
		tutsPressColorBlack(1376);
		this.chordName="F#'''";
		this.keyPressLabel="Shift+N";
	}
	else if(x == 78){
		audioTune("F'''");
		console.log("key F'''");
		tutsPressColor(1344);
		this.chordName="F'''";
		this.keyPressLabel="N";
	}
	if(x == 77 && event.shiftKey ) {
		audioTune("G#'''");
		console.log("key G#'''");
		tutsPressColorBlack(1432);
		this.chordName="G#'''";
		this.keyPressLabel="Shift+M";
	}
	else if(x == 77){
		audioTune("G'''");
		console.log("key G'''");
		tutsPressColor(1400,true);
		this.chordName="G'''";
		this.keyPressLabel="M";
	}
	if(x == 188 && event.shiftKey ) {
		audioTune("A#'''");
		console.log("key A#'''");
		tutsPressColorBlack(1488);
		this.chordName="A#'''";
		this.keyPressLabel="Shift+,";
	}
	else if(x == 188){
		audioTune("A'''");
		console.log("key A'''");
		tutsPressColor(1456,true);
		this.chordName="A'''";
		this.keyPressLabel=",";
	}
	if(x == 190 ) {
		audioTune("B'''");
		console.log("key B'''");
		tutsPressColor(1512,false,true);
		this.chordName="B'''";
		this.keyPressLabel=".";
	}
	
}

//function to get tune ID from index.html
function audioTune(tuneID){
	var tune = document.getElementById(tuneID);
	tune.play();
}

//function to redraw rect with other color when tuts was pressed
function tutsPressColor(x,y,z){
	var cvs = document.getElementById('pianoCvs');
	var ctx2 = cvs.getContext('2d');
	ctx2.fillStyle='#71e600';
	//to redraw tuts on left side and replace with green tuts
	if(!y && !z){
	    ctx2.fillRect(x,250,32,300);	
	    ctx2.fillRect(x,430,55,120);
	}
	//to redraw tuts on middle side and replace with green tuts
	if(y == true){
	    ctx2.fillRect(x+20,250,12,300);
	    ctx2.fillRect(x,430,55,120);
	}
	//to redraw tuts on right side and replace with green tuts
	if(z == true){
	    ctx2.fillRect(x,430,55,120);	
	    ctx2.fillRect(x+21,250,35,300);	
	}
	lightAnimate(ctx2);
	ctx2.save();
    setTimeout(function(){
    	ctx2.restore();
        ctx2.clearRect(0,0,1565,600);
        pianoClickWhite(ctx2,0);
	    pianoClickBlack(ctx2,32);
	    keyLabel(ctx2);
	    chordLabel(ctx2);
	    this.keyPressLabel=null;
		this.chordName=null;
		sideLight(ctx2);
    },400);
}

function tutsPressColorBlack(x){
	var cvs = document.getElementById('pianoCvs');
	var ctx3 = cvs.getContext('2d');
	ctx3.fillStyle='#71e600';
	ctx3.fillRect(x,250,45,180);	
	console.log("blackTuts");
	lightAnimate(ctx3);
	ctx3.save();
    setTimeout(function(){
    	ctx3.restore();
        ctx3.clearRect(0,0,1565,600);
        pianoClickWhite(ctx3,0);
	    pianoClickBlack(ctx3,32);
	    keyLabel(ctx3);
	    chordLabel(ctx3);
	    this.keyPressLabel=null;
		this.chordName=null;
		sideLight(ctx3);
    },400);
}

//this function show information what chord/key that was pressed
function chordLabel(ctx){
	var chord;
	if(this.chordName == null){
		chord=" ";
	}else{
		chord=this.chordName;
	}
	ctx.fillStyle='#ffffff';
	ctx.fillRect(600,100,170,50);
	ctx.font = "14px Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText(chord,680,130);
}

function keyLabel(ctx){
	var key;
	if(this.keyPressLabel == null){
		key=' ';
	}else{
		key=this.keyPressLabel;
	}
	ctx.fillStyle='#ffffff';
	ctx.fillRect(800,100,170,50);
	ctx.font = "14px Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText("Keyboard :  "+key,825,130);
}

//function to show image in upper left and right
function sideLight(ctx){
	var image = new Image();
	image.onload=function(){
			ctx.drawImage(image,96,70,110,110);
			ctx.drawImage(image,1368,70,110,110);
	};
	image.src='media/speaker.png';
}
//function to animate image with shadow blur, light animation 
function lightAnimate(ctx2,ctx3){
	var image = new Image();
	image.onload=function(){
		ctx2.shadowBlur = 60;
		ctx2.shadowColor='#ffffff';
		ctx2.drawImage(image,96,70,110,110);
	    ctx2.drawImage(image,1368,70,110,110);
	};
	image.src='media/speaker.png';
}

//function to play music
function playMusic(){
	var text = document.getElementById('musicStop');
	if(this.music == null){
		alert("Choose song before click play button");
		return;
	}
	var music = musicCheck(this.music);
	if(text.value == "Play"){
		text.value= "Stop";
		play(music);
	}else if(text.value == "Stop"){
		text.value = "Play";
		pause(music);
	}
}


function getMusicID(musicID){
	if(document.getElementById('musicStop').value == "Stop"){
		alert("Click stop before change another song");
		return;
	}
	var musicName=['odeToJoy','canon','furElise','notAlone'];
	for (x=0;x<4;x++){
		if(musicName[x] != musicID){
			document.getElementById(musicName[x]).style.backgroundColor="#ffffff";
		}else{
			document.getElementById(musicID).style.backgroundColor="#0099ff";
		}
	}
	this.music=musicID;
}

function musicCheck(x){
	if(x == 'odeToJoy'){
		return 'music1';
	}if(x == 'canon'){
		return 'music2';
	}if(x == 'furElise'){
		return 'music3';
	}if(x == 'notAlone'){
		return 'music4';
	}else{
		return null;
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