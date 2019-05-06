var container = document.getElementById("container");

var data = localStorage.getItem("Data");
var products = JSON.parse(data);
var cartItems = [];
var itemOb = new Object();
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Name";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Price";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Quantity";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Add To Cart";
tr.appendChild(td);
container.appendChild(tr)

if(products) {
	for(var i = 0;i<products.length;i++) {
		addProductsToDom(products[i]);
	}
}
function addProductsToDom(productObject) {

	tr = document.createElement("tr");
	tr.setAttribute("id", productObject.Id);

	td = document.createElement("td");
	td.innerHTML = productObject.Name;
	tr.appendChild(td);

	td = document.createElement("td");
	td.innerHTML = productObject.Price;
	tr.appendChild(td);

	td = document.createElement("td");
	td.innerHTML = productObject.Quantity;
	tr.appendChild(td);

	td = document.createElement("td");
	var button = document.createElement("button");
	button.setAttribute("id", "btn");
	button.innerHTML = "Add To Cart";

	button.addEventListener("click", function(event) {
		var parentNode = event.target.parentNode.parentNode;
		if(products[parentNode.getAttribute("id") - 1].Quantity == 0) {
			alert("Product is out of stock");
			return;
		}
		products[parentNode.getAttribute("id") - 1].Quantity--;
		localStorage.removeItem("Data");
		localStorage.setItem("Data", JSON.stringify(products));
		parentNode.children[2].innerHTML = parseInt(parentNode.children[2].innerHTML)-1;
		// setting cart item in localstorage
		var id = parentNode.getAttribute("id") - 1;
		addToCart(id);
	});
	td.appendChild(button);
	tr.appendChild(td);
	container.appendChild(tr);

}
function addToCart(id) {
	
	if(cartItems[id]) {
		itemOb.Quantity++;
	} else {
		itemOb = new Object();
		itemOb.Id = products[id].Id;
		itemOb.Name = products[id].Name;
		itemOb.Price = products[id].Price;
		itemOb.Quantity = 1;
	}
	cartItems[id] = itemOb;
	localStorage.setItem("Cart", JSON.stringify(cartItems));
}
