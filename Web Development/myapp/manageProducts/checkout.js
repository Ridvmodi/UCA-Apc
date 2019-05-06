var table = document.getElementById("container");

var tr = document.createElement("tr");
var td = document.createElement("td");
var totalDiv = document.getElementById("total");
var totalAmount = 0;

td.innerHTML = "Name";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Quantity";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Price/Pc";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Total Price";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Remove Item";
tr.appendChild(td);

table.appendChild(tr);

var cartItems = JSON.parse(localStorage.getItem("Cart"));

if (cartItems) {
	for(var i = 0;i<cartItems.length;i++) {
		addProductsToDom(cartItems[i]);
	}
}
function addProductsToDom(cartItem) {
	tr = document.createElement("tr");
	tr.setAttribute("id", cartItem.Id);
	td = document.createElement("td");
	td.innerHTML = cartItem.Name;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = cartItem.Quantity;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = cartItem.Price;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = cartItem.Quantity * cartItem.Price;
	tr.appendChild(td);
	td = document.createElement("td");
	var button = document.createElement("button");
	button.innerHTML = "Remove";
	totalAmount += cartItem.Quantity * cartItem.Price;
	button.addEventListener("click", function(event) {
		var parentNode = event.target.parentNode.parentNode;
		parentNode.children[1].innerHTML -=  1;
		parentNode.children[3].innerHTML -= parentNode.children[2].innerHTML;
		totalAmount -= parentNode.children[2].innerHTML;
		total.innerHTML = "Total Amount: ";
		total.innerHTML += totalAmount;
		cartItems[parentNode.id - 1].Quantity -= 1;
		localStorage.setItem("Cart", JSON.stringify(cartItems));
		if(parentNode.children[1].innerHTML == 0) {
			for(var i = parentNode.id - 1;i<cartItems.length - 1;i++) {
				cartItems[i+1].Id -= 1;
				cartItems[i] = cartItems[i+1];
				console.log(cartItems);	
				cartItems.length--;
			}
			localStorage.setItem("Cart", JSON.stringify(cartItems));
			parentNode.parentNode.removeChild(parentNode);
		}
	});
	td.appendChild(button);
	tr.appendChild(td);
	table.appendChild(tr);	
	
}
total.innerHTML += totalAmount;