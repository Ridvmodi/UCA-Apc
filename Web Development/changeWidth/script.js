var id = setInterval(changeWidth, 1000);
var input = document.getElementById("in");

function changeWidth() {
	var width = parseInt(input.style.width)+1;
	console.log(width);
	width=width+'px';
	input.style.width = width ;
	if(width + 1 == 500) {
		clearInterval(changeWidth);
	}
}


