var input = document.querySelector('input');
var time, intervalId;
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-pause");
var stop = document.querySelector(".fa-stop");
var h1 = document.querySelector("h1");
var alertSound = new Audio();
alertSound.src = "alert.mp3";
	play.addEventListener("click", function () {
			if( input.value != "") {
				time = input.value;
				input.value = "";
				intervalId = setInterval(timer, 1000)
		}
	})
pause.addEventListener("click", function () {
	input.value = time;
	clearInterval(intervalId);
})
stop.addEventListener("click", function() {
	input.value = "";
	h1.innerHTML = "";
	clearInterval(intervalId);
})
function timer() {
	time--;
	h1.innerHTML = time;
	if(time == 0) {
		alertSound.play();
		clearInterval(intervalId);
		alert("Times Out");
	}
}