var task = document.getElementById("task");
var Name = document.getElementById("name");
var fileName = document.getElementById("file");
var btn = document.getElementById("btn");
var getFile1 = document.getElementById("getFile1");
var getFile2 = document.getElementById("getFile2");
var ul = document.querySelector("ul");
var request = new XMLHttpRequest();

btn.addEventListener("click", function () {
	request.open("POST", "/" + fileName.value + ".txt");
	request.onload = function() {
		if(request.status === 200) {
			console.log("Another")
		}
	}
	var data = new Object();
	data.name = Name.value;
	data.task = task.value;
	request.send(JSON.stringify(data));
});

getFile1.addEventListener("click", function () {
	var request = new XMLHttpRequest();
	request.open("GET", "/1.txt");
	request.addEventListener("load", function () {
		if(request.status == 200) {
			var data = [];
			data = request.responseText;
			data = JSON.parse(data)
			for(var i = 0;i<data.length;i++) {
				if(data[i] != null) {
					var li = document.createElement("li");
					var p = document.createElement("p");
					p.innerHTML =  data[i]["name"] + " " + data[i]["task"];
					var button = document.createElement("button");
					button.innerHTML = "Remove";
					button.setAttribute("id", i);
					button.addEventListener("click", function (event) {
						event.target.parentNode.parentNode.removeChild(event.target.parentNode);
						delete data[event.target.id];
						var newRequest = new XMLHttpRequest();
						newRequest.open("DELETE", "/1.txt");
						newRequest.onload = function() {
							console.log("Data Changed");
						}
						newRequest.send(JSON.stringify(data));
					});
					li.appendChild(p);
					li.appendChild(button);
					ul.appendChild(li);
				}
			}
		}
	});
	request.send();
});

getFile2.addEventListener("click", function () {
	var request = new XMLHttpRequest();
	request.open("GET", "/2.txt");
	request.addEventListener("load", function () {
		if(request.status == 200) {
			var data = [];
			data = request.responseText;
			data = JSON.parse(data)
			for(var i = 0;i<data.length;i++) {
				if(data[i] != null) {
					var li = document.createElement("li");
					var p = document.createElement("p");
					p.innerHTML =  data[i]["name"] + " " + data[i]["task"];
					var button = document.createElement("button");
					button.innerHTML = "Remove";
					button.addEventListener("click", function (event) {
						event.target.parentNode.parentNode.removeChild(event.target.parentNode);
						delete data[event.target.id];
						var newRequest = new XMLHttpRequest();
						newRequest.open("DELETE", "/2.txt");
						newRequest.onload = function() {
							console.log("Data Changed");
						}
						newRequest.send(JSON.stringify(data));
					});
					li.appendChild(p);
					li.appendChild(button);
					ul.appendChild(li);
				}
			}
		}
	});
	request.send();
});

