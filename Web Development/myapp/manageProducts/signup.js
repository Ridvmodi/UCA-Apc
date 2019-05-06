
var userName = document.getElementById("userName");
var passwd = document.getElementById("passwd");
var rePasswd = document.getElementById("rePasswd");
var btn = document.getElementById("btn");
var fullName = document.getElementById("name");
var details = [];
if(localStorage.getItem("Credentials")) {
	details = JSON.parse(localStorage.getItem("Credentials"));
}
btn.addEventListener("click", function () {
	if(checkCredentials()) {
		addToStorage();
	}
});


function checkCredentials () {
	if(name.value == "" || userName.value == "" || passwd.value == "" || rePasswd.value == "") {
		alert("All fields are required");
		return 0;
	}	
	if(passwd.value != rePasswd.value) {
		alert("Please Enter Same Password");
		return 0;
	}
	return 1;
}

function addToStorage (){

	for(var i = 0;i<details.length;i++) {
		if(details[i].UserName == userName.value) {
			alert("Please choose a different username");
			return;
		}
	}
	var detail = new Object();
	detail.fullName = fullName.value;
	detail.UserName = userName.value;
	detail.Password = passwd.value;
	details.push(detail);
	localStorage.setItem("Credentials", JSON.stringify(details));
	alert("Data Saved Successfully");
	window.open("showProducts.html", "_self");
}
