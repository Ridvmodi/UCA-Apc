var products = [];
var productId = 1;
var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");


aAddProduct.addEventListener("click", function(event) {  
    createNewProductPanel(); 
	}
);
	
function addProducttoArray() {
	var objProduct = new Object();
	
	objProduct.Id = productId;
 	objProduct.Name = document.getElementById("txtProductName").value;
    objProduct.Desc = document.getElementById("txtProductDesc").value;
	objProduct.Price = document.getElementById("txtProductPrice").value;
	objProduct.Quantity = document.getElementById("txtProductQuantity").value;
	
	if( objProduct.Price == "" || objProduct.Name == "" || objProduct.Desc == "" || objProduct.Quantity == "") {
		alert("All Fields are required");
		deleteNewProductPanel();
		unHideAddNewProductLink();
		return;
	}

    products.push(objProduct);
	addProducttoDOM(objProduct);
    deleteNewProductPanel();
	productId++;
}

function addProducttoDOM(objProduct) {  	
	//create a new DIV for this product 
	var divProduct = document.createElement("div");
	divProduct.setAttribute("id", productId);
	
	//create a anchor for product name
	var aProductName = document.createElement("a");
	aProductName.setAttribute("href","#");
	aProductName.innerHTML = "Get details of the Project here: " +  objProduct.Name;
	divProduct.appendChild(aProductName);
	
	insertBlankLine(divProduct);
	
	//create a label for product description
	var lblProductName = document.createElement("label");
	lblProductName.innerHTML = objProduct.Desc;
    divProduct.appendChild(lblProductName);
	
    insertBlankLine(divProduct);
		
	//create a anchor for deleting this product
	var aDelete = document.createElement("a");
	aDelete.setAttribute("href","#");
	aDelete.innerHTML = "Delete";
	divProduct.appendChild(aDelete);

	aDelete.addEventListener("click",function(event) {
	   // To access the parent node of the element which is clicked
	   // Ist method
		  // var selectedProductIndex = getProductIndex(parseInt(divProduct.id));
		  // removeFromProductsArray(selectedProductIndex);
          // divProduct.parentNode.removeChild(divProduct);
		  
	   // 2nd Method 
		   var targetParent = event.target.parentNode;
		   var selectedProductIndex = getProductIndex(parseInt(targetParent.id)); 
		   removeFromProductsArray(selectedProductIndex);
		   targetParent.parentNode.removeChild(targetParent);
		}
	);
							
    aProductName.addEventListener("click",function(event) {
		 var selectedProductIndex = getProductIndex(parseInt(event.target.parentNode.id));
		 getProductDetails(selectedProductIndex);
	  }
	);
									  
	divListProducts.appendChild(divProduct);
	
    insertBlankLine(divProduct);
	insertBlankLine(divProduct);

	unHideAddNewProductLink();
}

// Given a product ID, returns the index to the product data in products. 
function getProductIndex(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].Id == id) 
			return i;
    }
} 

function getProductDetails(selectedProductIndex) {
  console.log( "Name : " + products[selectedProductIndex].Name + 
  				"  Desc: " + products[selectedProductIndex].Desc + 
               	"   Price : " + products[selectedProductIndex].Price +
               	"  Quantity: " + products[selectedProductIndex].Quantity);	
}

function removeFromProductsArray(selectedProductIndex) {
	products.splice(selectedProductIndex,1);
	console.log(products);
}

function deleteNewProductPanel() {
   var childNodes = divAddProduct.childNodes;
   for (var i = 0; childNodes.length > 0;) {
     divAddProduct.removeChild(childNodes[i]);
   }
}

function hideAddNewProductLink() {
   aAddProduct.setAttribute("style","visibility:hidden");
}

function unHideAddNewProductLink() {
   aAddProduct.setAttribute("style","visibility:visible");
}

function insertBlankLine(targetElement) {
	var br = document.createElement("br");
    targetElement.appendChild(br);
}

function createNewProductPanel() {
	hideAddNewProductLink();

	/* Label - Product Quantity */ 
	var lblAddProduct = document.createElement("label");
	lblAddProduct.innerHTML = "Add New Product";
	lblAddProduct.setAttribute("style","font-weight:bold");
    divAddProduct.appendChild(lblAddProduct);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);
	
	/* TextBox - Product Name */ 
	var txtProductName = document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","txtProductName");
    txtProductName.setAttribute("placeholder", "Enter the product name");	
	txtProductName.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductName);	
	
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);
	
	/* TextBox - Product Description */ 
	var txtProductDesc = document.createElement("textarea");
	txtProductDesc.setAttribute("id","txtProductDesc");
    txtProductDesc.setAttribute("placeholder", "Enter the product description");	
	txtProductDesc.setAttribute("style","width:250px ; height:50px");
	divAddProduct.appendChild(txtProductDesc);	
	
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	/* TextBox - Product Price */ 
	var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","txtProductPrice");
    txtProductPrice.setAttribute("placeholder", "Enter the product price");	
	txtProductPrice.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductPrice);	
	
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);
	
	/* TextBox - Product Quantity */ 
	var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
    txtProductQuantity.setAttribute("placeholder", "Enter the product quantity");	
	txtProductQuantity.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductQuantity);	
	
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);
	
	/* Button - Add Product */ 
	var btnAddButton = document.createElement("button");
	btnAddButton.setAttribute("id","btnAddButton");
	btnAddButton.innerHTML = "Add Product";
	divAddProduct.appendChild(btnAddButton);		
		
    btnAddButton.addEventListener("click", function(event) {
			addProducttoArray();
		}
	);	
}