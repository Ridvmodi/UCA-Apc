var userName = document.getElementById("userName")
var passwd = document.getElementById("passwd")
var details = JSON.parse(localStorage.getItem("Credentials"));
var btn = document.getElementById("login");
btn.addEventListener("click", function () {
	for(var i = 0;i<details.length;i++) {
		if(details[i].UserName == userName.value && details[i].Password == passwd.value) {
			alert("Logined SuccessFully")
			window.open("showProducts.html", "_self");
			return ;
		}
	}
	alert("Wrong Credentials");
});