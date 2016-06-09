$('#shineOn').hide();
$('#confetti').hide();
$('.revealText').hide();
$("body").css("overflow", "hidden");

var elem0 = document.getElementById("hat"); 
var elem1 = document.getElementById("Thomas"); 
var elem2 = document.getElementById("shineOn");
var pos0 = -440;
var pos1 = window.innerHeight + 10;
var id = setInterval(frame, 10);
var hatThomasConnect = 0;
var parent = document.getElementById("mainBody");

myAudio = new Audio('testAudio.mp3'); 
myAudio.addEventListener('ended', function() {
	this.currentTime = 0;
	this.play();
}, false);
//myAudio.play();

function frame() {
	hatThomasConnect = pos1 - pos0;
	if (hatThomasConnect <= 85) {
		clearInterval(id);
		$("#Thomas").attr('src', 'img/happyFace.png');
		var shineTop = parseInt($('#Thomas').css('top').replace(/[^\d.]/g, '' ));
		var shineLeft = parseInt($('#Thomas').css('left').replace(/[^\d.]/g, '' ));
		elem2.style.top= (shineTop - 1121) + 'px';
		elem2.style.left = (shineLeft - 1375) + 'px';
		rotateAnimation('shineOn', 40);
		$('#shineOn').fadeIn("slow");
		$('#confetti').fadeIn("slow");
		
		setTimeout(function(){$('.revealText').fadeIn("slow");}, 3000);
		myAudio.play();
		var spawnImages = setInterval(startImageSpawner, 1000);
		var moveID = setInterval(moveImages, 10);
	} else {
		pos0++; 
		pos1--;
		
		//pos0 += 10;
		//pos1 -= 10;
		elem0.style.top = pos0 + 'px'; 
		elem1.style.top = pos1 + 'px'; 
	}
}
function spin() {
	var c = document.getElementById("Thomas");
	var ctx = c.getContext("2d");
	ctx.rotate(20 * Math.PI / 180);
	ctx.fillRect(50, 20, 100, 50);
}

//Code below found at https://www.developphp.com/video/JavaScript/Transform-Rotate-Image-Spin-Smooth-Animation-Tutorial
var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}

function startImageSpawner() {
	var moveSpeed = (Math.random() * 5) + 1;
	var leftSpawn = (Math.random() * (window.innerWidth - 100)) + 1;
	var imageSize = (Math.random() * 300) + 150;
	var imageNumber = Math.floor((Math.random() * 56));
	
	var x = document.createElement("IMG");
	x.setAttribute("src", "img/TomGradPhotos/"+ imageNumber +".jpg");
	x.setAttribute("class", "tempImage");
	x.setAttribute("id", "moving");
	x.setAttribute("width", imageSize);
	x.setAttribute("alt", moveSpeed);
	x.style.cssText = 'position:absolute;top:-500px;left:'+ leftSpawn +'px;';
	document.body.appendChild(x);
}

function deleteAllImages() {
	var i = 0;
	var arrayStuff = document.getElementsByClassName("deleteImage");
	
	while(arrayStuff.length){
		parent.removeChild(arrayStuff[0]);
	}
	
}

function moveImages() {
	
	var i = 0;
	var arrayStuff = document.getElementsByClassName("tempImage");
	
	for(i = 0; i < arrayStuff.length; i++){
		if(arrayStuff[i].id == "moving"){
			var newPos = parseInt($(arrayStuff[i]).css('top').split('p')[0]);
			newPos += parseInt($(arrayStuff[i]).attr("alt"));
			$(arrayStuff[i]).css('top', newPos + 'px');
			if(newPos > (window.innerHeight)){
				$(arrayStuff[i]).attr("class","deleteImage");
			}
		}
		deleteAllImages();
	}
}
		
		
		
		
		
		
		
		
		