var input1 = document.getElementById("in");
var input2 = document.getElementById("in2");
var cord = document.getElementById("c");

input1.addEventListener("mousemove", function(event) {
	input1.setAttribute("style", "background-color : white;");
	console.log(input1);
	cord.innerHTML = "(" + event.pageX + ", " + event.pageY + ")";
});

input1.addEventListener("mouseout", function(event) {
	input1.setAttribute("style", "background-color:red;");
});

input2.addEventListener("mouseout", function(event) {
	input2.setAttribute("style", "background-color : red;");
});

input2.addEventListener("mousemove", function(event) {
	input2.setAttribute("style", "background-color : white;");
	console.log(input2);
});