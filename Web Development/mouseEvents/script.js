var input = document.getElementById("in");
var body = document.getElementById("b");
//adding mouse move listner to input field

body.addEventListener("mousemove", function(event) {
	input.setAttribute("style", "color: red");
	input.setAttribute("style", `top: ${event.pageY}; left: ${event.pageX};`);
	console.log(input)
});