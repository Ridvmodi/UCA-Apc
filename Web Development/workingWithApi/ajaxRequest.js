var container = document.getElementById("container");

var request  = new XMLHttpRequest();
var data = "";
var tr;
var td, td1, td2;
request.open("GET", "https://api.github.com/users?since=135");
request.send();
request.onload = function() {
	data  = request.responseText;
	data = JSON.parse(data);
	console.log(data);
		for(var i = 0;i<data.length;i++) {
		tr = document.createElement("tr");
		td = document.createElement("td");
		var img = document.createElement("img");
		img.setAttribute("src", (data[i])["avatar_url"]);
		img.setAttribute("style", "width: 100px; height:100px;")
		td.appendChild(img);
		tr.appendChild(td);
		td = document.createElement("td");
		var name = document.createElement("h2");
		name.innerHTML = "UserName: " + (data[i])["login"];
		td.appendChild(name);
		tr.appendChild(td);
		td1 = document.createElement("td");
		td1.innerHTML = data[i]["html_url"];
		tr.appendChild(td1);
		td2 = document.createElement("td");
		td2.innerHTML = data[i]["followers_url"];
		tr.appendChild(td2);
		container.appendChild(tr);
	}
}

function findFollowers(data) {
	var request  = new XMLHttpRequest();
	request.open("GET", data["followers_url"]);
	request.send();
	request.onload = function() {
		td1.innerHTML = (JSON.parse(request.responseText).length);
		tr.appendChild(td1);
	}
}
function findFollowing(data) {
	var request  = new XMLHttpRequest();
	request.open("GET", data["following_url"]);
	request.send();
	request.onload = function() {
		td.innerHTML = (JSON.parse(request.responseText).length);
		tr.appendChild(td);
	}
}
function findOrg(data) {
	var request  = new XMLHttpRequest();
	request.open("GET", data["organizations_url"]);
	request.send();
	request.onload = function() {
		td2.innerHTML = (JSON.parse(request.responseText).length);
		tr.appendChild(td2);
	}
}